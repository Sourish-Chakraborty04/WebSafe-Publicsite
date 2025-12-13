"use client"

import type React from "react"

import { useEffect, useState } from "react"
import useSWR from "swr"
import Link from "next/link"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

const fetcher = (url: string) => fetch(url, { credentials: "include" }).then((r) => r)

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { data: statsRes, mutate } = useSWR("/api/admin/stats", fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
  })

  useEffect(() => {
    setAuthed(!!statsRes && statsRes.ok)
  }, [statsRes])

  async function onLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const body = new URLSearchParams(Array.from(fd) as any).toString()
    const res = await fetch("/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      credentials: "include",
    })
    setLoading(false)
    if (res.ok) {
      await mutate()
      setAuthed(true)
    } else {
      setError("Invalid credentials")
    }
  }

  async function onLogout() {
    await fetch("/admin/logout", { method: "POST", credentials: "include" })
    setAuthed(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeWidth="2" d="M12 3l7 3v6c0 4-2.5 7.5-7 9-4.5-1.5-7-5-7-9V6l7-3z" />
                <path strokeWidth="2" d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <span className="font-semibold">WebSafe Admin</span>
          </Link>
          <div className="flex items-center gap-2">
            <DarkModeToggle />
            {authed && (
              <button
                onClick={onLogout}
                className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {!authed ? (
          <div className="mx-auto max-w-md rounded-lg border bg-card p-6">
            <h1 className="text-xl font-semibold">Admin Login</h1>
            <form onSubmit={onLogin} className="mt-4 space-y-3">
              <div>
                <label htmlFor="username" className="mb-1 block text-sm">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-1 block text-sm">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              {error && (
                <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {error}
                </div>
              )}
              <button
                disabled={loading}
                className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground hover:brightness-95"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        ) : (
          <AdminDashboard />
        )}
      </main>
    </div>
  )
}

function AdminDashboard() {
  const [data, setData] = useState<{
    visitors: number
    active_users: number
    malicious_detected: number
    version: string
  } | null>(null)

  useEffect(() => {
    fetch("/api/admin/stats", { credentials: "include" })
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData(null))
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Metric title="Visitors" value={data?.visitors ?? 0} icon="people" />
        <Metric title="Active Users" value={data?.active_users ?? 0} icon="activity" />
        <Metric title="Malicious Links" value={data?.malicious_detected ?? 0} icon="bug" />
      </div>

      <div className="rounded-lg border bg-card">
        <div className="border-b p-4">
          <h2 className="font-semibold">Recent Reports (Mock)</h2>
        </div>
        <div className="overflow-x-auto p-4">
          <table className="w-full text-sm">
            <thead className="text-left text-muted-foreground">
              <tr>
                <th className="py-2">Time</th>
                <th className="py-2">URL</th>
                <th className="py-2">Status</th>
                <th className="py-2">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Just now", "http://example-phish.com/login", "Phishing", "0.97", "destructive"],
                ["1 min ago", "https://secure-paypal.co", "Suspicious", "0.62", "warning"],
                ["5 mins ago", "https://accounts.google.com", "Safe", "0.12", "success"],
              ].map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{r[0]}</td>
                  <td className="py-2">{r[1]}</td>
                  <td className="py-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
                        r[4] === "destructive"
                          ? "bg-destructive/15 text-destructive"
                          : r[4] === "warning"
                            ? "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400"
                            : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                      }`}
                    >
                      {r[2]}
                    </span>
                  </td>
                  <td className="py-2">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-sm text-muted-foreground">
            Replace with real data via backend endpoints when available.
          </p>
        </div>
      </div>
    </div>
  )
}

function Metric({ title, value, icon }: { title: string; value: number; icon: "people" | "activity" | "bug" }) {
  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">{title}</span>
        <Icon name={icon} />
      </div>
      <div className="mt-2 text-3xl font-bold">{value.toLocaleString()}</div>
    </div>
  )
}

function Icon({ name }: { name: "people" | "activity" | "bug" }) {
  switch (name) {
    case "people":
      return (
        <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" strokeWidth="2" />
        </svg>
      )
    case "activity":
      return (
        <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M22 12h-4l-3 7-4-14-3 7H2" />
        </svg>
      )
    case "bug":
      return (
        <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M8 7V3m8 4V3M4 13h16M4 9h16M4 17h16" />
          <rect x="8" y="7" width="8" height="10" rx="4" strokeWidth="2" />
        </svg>
      )
    default:
      return null
  }
}
