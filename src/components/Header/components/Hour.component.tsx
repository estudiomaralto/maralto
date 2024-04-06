'use client'

import { useContext } from 'react'

import { TimeContext } from '@/contexts/timeContext'

export function Time() {
    const { time } = useContext(TimeContext)
    return <span className="text-[1.0625rem] font-medium">{time}</span>
}
