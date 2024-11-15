import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    // Redirect to NextAuth sign-in page with a callback URL to the requested page
    const signInUrl = new URL("/api/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", "/admin"); // Redirect back after sign-in
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

// Specify routes to apply this middleware
export const config = {
  matcher: ["/admin/:path*"],
};
