import { ReactNode, useState, useEffect } from "react";
import {
  Box,
  Button,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
  Theme,
  IconButton,
} from "@mui/material";
import { useDrawerContext } from "../contexts";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import { apiURL } from "../../constants/constants";

interface ILayoutBaseDepaginaProps {
  titulo: string;
  barraDeFerramentas?: ReactNode;
  children: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDepaginaProps> = ({
  children,
  titulo,
  barraDeFerramentas,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();
  // const [user, setUser] = useState<any>({})

  async function fetchGitHubUser(token) {
    const request = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: "token " + token,
      },
    });
    return await request.json();
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const user_data = fetchGitHubUser(token);

    user_data.then((r) => {
      console.log(r);
      localStorage.getItem("user_login") === null
        ? localStorage.setItem("user_login", r.login)
        : console.log("usuário já existe");
    });
  }, []);

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      gap={1}
      padding={2}
      // style={{ background: theme.palette.primary[50] }}
    >
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        gap={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipses"
          >
            {titulo}
          </Typography>
          <Box
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {localStorage.getItem("user_login") !== null && (
              <Box>Olá, {localStorage.getItem("user_login")}.</Box>
            )}
            <a
              style={{ textDecoration: "inherit" }}
              href={`${apiURL}/api/auth/redirect`}
            >
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                // onClick={() => handleLogin()}
              >
                GitHub Login
              </Button>
            </a>

            {/* <a
              style={{ textDecoration: "inherit" }}
              href={`http://localhost:3001/logout`}
            >
              <Button variant="outlined">Logout</Button>
            </a> */}
          </Box>
        </Box>
      </Box>
      {barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}
      <Box
        width="90%"
        margin="auto"
        style={{
          padding: "24px",
          boxShadow:
            "rgba(50, 50, 93, 0.85) 0px 50px 100px -20px, rgba(0, 0, 0, 0.6) 0px 30px 60px -30px, rgba(10, 37, 64, 0.95) 0px -2px 6px 0px inset",
          borderRadius: "15px",
        }}
        flex={1}
        overflow="auto"
      >
        {children}
      </Box>
    </Box>
  );
};
