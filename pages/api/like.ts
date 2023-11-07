import prisma from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).end();
  }
  try {
    const { postId } = req.body;
    const { currentUser } = await serverAuth(req, res);

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid Id");
    }
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    if (!post) {
      throw new Error("Invalid Id");
    }

    let uploadLikedIds = [...(post.likeIds || [])];

    if (req.method === "POST") {
      uploadLikedIds.push(currentUser.id);
    }
    if (req.method === "DELETE") {
      uploadLikedIds = uploadLikedIds.filter(
        (likeId) => likeId !== currentUser.id
      );
    }
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        likeIds: uploadLikedIds,
      },
    });

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
