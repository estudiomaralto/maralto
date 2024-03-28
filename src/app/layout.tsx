import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Header } from '@/components/Header/Header.component'

const circularStd = localFont({
    src: [
        {
            path: '../fonts/CircularStd-Book.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/CircularStd-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/CircularStd-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/CircularStd-Black.otf',
            weight: '800',
            style: 'normal',
        },
    ],
    preload: true,
    display: 'swap',
    variable: '--font-main',
})

export const metadata: Metadata = {
    title: 'Estúdio Maralto',
    description:
        'Criamos obras visuais e estratégicas para negócios que desejam ser sólidos, lucrativos e memoráveis.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br" className={circularStd.className}>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
