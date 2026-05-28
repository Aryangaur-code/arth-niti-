
import './globals.css'

export const metadata = {
  title: 'Arth Niti',
  description: 'AI-powered FMCG Product Fit Platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
