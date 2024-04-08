'use client'

import { ComponentProps, useContext } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { TimeContext } from '@/contexts/timeContext'

const clock = tv({
    base: 'font-medium',
})

interface ClockProps
    extends ComponentProps<'div'>,
        VariantProps<typeof clock> {}

export function Time({ className }: ClockProps) {
    const { time } = useContext(TimeContext)
    return <span className={clock({ className })}>{time}</span>
}
