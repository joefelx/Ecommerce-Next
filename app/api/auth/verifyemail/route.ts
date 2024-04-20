import prisma from "@/utils/connectDb";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const verifiedUser = await prisma.user.update({
    where: {
      verificationToken: requestBody.token,
    },
    data: {
      verificationToken: null,
      verifiedAccount: true,
    },
  });

  if (verifiedUser) {
    return NextResponse.json({
      data: "Verified",
      verified: true,
    });
  } else {
    return NextResponse.json({
      data: "Unauthorized!",
    });
  }
}

prisma.$disconnect();
