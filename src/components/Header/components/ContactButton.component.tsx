'use client'

import { useContext } from 'react'

import { ContactContext } from '@/contexts/contactProvider'

export default function ContactButton() {
    const { handleSetVisibleContact } = useContext(ContactContext)

    return (
        <button
            onClick={handleSetVisibleContact}
            className="transition hover:text-pale-300"
        >
            Contato
        </button>
    )
}
