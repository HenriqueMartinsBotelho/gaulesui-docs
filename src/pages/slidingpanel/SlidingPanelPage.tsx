import { Box } from "@mui/material";
import { LayoutBaseDePagina } from "../../shared/layouts";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import Comments from "../../components/Comments";
import { SlidingPanel } from "gaulesui_lib";
import { oneDark } from "@codemirror/theme-one-dark";
import fallen1 from "./../../shared/assets/fallen1.jpg";

export const SlidingPanelPage = () => {
  const code = `import {SlidingPanel} from "gaulesui_lib"
import fallen1 from './../../shared/assets/fallen1.jpg'
  
export const Page = () => {
  return (
    <SlidingPanel text="Confia no Verdadeiro!" direction="top"> 
      <img style={{width: '100%'}} src={fallen1} alt="fallen" />
    </SlidingPanel>
  )
}`;

  const code2 = `export interface ISlidingPanel {
  children: React.ReactNode;
  text: string;
  direction?: "top" | "bottom" | "left" | "right";
  w?: string;
  h?: string;
  bg?: string;
}`;

  return (
    <LayoutBaseDePagina titulo="GaulesUI" barraDeFerramentas={<>🌳</>}>
      <Box>
        <Box style={{ fontSize: "20px", marginBottom: "10px" }}>
          Exemplo de uso
        </Box>
        <Box marginTop="10px">
          <CodeMirror
            theme={oneDark}
            value={code}
            width="630px"
            extensions={[javascript({ jsx: true })]}
          />
        </Box>
        <Box marginTop="20px" gap="24px" display="flex">
          <Box>
            <Box style={{ fontSize: "20px", marginBottom: "10px" }}>Top</Box>
            <SlidingPanel text="Confia no Verdadeiro!" direction="top">
              <img style={{ width: "100%" }} src={fallen1} alt="fallen" />
            </SlidingPanel>
          </Box>
          <Box>
            <Box style={{ fontSize: "20px", marginBottom: "10px" }}>Left</Box>
            <SlidingPanel text="Confia no Verdadeiro!" direction="left">
              <img style={{ width: "100%" }} src={fallen1} alt="fallen" />
            </SlidingPanel>
          </Box>
          <Box>
            <Box style={{ fontSize: "20px", marginBottom: "10px" }}>Right</Box>
            <SlidingPanel text="Confia no Verdadeiro!" direction="right">
              <img style={{ width: "100%" }} src={fallen1} alt="fallen" />
            </SlidingPanel>
          </Box>
          <Box>
            <Box style={{ fontSize: "20px", marginBottom: "10px" }}>Bottom</Box>
            <SlidingPanel text="Confia no Verdadeiro!" direction="bottom">
              <img style={{ width: "100%" }} src={fallen1} alt="fallen" />
            </SlidingPanel>
          </Box>
        </Box>
      </Box>
      <Box style={{ marginTop: "20px" }}>
        <Box style={{ fontSize: "20px", marginBottom: "10px" }}>Interface</Box>
        <CodeMirror
          theme={oneDark}
          value={code2}
          width="630px"
          extensions={[javascript({ jsx: true })]}
        />
      </Box>
      <Box>
        <Comments currentUserId="1" />
      </Box>
    </LayoutBaseDePagina>
  );
};
