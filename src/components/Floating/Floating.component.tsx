'use client'

import { AnimatePresence, motion } from 'framer-motion'

import condeProfile from '@/images/condeProfile.png'

import Availability from './components/Availability.component'

interface FloatingTypes {
    avalibility: 'available' | 'unavailable'
}

export function Floating({ avalibility }: FloatingTypes) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="fixed bottom-[1vh] left-[50%] z-10 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-slate-950 bg-opacity-75 px-4 py-[.8125rem] backdrop-blur-md md:gap-4">
                    <div className="h-8 w-8 overflow-hidden rounded-full md:h-16 md:w-16">
                        <img
                            src={condeProfile.src}
                            alt="Foto do Marcos Condé"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex w-full flex-col gap-[.3125rem]">
                        <span className="text-[.8125rem] font-bold leading-none text-slate-50 md:text-[1.0625rem]">
                            Entre em contato
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-[.6875rem] font-medium leading-none text-slate-300 md:text-[.8125rem]">
                                Disponibilidade
                            </span>
                            <Availability avalibility={avalibility} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
