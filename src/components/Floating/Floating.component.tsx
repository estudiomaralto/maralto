'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

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
                <div className="fixed bottom-[1vh] left-[50%] z-50 flex -translate-x-1/2 items-center gap-4 rounded-xl bg-slate-950 bg-opacity-75 px-4 py-[.8125rem] backdrop-blur-md">
                    <div className="h-16 w-16 overflow-hidden rounded-full">
                        <Image
                            src={condeProfile}
                            quality={100}
                            alt="Foto do Marcos Condé"
                        />
                    </div>

                    <div className="flex flex-col gap-[.3125rem]">
                        <span className="text-[1.0625rem] font-bold leading-none text-slate-50">
                            Entre em contato
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-[.8125rem] font-medium leading-none text-slate-300">
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
