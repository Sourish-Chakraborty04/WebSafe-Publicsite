import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const c = await cookies()
  const admin = c.get("admin")
  if (!admin || admin.value !== "1") {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }
  return NextResponse.json(
    {
      visitors: 1000,
      active_users: 500,
      malicious_detected: 10000,
      version: "1.0.0",
    },
    { headers: { "Cache-Control": "no-store" } },
  )
}
