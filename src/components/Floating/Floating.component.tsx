'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP)
}

import condeProfile from '@/images/condeProfile.png'

import Availability from './components/Availability.component'

interface FloatingTypes {
    avalibility: 'available' | 'unavailable'
}

export function Floating({ avalibility }: FloatingTypes) {
    const container = useRef<HTMLDivElement | any>()

    useGSAP(
        () => {
            gsap.from(container.current!, {
                y: '100%',
                duration: 0.72,
                ease: 'circ',
                scrollTrigger: {
                    trigger: container.current!,
                    start: '70% 70%',
                    end: '20% 20%',
                    scrub: true,
                    markers: true,
                },
            })
        },
        {
            scope: container!,
        }
    )

    return (
        <div
            ref={container}
            className="fixed bottom-[1vh] left-[50%] z-10 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-slate-950 bg-opacity-75 px-4 py-[.8125rem] backdrop-blur-md md:gap-4"
        >
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
        </div>
    )
}
