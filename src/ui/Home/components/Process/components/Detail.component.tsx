import { useState } from 'react'

export default function Detail({
    title,
    content,
    steps,
    src,
}: {
    src?: string
    title: string
    content: string
    steps: string[]
}) {
    const [isCurrent, setCurrent] = useState<boolean>(true)

    function handleSetCurrent() {
        setCurrent((state) => !state)
    }

    return (
        <div
            className="flex cursor-pointer flex-col-reverse items-start justify-between gap-6 border-b border-b-slate-200 pb-5 transition duration-200 ease-in hover:border-pale-300 md:flex-row md:items-center md:pb-8"
            onClick={() => handleSetCurrent()}
        >
            <div className="flex w-full justify-between">
                <div className="flex flex-col gap-8 md:gap-12">
                    <div className="flex max-w-[40rem] flex-col gap-2">
                        <h3 className="text-[1.3125rem] font-bold sm:text-[1.8125rem] md:text-5xl">
                            {title}
                        </h3>
                        {isCurrent &&
                            content?.split('\n').map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-[1.0625rem] leading-tight tracking-[-0.0435em] text-pale-900 sm:text-[1.3125rem]"
                                >
                                    {paragraph}
                                </p>
                            ))}
                    </div>
                    {isCurrent && (
                        <span className="text-[.8125rem] text-pale-900 text-opacity-65 md:text-[1.1875rem]">
                            {steps.map((step, index) => `${step} / `)}
                        </span>
                    )}
                </div>
                {!isCurrent && (
                    <span className="text-[.8125rem] font-medium uppercase transition hover:text-pale-300">
                        /Ver detalhes
                    </span>
                )}
            </div>
            {isCurrent && (
                <img
                    src={src}
                    alt="Imagem do processo"
                    className="h-20 w-20 md:h-72 md:w-72"
                />
            )}
        </div>
    )
}
