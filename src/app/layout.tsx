import './globals.css'
import TopBar from '@/component/TopBar'
import Footer from '@/component/Footer'
import Banner from '@/component/Banner'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Quicksand, Montserrat } from 'next/font/google'
// import { quicksand, montserrat } from './font'

// const inter = Inter({ subsets: ['latin'] })

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--quicksand-font',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['700', '900'],
    variable: '--montserrat-font',
})

export const metadata: Metadata = {
    title: 'Wow Dao',
    description: 'The 1st DAO for the open source AI community',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/* <body className={inter.className}>
                <TopBar />
                {children}
            </body> */}
            <body className={quicksand.className}>
                <TopBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
