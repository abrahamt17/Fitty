import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Fitty | Next-Gen Fitness Experience',
  description:
    'Modern fitness landing page rebuilt with Next.js, bold visuals, focused messaging, and a cleaner product foundation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
