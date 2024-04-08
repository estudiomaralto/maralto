'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP)
}

import condeProfile from '@/images/condeProfile.png'

import { Container } from '../Container/Container.component'
import Availability from './components/Availability.component'

interface FloatingTypes {
    avalibility: 'available' | 'unavailable'
}

export function Floating({ avalibility }: FloatingTypes) {
    return (
        <div className="fixed bottom-[1vh] left-[50%] z-10 w-full -translate-x-1/2 px-3 md:max-w-[27.75rem]">
            <Container className="flex w-full items-center gap-2 rounded-xl bg-slate-950 bg-opacity-75 px-4 py-[.8125rem] backdrop-blur-md md:gap-4">
                <img
                    src={condeProfile.src}
                    alt="Foto do Marcos Condé"
                    className="h-8 w-8 rounded-full object-cover md:h-12 md:w-12"
                />

                <div className="flex w-full flex-col gap-[.3125rem]">
                    <span className="text-[.9375rem] font-bold leading-none text-slate-50 md:text-[1.0625rem]">
                        Entre em contato
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-[.8125rem] font-medium leading-none text-slate-300 md:text-[.8125rem]">
                            Disponibilidade
                        </span>
                        <Availability avalibility={avalibility} />
                    </div>
                </div>

                <button className="flex text-nowrap rounded-full bg-pale-50 px-[.9375rem] py-[.6875rem] text-[.8125rem] leading-none transition hover:bg-pale-950 hover:text-pale-50 md:text-[.9375rem]">
                    Vamos conversar 🡥
                </button>
            </Container>
        </div>
    )
}
