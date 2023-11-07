import usePosts from "@/hooks/usePosts";
import React from "react";
import PostItem from "./PostItem";

interface PostFeedProps {
  userId?: string;
}

function PostFeed({ userId }: PostFeedProps) {
  const { data: posts = [] } = usePosts(userId);
  // console.log("oooo");
  // console.log(userId);
  // console.log("oooo");

  return (
    <>
      {posts.map((post: Record<string, any>, index: number) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
}

export default PostFeed;
