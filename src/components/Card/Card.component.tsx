'use client'

import { differenceInDays } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'
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
}

export function Card({ src, caption, createdAt, roles, title }: CardProps) {
    const [collapse, setCollapse] = useState<boolean>(false)
    const caseTime = differenceInDays(createdAt, new Date())

    function handleSetCollapse() {
        setCollapse((preState) => !preState)
    }
    return (
        <div className="rounded-lg bg-pale-50">
            <div className="relative overflow-hidden rounded-lg">
                {caseTime < 30 && (
                    <span className="leading none absolute left-4 top-4 z-10 rounded-full bg-slate-50 px-[.6875rem] py-[.4375rem] text-[.9375rem] font-medium text-slate-950">
                        Nova obra
                    </span>
                )}
                <img
                    src={src}
                    alt="Image de Case"
                    className="h-ful cover w-full"
                />
            </div>

            <AnimatePresence>
                {collapse ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            onClick={handleSetCollapse}
                            className="group flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-pale-50 px-4 py-6 transition hover:bg-pale-200"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex w-full flex-col gap-1">
                                    <h3 className="text-[1.1875rem] font-medium leading-none text-pale-950 transition group-hover:text-pale-50">
                                        {title}
                                    </h3>
                                    <span className="text-[.9375rem] font-normal leading-none text-pale-600 transition group-hover:text-pale-100">
                                        {caption}
                                    </span>
                                </div>
                                <div className="group-hover:text-pale-1 00 flex items-center gap-2 transition group-hover:text-pale-100">
                                    <Chevron className="rotate-180" />
                                </div>
                            </div>

                            <hr className="border-pale-200 group-hover:border-pale-100" />

                            {roles.map((role, index) => (
                                <div
                                    className="flex items-center justify-between text-[.9375rem] text-pale-900"
                                    key={index}
                                >
                                    <span className="font-medium group-hover:text-pale-100">
                                        {role.role}
                                    </span>
                                    <span className="group-hover:text-pale-100">
                                        {role.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            onClick={handleSetCollapse}
                            className="group flex cursor-pointer flex-col gap-4 rounded-lg bg-pale-50 px-4 py-6 transition hover:bg-pale-200"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[1.1875rem] font-medium leading-none text-pale-950 transition group-hover:text-pale-50">
                                        {title}
                                    </h3>
                                    <span className="text-[.9375rem] font-normal leading-none text-pale-600 transition group-hover:text-pale-100">
                                        {caption}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-pale-600 transition group-hover:text-pale-100">
                                    <span className="text-[.9375rem] leading-none transition group-hover:text-pale-50">
                                        Mais detalhes
                                    </span>
                                    <Chevron />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
