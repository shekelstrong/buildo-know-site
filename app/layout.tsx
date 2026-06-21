import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Корпоративная база знаний — Buildo Know",
  description: "AI-поиск по всем документам компании. Ответ за 3 секунды",
  themeColor: "#10B981",
  openGraph: {
    title: "Buildo Know",
    description: "AI-поиск по всем документам компании. Ответ за 3 секунды",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  )
}
