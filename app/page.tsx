"use client"

import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { LeftSidebar } from "@/components/left-sidebar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { UserGuide } from "@/components/user-guide"
import { LiveDashboard } from "@/components/live-dashboard"
import { TeamMarquee } from "@/components/team-marquee"
import { TechStack } from "@/components/tech-stack"

export default function Page() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth"
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <SiteHeader />
      {/* Sidebar that appears after scroll threshold */}
      <LeftSidebar />

      {/* Shift content to the right on desktop when sidebar is visible */}
      <main
        id="home"
        className="pt-20 md:pt-24 md:pl-[var(--sidebar-offset,0px)] transition-all duration-300 ease-in-out"
      >
        <Hero />
        <section id="features" className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <Features />
          </div>
        </section>
        <section id="guide" className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto max-w-6xl px-4">
            <UserGuide />
          </div>
        </section>
        <section id="dashboard" className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <LiveDashboard />
          </div>
        </section>
        <section id="team" className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto max-w-6xl px-4">
            <TeamMarquee />
          </div>
        </section>
        {/* New technologies section */}
        <section id="tech" className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <TechStack />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto max-w-6xl px-4 py-6 flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} WebSafe. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground">
              Team
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
