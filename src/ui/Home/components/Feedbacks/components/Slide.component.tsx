'use client'

import Link from 'next/link'
import { useSwiper } from 'swiper/react'

import { Feedback } from '@/@types/hygraph/feedbacks.type'
import { Container } from '@/components/Container/Container.component'

export default function Slide({ feedback }: { feedback: Feedback }) {
    const swiper = useSwiper()

    return (
        <Container>
            <div className="grid h-full gap-5 md:grid-cols-12 md:gap-4">
                <div className="flex flex-col gap-6 md:col-span-3 md:gap-11">
                    <Link
                        href={`/projetos/${feedback.project?.slug}`}
                        className="relative flex flex-col items-start gap-11 overflow-hidden rounded-xl"
                    >
                        <div className="absolute left-3 top-3 rounded-full bg-slate-50 px-[.6875rem] py-[.6875rem] text-[.9375rem] font-medium leading-none">
                            Veja essa obra
                        </div>
                        <img
                            src={feedback?.project?.cover?.url}
                            className="h-[24.25rem] w-full object-cover md:h-[25.5rem]"
                            alt="Imagem do Projeto"
                        />
                    </Link>

                    <div className="flex items-center gap-4">
                        <img
                            src={feedback?.client?.profile?.url}
                            alt="Imagem do Cliente"
                            className="h-10 w-10 rounded-full md:h-14 md:w-14"
                        />
                        <div>
                            <h4 className="text-[.9375rem] font-medium text-slate-50 md:text-[1.0625rem]">
                                {feedback?.client?.name}
                            </h4>
                            <span className="text-[.9375rem] font-medium leading-none text-slate-400 md:text-[.9375rem]">
                                {feedback?.client?.role}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex h-full flex-col justify-between gap-10 md:col-span-full md:col-start-5">
                    <p className="text-[1.0625rem] leading-tight tracking-tight text-slate-50 md:text-[1.8125rem] md:font-medium">
                        {feedback?.content}
                    </p>

                    <div className="flex w-full items-center justify-between">
                        <button
                            onClick={() => swiper.slidePrev()}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900"
                        >
                            <svg
                                width="9"
                                height="14"
                                viewBox="0 0 9 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 1.645L3.43725 7L9 12.355L7.28745 14L6.11959e-07 7L7.28745 -1.49716e-07L9 1.645Z"
                                    fill="#F0EEE4"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => swiper.slideNext()}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900"
                        >
                            <svg
                                width="9"
                                height="14"
                                viewBox="0 0 9 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 12.355L5.56275 7L0 1.645L1.71255 0L9 7L1.71255 14L0 12.355Z"
                                    fill="#F0EEE4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
