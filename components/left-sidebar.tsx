"use client"
// contains code for the collapsing navigation bar at the left hand side
import { useEffect, useState } from "react"

const SCROLL_THRESHOLD = 180

export function LeftSidebar() {
  const [visible, setVisible] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("sidebar-collapsed")
    if (stored) setCollapsed(stored === "1")

    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    const onResize = () => {
      updateRootOffset({ visible: window.scrollY > SCROLL_THRESHOLD, collapsed })
    }
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty("--sidebar-width", collapsed ? "56px" : "240px")
    updateRootOffset({ visible, collapsed })
  }, [collapsed, visible])

  function updateRootOffset({ visible, collapsed }: { visible: boolean; collapsed: boolean }) {
    const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
    const width = getComputedStyle(document.documentElement).getPropertyValue("--sidebar-width")?.trim() || "240px"

    const collapsedWidth = "56px"
    let offset = "0px"
    if (isDesktop) {
      if (!visible) offset = collapsedWidth
      else offset = collapsed ? collapsedWidth : width
    }
    document.documentElement.style.setProperty("--sidebar-offset", offset)
  }

  const toggle = () => {
    const next = !collapsed
    setCollapsed(next)
    localStorage.setItem("sidebar-collapsed", next ? "1" : "0")
  }

  return (
    <aside
      aria-label="Secondary navigation"
      className={[
        "fixed left-0 top-0 z-30 h-screen border-r bg-background transition-transform duration-300 ease-out",
        visible ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}
      style={{ width: "var(--sidebar-width, 240px)" }}
    >
      <div className="flex items-center justify-between border-b px-2 py-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
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
          {!collapsed && <strong className="text-sm">WebSafe</strong>}
        </div>
        <button
          onClick={toggle}
          aria-expanded={!collapsed}
          aria-controls="sidebar-nav"
          className="inline-flex h-8 w-8 items-center justify-center rounded border hover:bg-accent hover:text-accent-foreground"
        >
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M9 6l6 6-6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M15 6l-6 6 6 6" />
            </svg>
          )}
        </button>
      </div>

      <nav id="sidebar-nav" className="flex flex-col gap-1 p-2 text-sm">
        <SideLink href="#home" icon="home" collapsed={collapsed} label="Home" />
        <SideLink href="#features" icon="sparkles" collapsed={collapsed} label="Features" />
        <SideLink href="#guide" icon="book" collapsed={collapsed} label="User Guide" />
        <SideLink href="#dashboard" icon="chart" collapsed={collapsed} label="Dashboard" />
        <SideLink href="#team" icon="users" collapsed={collapsed} label="Team" />
        <SideLink href="#tech" icon="chip" collapsed={collapsed} label="Tech" />
      </nav>
    </aside>
  )
}

function SideLink({ href, icon, label, collapsed }: { href: string; icon: string; label: string; collapsed: boolean }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded px-2 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    >
      <Icon name={icon} />
      {!collapsed && <span>{label}</span>}
    </a>
  )
}

function Icon({ name }: { name: string }) {
  switch (name) {
    case "home":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M3 12l9-9 9 9" />
          <path strokeWidth="2" d="M9 21V9h6v12" />
        </svg>
      )
    case "sparkles":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
          <path strokeWidth="2" d="M19 19l.5 1.5L21 21l-1.5.5L19 23l-.5-1.5L17 21l1.5-.5L19 19z" />
        </svg>
      )
    case "book":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path strokeWidth="2" d="M4 4v15.5A2.5 2.5 0 006.5 22H20V4z" />
        </svg>
      )
    case "chart":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M3 3v18h18" />
          <path strokeWidth="2" d="M7 13h2v5H7zM11 9h2v9h-2zM15 5h2v13h-2z" />
        </svg>
      )
    case "users":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" strokeWidth="2" />
          <path strokeWidth="2" d="M22 21v-2a4 4 0 00-3-3.87" />
          <path strokeWidth="2" d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      )
    case "chip":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="7" y="7" width="10" height="10" rx="2" strokeWidth="2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 5l-2 2M5 19l2-2M17 19l-2-2" strokeWidth="2" />
        </svg>
      )
    default:
      return null
  }
}
