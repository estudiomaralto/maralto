'use client'

import { createContext, ReactNode, useEffect, useState } from 'react'

interface TimeContextData {
    time?: string
}

export const TimeContext = createContext({} as TimeContextData)

export function TimeContextProvider({ children }: { children: ReactNode }) {
    const [time, setTime] = useState<string>()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString([], {
                    hour: 'numeric',
                    minute: 'numeric',
                })
            )
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])
    return (
        <TimeContext.Provider value={{ time }}>{children}</TimeContext.Provider>
    )
}
