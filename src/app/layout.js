import { Inter } from 'next/font/google'
import './globals.css'
import '../../public/style.css'
import '../../public/css/style.css'
import '../../public/css/navigation-menu.css'
import '../../public/css/plugins.css'
import '../../public/css/shortcodes.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/Navbar'
import BootstapCom from '@/components/BootstapCom'
import Head from 'next/head'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          
        </Head>
        <Navbar/>
        {children}
        {/* <Footer/> */}
        <ToastContainer />
        <BootstapCom/>
        </body>
    </html>
  )
}