"use client"
import { useEffect, useState } from "react"
import { DarkModeToggle } from "./dark-mode-toggle"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 180

export function SiteHeader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal")
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("revealed")
        }
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "transition-transform duration-300 ease-out will-change-transform",
        hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-2" aria-label="WebSafe Home">
            <span
              aria-hidden
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none">
                <path d="M7 3l5-2 5 2v6c0 3.6-2.3 6.9-5 8.4-2.7-1.5-5-4.8-5-8.4V3z" fill="currentColor" />
                <path
                  d="M9.5 11.5l2 2 3.5-3.5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="16.5" cy="6.5" r="1" fill="white" />
              </svg>
            </span>
            <span className="font-semibold">WebSafe</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-foreground">
              Home
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#guide" className="text-muted-foreground hover:text-foreground">
              User Guide
            </a>
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground">
              Dashboard
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground">
              Team
            </a>
            <a href="#tech" className="text-muted-foreground hover:text-foreground">
              Tech
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

function NewLogo() {
  return (
    <span
      aria-hidden
      className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path d="M7 3l5-2 5 2v6c0 3.5-2.2 6.6-5 8-2.8-1.4-5-4.5-5-8V3z" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M9.5 11.5l2 2 3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
