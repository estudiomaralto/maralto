'use client'

import { differenceInDays } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { useState } from 'react'

import { Chevron } from './Chevron.icon'

interface CardProps {
    src?: string
    title: string
    caption: string
    roles: {
        role: string
        time: string
    }[]
    createdAt: Date
    href: Url
}

export function Card({
    src,
    caption,
    createdAt,
    roles,
    title,
    href,
}: CardProps) {
    const [collapse, setCollapse] = useState<boolean>(false)
    const caseTime = differenceInDays(createdAt, new Date())

    console.log(caseTime)

    function handleSetCollapse() {
        setCollapse((preState) => !preState)
    }
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="rounded-lg bg-pale-50">
                    <Link href={`${href}`}>
                        <div className="relative h-[26.25rem] overflow-hidden rounded-lg">
                            {caseTime >= 7 && (
                                <span className="leading none absolute left-4 top-4 z-10 rounded-full bg-slate-50 px-[.6875rem] py-[.4375rem] text-[.9375rem] font-medium text-slate-950">
                                    Nova obra
                                </span>
                            )}
                            <img
                                src={src}
                                alt="Image de Case"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </Link>

                    <div
                        onClick={handleSetCollapse}
                        className="group flex cursor-pointer flex-col gap-4 rounded-lg bg-pale-50 px-4 py-6"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[.9375rem] font-medium leading-none text-pale-950 md:text-[1.0625rem]">
                                    {title}
                                </h3>
                                <span className="text-[.8125rem] font-normal leading-none text-pale-600 md:text-[.9375rem]">
                                    {caption}
                                </span>
                            </div>
                            <Link
                                href={`${href}`}
                                className="flex items-center gap-2 text-pale-600"
                            >
                                <span className="text-[.8125rem] leading-none">
                                    Mais detalhes
                                </span>
                                <Chevron className="-rotate-90" />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
