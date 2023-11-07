import Form from "@/components/Form";
import Header from "@/components/layout/Header";
import CommentFeed from "@/components/posts/CommentFeed";
import PostItem from "@/components/posts/PostItem";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";
import React from "react";
import { ClipLoader } from "react-spinners";

function PostView() {
  const router = useRouter();
  const { postId } = router.query;
  const { data: fetchedPost, isLoading } = usePost(postId as string);

  console.log(fetchedPost);
  // console.log(postId);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader size={80} color="white" />
      </div>
    );
  }
  return (
    <>
      <Header label="Tweet" showBackArrow />
      <PostItem data={fetchedPost} />
      <Form
        postId={postId as string}
        isComment
        placeholder="Tweet your reply"
      />
      <CommentFeed comments={fetchedPost?.comments} />
    </>
  );
}

export default PostView;
