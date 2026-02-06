import type { ReactNode } from "react"

interface EditorLayoutProps {
  children: ReactNode
}

export const EditorLayout = ({ children }: EditorLayoutProps) => {
  return (
    <section className="w-full h-full grid grid-cols-2 relative">
      {children}
    </section>
  )
}