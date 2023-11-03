import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import { use } from "react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const { email, userName, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("hello");
    console.log(req.body);
    console.log(email);
    console.log(userName);
    console.log(name);
    console.log(password);
    console.log(hashedPassword);
    console.log("bye");

    const user = await prisma.user.create({
      data: {
        email: email,
        username: userName,
        name: name,
        hashedPassword: hashedPassword,
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
