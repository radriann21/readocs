import type { ReactNode } from "react"

interface MainLayoutProps {
	children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="max-w-full min-h-screen bg-white overflow-hidden">
      {children}
    </main>
  )
}