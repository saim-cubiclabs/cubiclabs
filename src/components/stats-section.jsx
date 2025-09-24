export function StatsSection() {
  const stats = [
    { number: "3+", label: "Companies Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "99%", label: "Client Statisfaction" },
    { number: "24/7", label: "Expert Support" },
  ]

  return (
    <section className="py-16 bg-orange-100/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-emerald-800 text-3xl font-bold mb-2 lg:text-4xl">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

