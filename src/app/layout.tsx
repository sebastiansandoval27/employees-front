import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactQueryProvider } from '@/Providers/ReactQueryProvider'
import { Footer, Header } from '@/employees'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Employees Chart',
  description: 'Web app to manage employees roles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <div className="flex flex-col items-center justify-center gap-5">
            <Header />
            {children}
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
