import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dagan Website',
  description: 'Dagan Website Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 