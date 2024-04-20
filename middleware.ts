import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("ecommerceuser");

  if (
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/signup" ||
      request.nextUrl.pathname === "/verify-email/:token" ||
      request.nextUrl.pathname === "/verify-email") &&
    token
  ) {
    return NextResponse.redirect(request.nextUrl.origin);
  }
}

export const config = {
  matcher: ["/", "/login", "/signup", "/verify-email", "/verify-email/:token"],
};
