"use client"

export function TechStack() {
  const items = [
    {
      name: "Django",
      icon: (
        <img
          src="https://logodix.com/logo/1758779.png"
          alt="Django logo"
          className="h-10 w-10 object-contain"
        />
      ),
    },
    {
      name: "Flask",
      icon: (
        <img
          src="https://images.seeklogo.com/logo-png/27/1/flask-logo-png_seeklogo-273085.png"
          alt="Flask logo"
          className="h-10 w-10 object-contain"
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <img
          src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
          alt="Python logo"
          className="h-10 w-10 object-contain"
        />
      ),
    },
    { name: "Next.js", 
      icon: (
        <img
        src="https://images.seeklogo.com/logo-png/44/3/next-js-icon-logo-png_seeklogo-449825.png"
        alt="Next JS logo"
        className="h-10 w-10 object-contain"
        />
      ) },
    { name: "React",icon: (
        <img
        src="https://www.pngall.com/wp-content/uploads/15/React-Logo-PNG.png"
        alt="React JS logo"
        className="h-10 w-10 object-contain"
        />
      )  },
    { name: "Tailwind CSS",icon: (
        <img
        src="https://images.seeklogo.com/logo-png/35/2/tailwind-css-logo-png_seeklogo-354675.png"
        alt="Tailwind CSS logo"
        className="h-10 w-10 object-contain"
        />
      )  },
  ]
  return (
    <div className="reveal">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold">Technologies We Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center rounded-lg border bg-card p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md ring-1 ring-transparent hover:ring-primary/20"
          >
            <div className="h-10 w-10">{it.icon}</div>
            <div className="mt-2 text-xs text-muted-foreground text-center">{it.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
