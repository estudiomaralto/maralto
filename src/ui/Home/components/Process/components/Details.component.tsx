'use client'

import { process } from '@/_contents/process.content'

import Detail from './Detail.component'

export default function Details() {
    return (
        <>
            {process.map(({ id, title, content, steps, src }) => (
                <Detail
                    key={id}
                    src={src.src}
                    steps={steps}
                    title={title}
                    content={content}
                />
            ))}
        </>
    )
}
