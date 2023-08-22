import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Menu from '@/component/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const Header = dynamic(() => import('../component/Header'))

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Menu/>
        {children}
        
      </body>
    </html>
  )
}
