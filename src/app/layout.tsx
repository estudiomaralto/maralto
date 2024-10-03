import './globals.css'

import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import { Contact } from '@/components/Contact/Contact.component'
import { Floating } from '@/components/Floating/Floating.component'
import { Footer } from '@/components/Footer/Footer.component'
import { Header } from '@/components/Header/Header.component'
import { Providers } from '@/providers/Providers.context'

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

export const viewport: Viewport = {
    themeColor: '#49B8C4',
}

export const metadata: Metadata = {
    title: 'Estúdio Maralto',
    description:
        'Criamos obras visuais e estratégicas para negócios que desejam ser sólidos, lucrativos e memoráveis.',
    applicationName: 'Estúdio Maralto',
    metadataBase: new URL('https://estudiomaralto.com'),

    verification: {
        google: '',
    },

    icons: {
        icon: '/src/app/favicon.ico',
    },
    openGraph: {
        type: 'website',
        emails: 'contato@estudiomaralto.com',
        countryName: 'Brasil',
        url: 'https://estudiomaralto.com',
        description:
            'Criamos obras visuais e estratégicas para negócios que desejam ser sólidos, lucrativos e memoráveis.',
        images: [
            {
                url: 'https://estudiomaralto.com/_next/static/media/heroConde.dce3fd81.webp',
                width: 800,
                height: 600,
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <Providers>
            <html lang="pt-br" className={circularStd.className}>
                <body className="bg-pale-50">
                    <Header />
                    {children}
                    <Footer />
                    <Floating avalibility="available" />
                    <Contact />
                </body>
            </html>
        </Providers>
    )
}
