'use client'

import { useCallback, useContext, useEffect } from 'react'

import { ContactContext } from '@/contexts/contactProvider'

import { Form } from './components/Form.component'

export function Contact() {
    const { visibleContact, handleSetVisibleContact } =
        useContext(ContactContext)

    const handleEscape = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleSetVisibleContact()
            }
        },
        [handleSetVisibleContact]
    )

    useEffect(() => {
        if (visibleContact) document.body.style.overflowY = 'hidden'
        window.addEventListener('keydown', handleEscape)

        return () => {
            window.removeEventListener('keydown', handleEscape)
            document.body.removeAttribute('style')
        }
    }, [handleEscape, handleSetVisibleContact, visibleContact])

    return (
        visibleContact && (
            <div className="fixed bottom-0 left-0 right-0 top-0 z-50 h-[99vh] w-full rounded-xl bg-slate-50 bg-opacity-75 backdrop-blur-md md:left-auto md:right-1 md:top-1 md:max-w-[37.75rem]">
                <div className="flex h-full w-full flex-col gap-11 overflow-y-scroll p-4 md:p-8">
                    <div>
                        <button onClick={handleSetVisibleContact}>
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="25"
                                    height="25"
                                    rx="12.5"
                                    fill="currentColor"
                                />
                                <path
                                    d="M17.5 8.50714L16.4929 7.5L12.5 11.4929L8.50714 7.5L7.5 8.50714L11.4929 12.5L7.5 16.4929L8.50714 17.5L12.5 13.5071L16.4929 17.5L17.5 16.4929L13.5071 12.5L17.5 8.50714Z"
                                    fill="#F4F3EB"
                                />
                            </svg>
                        </button>
                    </div>
                    <Form />
                </div>
            </div>
        )
    )
}
