export const hostingTypes = [
  { id: "", label: "Not sure yet" },
  { id: "wordpress", label: "WordPress" },
  { id: "nextjs", label: "Next.js" },
  { id: "other", label: "Other / mixed" },
] as const;

export type HostingTypeId = (typeof hostingTypes)[number]["id"];

export function getHostingTypeLabel(id: string): string {
  return hostingTypes.find((t) => t.id === id)?.label ?? (id || "Not specified");
}
