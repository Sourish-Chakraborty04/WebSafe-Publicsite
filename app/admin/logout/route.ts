import { NextResponse } from "next/server"

export async function POST() {
  const res = new NextResponse(null, { status: 204 })
  res.cookies.set("admin", "", { httpOnly: true, sameSite: "lax", secure: true, path: "/", maxAge: 0 })
  return res
}
