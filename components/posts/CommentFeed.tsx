import React from "react";
import CommentItem from "./CommentItem";

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

function CommentFeed({ comments = [] }: CommentFeedProps) {
  return (
    <>
      {comments.map((comment, index: number) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
}

export default CommentFeed;
