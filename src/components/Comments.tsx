import React, { useEffect, useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "./api";
// import Comment from "./Comment/Comment";
// import CommentForm from "./Comment/CommentForm";
import { Comment, CommentForm } from "gaulesui_lib";
import axios from "axios";
import { apiURL } from "../../src/constants/constants";

export interface ICommentsProps {
  currentUserId: string;
  // submitLabel?: string;
  // comment?: any;
}

const Comments = ({ currentUserId }: any) => {
  const [backendComments, setBackendComments] = useState<any>([]);
  const [activeComment, setActiveComment] = useState<any>(null);

  const rootComments = backendComments.filter(
    (backendComment: any) => backendComment.parentId === null
  );
  const getReplies = (commentId: any) => {
    console.log(commentId);
    console.log("raix", rootComments);
    return backendComments
      .filter((backendComment: any) => backendComment.parentId === commentId)
      .sort((a, b) => {
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });
  };

  const addComment = (text, parentId) => {
    console.log("addComment", text, parentId);
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      deleteCommentApi(commentId).then(() => {
        const updateBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updateBackendComments);
      });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updateBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updateBackendComments);
      setActiveComment(null);
    });
  };

  const getComments = async (id: string) => {
    axios
      .get(`${apiURL}/comments/section/${id}`)
      .then((response) => {
        console.log(response.data.comment.data);
        setBackendComments(response.data.comment.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // getCommentsApi().then((data: any) => {
    //   console.log(data);
    //   setBackendComments(data);
    // });
    getComments("62ba040573190e28887df980");
  }, []);

  return (
    <div className="gau_comments">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px'}}>
        <div style={{fontSize: '30px'}}>Comentários</div>
        <div>Sec: 62ba040573190e28887df980</div>
      </div>
      {/* <div className="gat_comment-form-title">Write comment</div> */}
      <CommentForm submitLabel="Escrever" handleSubmit={addComment} />
      <div className="gau_comments-container">
        {rootComments.map((rootComment: any) => (
          <Comment
            key={rootComment.id}
            replies={getReplies(rootComment.userId)}
            comment={rootComment}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            updateComment={updateComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;

// TODO: Remover todos os any e colocar uma tipagem correta
