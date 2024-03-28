'use client'

import { useEffect, useState } from 'react'

export function Time() {
    const [time, setTime] = useState<null | string>()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                })
            )
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return time && <span className="text-[1.0625rem] font-medium">{time}</span>
}
