import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FSAD-PS20 | Online Medical Consultations',
  description: 'Virtual medical appointments, e-prescriptions, and medical records access.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `:root{--background:#f8fafc;--foreground:#0f172a;--primary:#0f766e;--primary-foreground:#ffffff;--secondary:#10b981;--card:#ffffff;--muted:#6b7280;--border:#e6eef3}body{background:var(--background);color:var(--foreground);font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;}` }} />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}