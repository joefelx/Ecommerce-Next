import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import bcrypt from "bcrypt";
import sendMail from "@/utils/mailer";
import prisma from "@/utils/connectDb";

// connectDb();

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const founduser = await prisma.user.findFirst({ where: { email: email } });
  if (founduser) {
    return NextResponse.redirect("/login");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });

  sendMail("VERIFY", user.email);

  return NextResponse.json("User Signed");
}

prisma.$disconnect();
