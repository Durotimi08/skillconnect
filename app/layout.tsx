import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import ClientWrapper from '../helpers/ClientWrapper';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skillconnect',
  description: 'Master any craft with skillconnect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
            {children}
        </ClientWrapper>
      <div id="photo-picker-element"></div>
      </body>
    </html>
  )
}
