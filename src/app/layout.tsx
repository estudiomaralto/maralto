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
    icons: {
        icon: '/src/app/favicon.ico',
    },
    openGraph: {
        images: ['/src/images/heroConde.webp'],
    },
}

// export const metadata: Metadata = {
//     title: 'Resolvoo | Problemas com Voo? Seja indenizado!',
//     description:
//         'Com a Resolvoo, você que teve problemas como voo cancelado e bagagem extraviada, conseguirá sua indenização de forma simples e 100% online. Somos uma consultoria especializada em direito do consumidor para viagens aéreas. Defendemos os direitos dos passageiros, oferecendo orientação legal em casos de atrasos, cancelamentos, extravios de bagagem e outros problemas. Obtenha indenizações por danos morais, reembolso de passagens e resolução de litígios aéreos. Conte com nossa experiência para garantir que seus direitos como passageiro sejam protegidos.',
//     applicationName: 'Resolvoo',

//     keywords: [
//         'consultoria jurídica',
//         'direito do consumidor',
//         'viagens aéreas',
//         'indenização por voo atrasado',
//         'cancelamento de voo',
//         'extravio de bagagem',
//         'reembolso de passagens aéreas',
//         'direitos do passageiro',
//         'compensação por overbooking',
//         'advogado de direito do consumidor',
//         'empresa aérea',
//         'reclamação de voo',
//         'legislação aérea',
//         'danos morais',
//         'responsabilidade civil',
//         'passageiro aéreo',
//         'orientação legal',
//         'assistência jurídica',
//         'litígio aéreo',
//         'resolução de conflitos.',
//     ],

//     openGraph: {
//         description:
//             'Com a Resolvoo, você que teve problemas como voo cancelado e bagagem extraviada, conseguirá sua indenização de forma simples e 100% online. Somos uma consultoria especializada em direito do consumidor para viagens aéreas. Defendemos os direitos dos passageiros, oferecendo orientação legal em casos de atrasos, cancelamentos, extravios de bagagem e outros problemas. Obtenha indenizações por danos morais, reembolso de passagens e resolução de litígios aéreos. Conte com nossa experiência para garantir que seus direitos como passageiro sejam protegidos.',
//         images: '../../public/resolvoo-opengraph.png',
//         type: 'website',
//     },

//     verification: {
//         google: 'FHsfN8zBydcttXwvPLdL4gelTJzUAzGQr_hEGOHiWrE',
//     },
// }

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
