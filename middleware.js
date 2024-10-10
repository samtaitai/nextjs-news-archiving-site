import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("I am middleware!");
  return NextResponse.next();
}

export const config = {
  // filter request that could trigger middleware
  matcher: "/api",
};
