import { Box } from "@mui/material";
import { LayoutBaseDePagina } from "../../shared/layouts";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from '@codemirror/theme-one-dark';


export const Dashboard = () => {
  return (
    <LayoutBaseDePagina titulo="GaulesUI" barraDeFerramentas={<>🌳</>}>
      <Box>
        <Box style={{fontSize: '20px', marginBottom: '10px'}}>Uso básico</Box>
         Em um projeto React instale a biblioteca com o comando:
        <Box marginTop="10px">
        <CodeMirror
        theme={oneDark}
          value="npm install gaulesui_lib"
          width="300px"
          extensions={[javascript({ jsx: true })]}
        />
        </Box>
      </Box>
    </LayoutBaseDePagina>
  );
};
