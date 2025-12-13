"use client"

const MEMBERS = [
  {
    name: "Sourish Chakraborty",
    role: "Project Lead & Full Stack Developer",
    contrib: "Co Developed ML model. Assisted in developing Frontend and backend",
    gh: "https://github.com/Sourish-Chakraborty04",
    li: "#",
  },
  { 
    name: "Sohom Chakraborty", 
    role: "Frontend Engineer & UI/UX Developer", 
    contrib: "UI design and Backend integration.", 
    gh: "#", 
    li: "#"
  },
  { 
    name: "Sourav Bose", 
    role: "Backend Engineer & Security Analyst", 
    contrib: "Backend logic development and implementation.", 
    gh: "#", 
    li: "#" 
  },
  { 
    name: "Sriparno Chakraborty", 
    role: "Lead ML Engineer & Data Analyst", 
    contrib: "Developed ML model. Provided guidance in core logic development.", 
    gh: "#", 
    li: "#" 
  },
  { 
    name: "Sohan Saha", 
    role: "Frontend Engineer & Automation Tester", 
    contrib: "Ensuring a great UI with best integration. Simulating performance testing. ", 
    gh: "#", 
    li: "#" 
  },
]

export function TeamMarquee() {
  return (
    <div className="reveal">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold">Our Team</h2>
      <div className="marquee-wrapper rounded-md border py-3">
        <div className="marquee-track animate-marquee-ltr hover:[animation-play-state:paused]">
          <MarqueeSequence />
          <MarqueeSequence ariaHidden />
        </div>
      </div>
    </div>
  )
}

function MarqueeSequence({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex gap-4 pr-4" aria-hidden={ariaHidden}>
      {MEMBERS.map((m, i) => (
        <article
          key={`${m.name}-${i}-${ariaHidden ? "b" : "a"}`}
          role="group"
          aria-label={`${m.name}, ${m.role}`}
          className="w-[260px] min-w-[260px] max-w-[260px] rounded-xl border bg-card p-4 flex h-64 flex-col hover-card"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">{m.name}</div>
              <div className="text-xs text-muted-foreground">{m.role}</div>
            </div>
          </div>
          <p className="mt-3 mb-2 text-sm text-muted-foreground line-clamp-3">{m.contrib}</p>
          <div className="mt-auto flex gap-2">
            <a
              href={m.gh}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground"
            >
              <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.54 0-.27-.01-1.17-.02-2.12-3.05.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.63-1.22-1.63-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.9.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.42.11-2.96 0 0 .92-.3 3.02 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.1-1.43 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.77 1.13 1.76 1.13 2.96 0 4.22-2.56 5.15-5 5.43.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.93 0 .3.2.65.76.54A10.99 10.99 0 0023 11.5C23 5.24 18.27.5 12 .5z" />
              </svg>
              GitHub
            </a>
            <a
              href={m.li}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground"
            >
              <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.65H9.37V9h3.4v1.56h.05c.47-.88 1.61-1.8 3.31-1.8 3.54 0 4.19 2.33 4.19 5.35v6.34zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.55C0 23.22.8 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.72C24 .77 23.21 0 22.23 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}
