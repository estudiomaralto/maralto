import processImage from '@/images/process-img.svg'

export default function Detail() {
    return (
        <div className="flex items-center justify-between border-b border-b-slate-200 pb-8">
            <div className="flex flex-col gap-12">
                <div className="flex max-w-[40rem] flex-col gap-2">
                    <h3 className="text-5xl font-bold">Imersão</h3>
                    <p className="text-[1.8125rem] leading-tight tracking-[-0.0435em] text-pale-900">
                        Provocações que vão nos ajudar entender o que a marca
                        faz, como ela faz e por que ela faz.
                    </p>
                </div>

                <span className="text-[1.1875rem] text-pale-900 text-opacity-65">
                    Briefing / Estratégias / Moodboard
                </span>
            </div>
            <img src={processImage.src} alt="Imagem do processo" />
        </div>
    )
}
