import { Box } from "@mui/material";
import { LayoutBaseDePagina } from "../../shared/layouts";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import {Button} from "gaulesui_lib"
import Comments from "./../../components/Comments"

import { oneDark } from '@codemirror/theme-one-dark';


export const ButtonPage = () => {

  const code = `import React from 'react'
import {Button} from "gaulesui_lib"

export const Page = () => {
  return (
    <Button label="Botão">Botão</Button>
  )
}
  `



  return (
    <LayoutBaseDePagina titulo="GaulesUI" barraDeFerramentas={<>🌳</>}>
      <Box>
        <Box style={{fontSize: '20px', marginBottom: '10px'}}>Exemplo de uso</Box>
         
        <Box marginTop="10px" >
        <CodeMirror
        theme={oneDark}
          value={code}
          width="400px"
          extensions={[javascript({ jsx: true })]}
        />
        </Box>
        <Box marginTop="10px" display="flex">
          <Button label="Botão"/>
        </Box>
      </Box>
      <Box>
        <Comments currentUserId="1"/>
      </Box>
    </LayoutBaseDePagina>
  )
}


