const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<80ms", label: "Avg Response" },
  { value: "24/7", label: "Expert Support" },
  { value: "EU", label: "Data Centers" },
];

export function StatsBar() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-sm">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-6 text-center md:px-8 ${
              index < stats.length - 1 ? "border-border md:border-r" : ""
            } ${index % 2 === 0 ? "border-r md:border-r" : ""} ${
              index < 2 ? "border-b md:border-b-0" : ""
            }`}
          >
            <p className="bg-gradient-to-br from-white to-muted bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
