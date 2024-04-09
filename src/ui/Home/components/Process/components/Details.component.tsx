'use client'

import { useState } from 'react'

import { process } from '@/_contents/process.content'

import Detail from './Detail.component'

export default function Details() {
    const [activeAccordion, setActiveAccordion] = useState(0)

    const handleSetColapse = (index: number) => {
        setActiveAccordion(index)
    }

    return (
        <>
            {process.map(({ id, title, content, steps, src }, index) => (
                <Detail
                    key={id}
                    src={src.src}
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
