import { Box } from "@mui/material";
import { LayoutBaseDePagina } from "../../shared/layouts";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Button } from "gaulesui_lib";
import Comment from "./../../components/Comment";

import { oneDark } from "@codemirror/theme-one-dark";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "./../../constants/constants";
import { v4 as uuidv4 } from "uuid";

export const ButtonPage = () => {
  const code = `import React from 'react'
import {Button} from "gaulesui_lib"

export const Page = () => {
  return (
    <Button label="Botão">Botão</Button>
  )
}
  `;

  const [comments, setComments] = useState<any>([]);
  const sectionId = "62bb4984bb18015a28a89df9";
  const [text, setText] = useState("");

  const getComments = async (id: string) => {
    axios
      .get(`${apiURL}/comments/section/${id}`)
      .then((response) => {
        setComments(response.data.comment.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getComments(sectionId);
  }, []);

  const handleText = (t) => {
    setText(t);
  };

  const handleComment = () => {
    axios
      .patch(`${apiURL}/comments/create/${sectionId}`, {
        comment_id: uuidv4(),
        body: text,
        username: "Jack",
        userId: "abc1",
        parentId: null,
        createdAt: new Date(),
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <LayoutBaseDePagina titulo="GaulesUI" barraDeFerramentas={<></>}>
      <Box
        style={{
          padding: "4px",
          height: "100%",
          overflow: "auto",
        }}
      >
        <Box>
          <Box style={{ fontSize: "20px", marginBottom: "10px" }}>
            Exemplo de uso
          </Box>

          <Box marginTop="10px">
            <CodeMirror
              theme={oneDark}
              value={code}
              width="400px"
              extensions={[javascript({ jsx: true })]}
            />
          </Box>
          <Box marginTop="10px" display="flex">
            <Button label="Botão" />
          </Box>
        </Box>
        <Box>
          {/* <Comments currentUserId="1" sectionId="62ba040573190e28887df980"/> */}
          <br /> <hr /> <br />
          <h2>Comentários</h2>
          {comments.map((comment) => (
            <div key={comment.comment_id}>
              <Comment
                username={comment.username}
                commentId={comment.comment_id}
                createdAt={comment.createdAt}
                body={comment.body}
              />
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <textarea
              style={{ width: "100%", height: "100px", marginTop: "30px" }}
              onChange={(t) => handleText(t.target.value)}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                style={{
                  // width: "130px",
                  padding: "10px",
                  background: "#282C34",
                  color: "#FA00FF",
                  // fontWeight: "bold",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleComment()}
              >
                Publicar
              </button>
              <div>ID: {sectionId}</div>
            </div>
          </div>
        </Box>
      </Box>
    </LayoutBaseDePagina>
  );
};
