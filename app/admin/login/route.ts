import { NextResponse } from "next/server"

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin"

export async function POST(req: Request) {
  const body = await req.text()
  const params = new URLSearchParams(body)
  const username = (params.get("username") || "").trim()
  const password = params.get("password") || ""

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const res = new NextResponse(null, { status: 204 })
    // Secure cookie in production; httpOnly to prevent client JS access
    res.cookies.set("admin", "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    })
    return res
  }
  return new NextResponse(null, { status: 401 })
}
