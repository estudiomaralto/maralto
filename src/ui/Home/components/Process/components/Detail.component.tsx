import processImage from '@/images/process-img.svg'

export default function Detail({
    index,
    title,
    content,
    steps,
    isCurrent,
    handleChangeIndex,
}: {
    index: number
    title: string
    content: string
    steps: string[]
    isCurrent: boolean
    handleChangeIndex: (index: number) => void
}) {
    return (
        <div
            className="flex cursor-pointer flex-col-reverse items-start justify-between gap-6 border-b border-b-slate-200 pb-5 md:flex-row md:items-center md:pb-8"
            onClick={() => handleChangeIndex(index)}
        >
            <div className="flex flex-col gap-8 md:gap-12">
                <div className="flex max-w-[40rem] flex-col gap-2">
                    <h3 className="text-[1.3125rem] font-bold sm:text-[1.8125rem] md:text-5xl">
                        {title}
                    </h3>
                    {isCurrent && (
                        <p className="text-[1.0625rem] leading-tight tracking-[-0.0435em] text-pale-900 sm:text-[1.3125rem] md:text-[1.8125rem]">
                            {content}
                        </p>
                    )}
                </div>
                {isCurrent && (
                    <span className="text-[.8125rem] text-pale-900 text-opacity-65 md:text-[1.1875rem]">
                        {steps.map((step, index) => `${step} / `)}
                    </span>
                )}
            </div>
            {isCurrent && (
                <img
                    src={processImage.src}
                    alt="Imagem do processo"
                    className="h-8 w-8 md:h-auto md:w-auto"
                />
            )}
        </div>
    )
}
