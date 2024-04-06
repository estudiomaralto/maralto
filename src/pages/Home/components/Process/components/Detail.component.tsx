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
            className="flex cursor-pointer items-center justify-between border-b border-b-slate-200 pb-8"
            onClick={() => handleChangeIndex(index)}
        >
            <div className="flex flex-col gap-12">
                <div className="flex max-w-[40rem] flex-col gap-2">
                    <h3 className="text-5xl font-bold">{title}</h3>
                    {isCurrent && (
                        <p className="text-[1.8125rem] leading-tight tracking-[-0.0435em] text-pale-900">
                            {content}
                        </p>
                    )}
                </div>
                {isCurrent && (
                    <span className="text-[1.1875rem] text-pale-900 text-opacity-65">
                        {steps.map((step, index) => `${step} / `)}
                    </span>
                )}
            </div>
            {isCurrent && (
                <img src={processImage.src} alt="Imagem do processo" />
            )}
        </div>
    )
}
