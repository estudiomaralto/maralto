'use client'

import { useContext } from 'react'

import { Button } from '@/components/Button/Button.component'
import { ContactContext } from '@/contexts/contactProvider'

export default function Interact() {
    const { handleSetVisibleContact } = useContext(ContactContext)
    return (
        <Button
            content="Vamos conversar"
            onClick={handleSetVisibleContact}
            sizes="medium"
            colors="blue"
        />
    )
}
