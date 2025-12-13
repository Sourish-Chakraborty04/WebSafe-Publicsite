// page title part
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "WebSafe",
  description: "Created with sleepless nights",
  generator: "WebSafe",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <footer className="footer-center py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} WebSafe — All rights reserved.
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
