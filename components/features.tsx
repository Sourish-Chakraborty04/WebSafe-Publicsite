"use client"

const FEATURES = [
  { icon: "shield", title: "Real-time URL Scanning", desc: "Analyze URLs instantly with ML-powered detection." },
  { icon: "cloud", title: "Threat Intel Integration", desc: "Integrates with external databases (e.g., VirusTotal)." },
  { icon: "type", title: "Homograph Detection", desc: "Identify deceptive characters in URLs." },
  { icon: "bell", title: "User-friendly Alerts", desc: "Clear, actionable alerts that don’t get in your way." },
  { icon: "cpu", title: "High Accuracy Model", desc: "Random Forest with robust feature engineering." },
  { icon: "qr", title: "Planned Android App", desc: "Mobile app with QR scanner in the roadmap." },
]

export function Features() {
  return (
    <>
      <h2 className="mb-6 text-2xl md:text-3xl font-bold reveal">Key Features</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <div key={i} className="reveal rounded-lg border bg-card p-5 shadow-sm hover-card ring-1 ring-transparent">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FeatureIcon name={f.icon} />
            </div>
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "shield":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M12 3l7 3v6c0 4-2.5 7.5-7 9-4.5-1.5-7-5-7-9V6l7-3z" />
          <path strokeWidth="2" d="M9 12l2 2 4-4" />
        </svg>
      )
    case "cloud":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M17.5 19a4.5 4.5 0 000-9 6 6 0 10-11 3" />
        </svg>
      )
    case "type":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M4 7V4h16v3M10 20v-6h4v6" />
        </svg>
      )
    case "bell":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M6 8a6 6 0 1112 0c0 7 3 7 3 7H3s3 0 3-7" />
          <path strokeWidth="2" d="M10 21h4" />
        </svg>
      )
    case "qr":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM16 13h2v2h-2zM20 17h-4v4" />
        </svg>
      )
    case "cpu":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="9" y="9" width="6" height="6" strokeWidth="2" />
          <path strokeWidth="2" d="M3 9h2M3 15h2M19 9h2M19 15h2M9 3v2M15 3v2M9 19v2M15 19v2M5 7h14v10H5z" />
        </svg>
      )
    default:
      return null
  }
}
