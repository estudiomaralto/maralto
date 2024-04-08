'use client'

import { useContext } from 'react'

import { TimeContext } from '@/contexts/timeContext'

export default function Time() {
    const { time } = useContext(TimeContext)
    return <>{time}</>
}
