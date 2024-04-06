'use client'

import { useState } from 'react'

import { process } from '@/contents/process.content'

import Detail from './Detail.component'

export default function Details() {
    const [activeAccordion, setActiveAccordion] = useState(0)

    const handleSetColapse = (index: number) => {
        setActiveAccordion(index)
    }

    return (
        <>
            {process.map(({ id, title, content, steps }, index) => (
                <Detail
                    key={id}
                    index={index}
                    handleChangeIndex={handleSetColapse}
                    steps={steps}
                    title={title}
                    content={content}
                    isCurrent={activeAccordion === index}
                />
            ))}
        </>
    )
}
