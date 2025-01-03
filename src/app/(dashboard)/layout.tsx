import type { LayoutProps } from "@/interfaces/interfaces";

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-between">
       { children }
    </main>
  )
}
