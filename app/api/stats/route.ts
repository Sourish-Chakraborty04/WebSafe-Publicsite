import { NextResponse } from "next/server"

let state = {
  visitors: 1000,
  active_users: 500,
  malicious_detected: 10000,
  updated_at: Math.floor(Date.now() / 1000),
}

export async function GET() {
  // Simulate slight growth
  state = {
    visitors: state.visitors + Math.floor(Math.random() * 3) + 1,
    active_users: Math.max(0, state.active_users + (Math.floor(Math.random() * 5) - 2)),
    malicious_detected: state.malicious_detected + Math.floor(Math.random() * 5),
    updated_at: Math.floor(Date.now() / 1000),
  }
  return NextResponse.json(state, { headers: { "Cache-Control": "no-store" } })
}
