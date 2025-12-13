"use client"

export function UserGuide() {
  const faqs = [
    {
      q: "How do I install WebSafe?",
      a: "Click the Download button and follow Chrome’s instructions. After installation, pin the extension for quick access.",
    },
    {
      q: "Does WebSafe collect personal data?",
      a: "No sensitive personal data is collected. Only URL features required for detection may be processed per policy.",
    },
    {
      q: "How can I report a false positive?",
      a: "Use the extension’s report button or the Admin report form if you have access.",
    },
    { q: "Is the Android app available?", a: "It’s planned. Stay tuned for updates on our website." },
  ]

  return (
    <section aria-labelledby="user-guide-title" className="space-y-8">
      <div className="reveal text-center">
        <h2 id="user-guide-title" className="mb-4 text-2xl md:text-3xl font-bold">
          User Guide
        </h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/3">
            <img
              src={"/placeholder.jpg?height=200&width=300&query=Extension%20popup%20showing%20phishing%20alert"}
              alt="Extension popup showing phishing alert"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <div className="reveal">
              <h3 className="mb-2 font-semibold">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {faqs.map((f, i) => (
                  <details key={i} className="group rounded-md border bg-card p-4">
                    <summary className="cursor-pointer select-none font-medium outline-none">{f.q}</summary>
                    <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="reveal mt-6">
              <h3 className="mb-2 font-semibold">Steps</h3>
              <ol className="space-y-2">
                {[
                  "Click “Download Extension” and add to Chrome.",
                  "Pin WebSafe in your toolbar for quick access.",
                  "Browse normally; WebSafe scans URLs in real time.",
                  "If a threat is detected, follow the on-screen alert.",
                  "Report issues via the extension menu or dashboard.",
                ].map((step, i) => (
                  <li key={i} className="rounded-md border bg-card p-3">
                    <span className="mr-2 font-semibold">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}