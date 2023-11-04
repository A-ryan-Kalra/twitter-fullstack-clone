import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }
  // console.log("wowzaa");

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  // console.log(currentUser);
  if (!currentUser) {
    throw new Error("Not signed in");
  }
  // console.log("hello");
  // console.log(currentUser);
  // console.log("bye");
  return { currentUser };
};

export default serverAuth;
