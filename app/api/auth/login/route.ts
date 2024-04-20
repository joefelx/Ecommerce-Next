import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import bcrypt from "bcrypt";
import token from "@/utils/token";
import { cookies } from "next/headers";
import prisma from "@/utils/connectDb";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const founduser = await prisma.user.findFirst({ where: { email: email } });

  if (founduser) {
    const isPasswordSame = await bcrypt.compare(password, founduser.password);
    if (isPasswordSame) {
      const authtoken = token.generate(
        {
          id: founduser.id,
          email: founduser.email,
          name: founduser.name,
        },
        "30d"
      );

      cookies().set("ecommerceuser", authtoken);

      return NextResponse.json({
        message: "user logged in",
      });
    } else {
      return NextResponse.json({
        message: "password incorrect",
      });
    }
  } else {
    return NextResponse.json({
      message: "user not found",
    });
  }
}

prisma.$disconnect();
