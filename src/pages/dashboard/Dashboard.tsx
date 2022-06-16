import { Box } from "@mui/material";
import { LayoutBaseDePagina } from "../../shared/layouts";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { FaGithub } from "react-icons/fa";

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina titulo="GaulesUI" barraDeFerramentas={<></>}>
      <Box>
        <Box
          style={{ fontSize: "20px", marginBottom: "10px", color: "	#9900ff" }}
        >
          Introdução
        </Box>
        GaulesUI é uma biblioteca open source de componentes React com foco em
        componentes sofisticados e acessíveis. <br />
        Valorizamos o apoio da comunidade e disponibilizamos na página de cada
        componente, uma seção de comentários onde você pode usar dar sugestões e
        tirar dúvidas.
        <Box>
          <ul style={{ listStyleType: "none", marginLeft: "-12px" }}>
            <li>
              <Box display="flex" gap="30px">
                <Box>
                  <Box display="flex" alignItems="center">
                    GitHub da Lib:&nbsp;
                    <a
                      style={{ color: "#fff" }}
                      href="https://github.com/HenriqueMartinsBotelho/gaulesui_lib"
                    >
                      <FaGithub fontSize="40px" />
                    </a>
                  </Box>
                </Box>
                <Box>
                  <Box display="flex" alignItems="center">
                    GitHub desse site:&nbsp;
                    <a
                      style={{ color: "#fff" }}
                      href="https://github.com/HenriqueMartinsBotelho/gaulesui-docs"
                    >
                      <FaGithub fontSize="40px" />
                    </a>
                  </Box>
                </Box>
              </Box>
            </li>
           
          </ul>
        </Box>
        <Box marginTop="10px"></Box>
      </Box>
      <Box style={{ marginTop: "20px" }}>
        <Box
          style={{ fontSize: "20px", marginBottom: "10px", color: "	#9900ff" }}
        >
          Instalação
        </Box>
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
      <Box style={{ marginTop: "30px" }}>
        <Box
          style={{ fontSize: "20px", marginBottom: "10px", color: "	#9900ff" }}
        >
          Nossos princípios
        </Box>
        <Box marginTop="10px">
          Beautiful is better than ugly.
          <br /> Explicit is better than implicit.
          <br />
          Simple is better than <del>fallen</del> complex.
        </Box>
      </Box>
      <Box marginTop="30px">
        <Box
          style={{ fontSize: "20px", marginBottom: "10px", color: "	#9900ff" }}
        >
          Principais Tecnologias usadas
        </Box>
        React, Typescript, CSS, Jest e Storybook.
      </Box>
      <Box marginTop="30px">
        <Box
          style={{ fontSize: "20px", marginBottom: "10px", color: "	#9900ff" }}
        >
          Outros projetos
        </Box>
        Por favor, verifique alguns dos meus outros projetos em{" "}
        <a style={{ color: "	#cc00ff" }} href="https://henriquembotelho.dev.br">
          henriquembotelho.dev.br
        </a>
        . Sinta-se à vontade para deixar um comentário ou pergunta e
        compartilhar com outras pessoas se achar alguma delas útil:
        <ol>
          <li>
            <a
              style={{ color: "	#cc00ff" }}
              href="https://gosupercode.vercel.app/"
            >
              GoSuperCode
            </a>
            : Uma engine para execução remota de código que pode ser usada para
            construir um site de aprendizado de algorotitmos e estrutura de
            dados como algoexpert, hackerrank e leetcode.
          </li>
          <li>
            <a
              style={{ color: "	#cc00ff" }}
              href="https://algoclassic2.vercel.app/"
            >
              AlgoClassic
            </a>
            : Baseada no famoso site famoso site https://www.bigocheatsheet.com/
            essa tabela dinâmica vai te ajudar a estudar algoritmos e estrutura
            de dados.
          </li>
          <li>
            <a
              style={{ color: "	#cc00ff" }}
              href="https://langlearn-bice.vercel.app/"
            >
              LangLearn
            </a>
            : É muito importante para um profissional da computação conhecer
            várias linguagens de paradigmas diferentes. Esse é o objetivo desse
            jogo e tutorial interativo.
          </li>
          <li>
            <a
              style={{ color: "	#cc00ff" }}
              href="https://codeeditor-rose.vercel.app/"
            >
              CodeEditor
            </a>
            : Que tal aprender a programar em grupo online nesse site que
            apresenta um editor de código e chat em vídeo com a opção de salvar
            cógidos usando a API do GitHub.
          </li>
          <li>
            <a
              style={{ color: "	#cc00ff" }}
              href="https://github.com/HenriqueMartinsBotelho/code_performance"
            >
              CodePerformance
            </a>
            : Um simples projeto para comparar a velocidade de execução de dois
            códigos.
          </li>
        </ol>
      </Box>
    </LayoutBaseDePagina>
  );
};
