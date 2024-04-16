'use client'
import { ComponentProps, useContext, useState } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { ContactContext } from '@/contexts/contactProvider'
import condeProfile from '@/images/condeProfile.png'

import { Container } from '../Container/Container.component'
import Availability from './components/Availability.component'

interface FloatingTypes
    extends VariantProps<typeof floating>,
        ComponentProps<'div'> {
    avalibility: 'available' | 'unavailable'
}

const floating = tv({
    slots: {
        base: 'fixed bottom-[1vh] w-full z-10 px-3 md:max-w-[27.75rem]',
        button: 'flex items-center gap-1 text-nowrap rounded-full bg-pale-50 px-[.6875rem] md:px-[.9375rem] py-[.6875rem] text-[.8125rem] leading-none transition hover:bg-pale-950 hover:text-pale-50 md:text-[.9375rem]',
    },
    variants: {
        position: {
            left: {
                base: 'left-[.15vw] w-auto',
                button: 'hidden',
            },
            center: 'left-[50%] -translate-x-1/2',
        },
    },
})

export function Floating({ avalibility }: FloatingTypes) {
    const [pos, setPos] = useState<'center' | 'left'>('center')

    const { handleSetVisibleContact } = useContext(ContactContext)

    function handleSetLeft() {
        setPos('left')
    }

    function handleSetCenter() {
        setPos('center')
    }

    const { base, button } = floating()

    return (
        <div className={base({ position: pos })}>
            <Container className="relative flex w-full items-center gap-2 rounded-xl bg-slate-950 bg-opacity-75 px-3 py-[.8125rem] backdrop-blur-md md:gap-4 md:px-4">
                {pos === 'center' && (
                    <div
                        onClick={handleSetLeft}
                        className="absolute right-2 top-2 cursor-pointer"
                    >
                        <svg
                            width="7"
                            height="8"
                            viewBox="0 0 7 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.5 1L3.5 4M6.5 7L3.5 4M3.5 4L6.5 1M3.5 4L0.5 7"
                                stroke="#B0B0B0"
                            />
                        </svg>
                    </div>
                )}

                <img
                    src={condeProfile.src}
                    alt="Foto do Marcos Condé"
                    className="h-10 w-10 rounded-full object-cover md:h-12 md:w-12"
                />

                <div className="flex w-full flex-col gap-[.25rem]">
                    <span
                        onClick={handleSetCenter}
                        className="cursor-pointer text-nowrap text-[.9375rem] font-bold leading-none text-slate-50 md:text-[1.0625rem]"
                    >
                        Entre em contato
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-[.8125rem] font-medium leading-none text-slate-300 md:text-[.8125rem]">
                            Disponibilidade
                        </span>
                        <Availability avalibility={avalibility} />
                    </div>
                </div>

                <button
                    onClick={() => {
                        handleSetVisibleContact()
                    }}
                    className={button({ position: pos })}
                >
                    Vamos conversar
                    <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </Container>
        </div>
    )
}
