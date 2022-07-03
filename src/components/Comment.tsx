import React from "react";

const Comment = ({ username, commentId, createdAt, body }) => {
  const newDate = new Date(createdAt);
  return (
    <div
      style={{
        background: "#282C34",
        color: "white",
        padding: "12px",
        marginTop: "12px",
        borderRadius: "12px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            <a
              style={{ textDecoration: "none", color: "#3FC7BF" }}
              href="http://github.com/"
            >
              {username}
            </a>
          </div>
        </div>

        <div style={{ fontSize: "12px" }}>
          <div style={{ fontSize: "13px" }}>
            {newDate.toLocaleDateString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          {commentId}
        </div>
      </div>
      {body}
      <br />

      <br />
      <br />
    </div>
  );
};

export default Comment;
