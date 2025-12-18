"use client"

import type React from "react"
import { useEffect, useRef, forwardRef } from "react"
import useSWR from "swr"

/* -------------------- Types -------------------- */

type Stats = {
  visitors: number
  active_users: number
  malicious_detected: number
  updated_at?: number
}

/* -------------------- Fetcher -------------------- */

const fetcher = (url: string) =>
  fetch(url, {
    headers: { Accept: "application/json" },
    credentials: "include",
  }).then((r) => r.json())

/* -------------------- Animated Number Hook -------------------- */

function useAnimatedNumber(value: number) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const start = Number(el.textContent?.replace(/\D/g, "")) || 0
    const end = Number(value || 0)
    const startTime = performance.now()
    const duration = 700

    const animate = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + (end - start) * eased)

      el.textContent = current.toLocaleString()

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [value])

  return ref
}

/* -------------------- Main Component -------------------- */

export function LiveDashboard() {
  const { data } = useSWR<Stats>("/api/stats", fetcher, {
    refreshInterval: 10_000,
  })

  const visitorsRef = useAnimatedNumber(data?.visitors ?? 1000)
  const activeUsersRef = useAnimatedNumber(data?.active_users ?? 500)
  const maliciousRef = useAnimatedNumber(data?.malicious_detected ?? 10000)

  return (
    <div className="reveal">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">Live Dashboard</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card ref={visitorsRef} label="Website Visitors" icon="people" />
        <Card ref={activeUsersRef} label="Active Users" icon="activity" />
        <Card ref={maliciousRef} label="Malicious Links Detected" icon="bug" />
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        Data updates via polling every 10s. Replace with WebSocket at
        /api/stats/ws when available.
      </p>
    </div>
  )
}

/* -------------------- Card Component (forwardRef) -------------------- */

const Card = forwardRef<
  HTMLSpanElement,
  { label: string; icon: "people" | "activity" | "bug" }
>(function Card({ label, icon }, ref) {
  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">{label}</span>
        <Icon name={icon} />
      </div>

      <div className="mt-2 text-3xl font-bold">
        <span ref={ref}>0</span>+
      </div>
    </div>
  )
})

/* -------------------- Icons -------------------- */

function Icon({ name }: { name: "people" | "activity" | "bug" }) {
  switch (name) {
    case "people":
      return (
        <svg
          className="h-5 w-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path strokeWidth="2" d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" strokeWidth="2" />
        </svg>
      )

    case "activity":
      return (
        <svg
          className="h-5 w-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path strokeWidth="2" d="M22 12h-4l-3 7-4-14-3 7H2" />
        </svg>
      )

    case "bug":
      return (
        <svg
          className="h-5 w-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path strokeWidth="2" d="M8 7V3m8 4V3M4 13h16M4 9h16M4 17h16" />
          <rect
            x="8"
            y="7"
            width="8"
            height="10"
            rx="4"
            strokeWidth="2"
          />
        </svg>
      )

    default:
      return null
  }
}
