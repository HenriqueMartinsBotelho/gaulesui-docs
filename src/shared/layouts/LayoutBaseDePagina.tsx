import { ReactNode } from "react";
import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Theme,
} from "@mui/material";
import { useDrawerContext } from "../contexts";

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

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1} padding={2} style={{background: theme.palette.background.default}}>
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
        <Typography variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipses">
          {titulo}
        </Typography>
      </Box>
      {barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}
      <Box
      width="90%"
      margin="auto"
      style={{ padding: '24px', 
      boxShadow: "rgba(50, 50, 93, 0.85) 0px 50px 100px -20px, rgba(0, 0, 0, 0.6) 0px 30px 60px -30px, rgba(10, 37, 64, 0.95) 0px -2px 6px 0px inset",
      borderRadius: '15px',
      }}
      flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
