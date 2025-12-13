"use client"
// This file contain code for the home section
const CHROME_LINK = "https://chrome.google.com/webstore/detail/placeholder"
const FIREFOX_LINK = "https://addons.mozilla.org/en-US/firefox/addon/placeholder"

function ChromeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#EA4335" />
      <path d="M21.8 8H12a4 4 0 010 8 4 4 0 01-3.46-2L5.6 8A10 10 0 0121.8 8z" fill="#FBBC05" />
      <path d="M8.54 14A4 4 0 0012 16a4 4 0 004-4c0-.7-.18-1.36-.5-1.94L12 4 8.54 14z" fill="#4285F4" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
      <circle cx="12" cy="12" r="2" fill="#4285F4" />
    </svg>
  )
}

function FirefoxIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="ffg1" x1="0" x2="1">
          <stop offset="0" stopColor="#FF7139" />
          <stop offset="1" stopColor="#FFB000" />
        </linearGradient>
        <linearGradient id="ffg2" x1="0" x2="1">
          <stop offset="0" stopColor="#9159F4" />
          <stop offset="1" stopColor="#13B0F5" />
        </linearGradient>
      </defs>
      <path
        d="M12 2c5.5 0 10 4.36 10 9.74C22 18 17.52 22 12 22S2 18 2 11.74C2 7.7 4.3 4.2 7.7 2.6 7.2 4.2 7.5 5.4 8.2 6.1 8.9 6.8 9.6 6.7 10.4 6.2c.6 1.7 2.2 2.7 3.8 2.6-.7.6-1.3 1.5-1.3 2.6 0 1.8 1.5 3.3 3.3 3.3 1.2 0 2.2-.6 2.8-1.6.2.8.2 1.6 0 2.5A7.5 7.5 0 0112 20c-4.1 0-7.4-3.1-7.4-7 0-2 .9-3.9 2.3-5.2 1-1 2.3-1.7 3.8-1.9C11 4.2 12 2 12 2z"
        fill="url(#ffg1)"
      />
      <path d="M19 7c-.3-.9-1-2-2.2-3 2.6.8 4.2 3 5.2 5-.7-.7-1.5-1.3-3-2z" fill="url(#ffg2)" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="reveal">
          <h1 className="text-3xl md:text-5xl font-bold text-balance">
            Real-time Phishing Protection for Safer Browsing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            WebSafe protects you from phishing attacks in real-time. It scans URLs, detects threats, and ensures safer browsing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={CHROME_LINK}
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-95 hover:shadow-md"
              aria-label="Get for Chrome"
            >
              <ChromeIcon className="mr-2 h-4 w-4" />
              Get for Chrome
            </a>
            <a
              href={FIREFOX_LINK}
              className="inline-flex items-center rounded-md border px-5 py-3 transition-colors transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-md"
              aria-label="Get for Firefox"
            >
              <FirefoxIcon className="mr-2 h-4 w-4" />
              Get for Firefox
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-md border px-5 py-3 transition-colors transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-md"
            >
              See Features
            </a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Available for Chrome and Firefox.
          </p>
        </div>
        <div className="reveal">
          <img
            src={`/placeholder.jpg?height=360&width=560&query=browser%20security%20illustration`}
            alt="Browser security illustration"
            className="w-full rounded-md border"
          />
        </div>
      </div>
    </section>
  )
}
