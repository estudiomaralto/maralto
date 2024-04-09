'use client'

import { createContext, ReactNode, useState } from 'react'

interface ContactContextData {
    visibleContact: boolean
    handleSetVisibleContact(): void
}

export const ContactContext = createContext({} as ContactContextData)

export function ContactContextProvider({ children }: { children: ReactNode }) {
    const [visibleContact, setVisibleContact] = useState<boolean>(false)

    function handleSetVisibleContact() {
        setVisibleContact((state) => !state)
    }

    return (
        <ContactContext.Provider
            value={{ visibleContact, handleSetVisibleContact }}
        >
            {children}
        </ContactContext.Provider>
    )
}
