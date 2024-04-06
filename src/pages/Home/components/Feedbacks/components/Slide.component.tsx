'use client'

import { useSwiper, useSwiperSlide } from 'swiper/react'

import { Container } from '@/components/Container/Container.component'
import projectImage from '@/images/avesso-cover.png'
import clientImage from '@/images/condeProfile.png'

export default function Slide() {
    const swiper = useSwiper()
    const swiperSlide = useSwiperSlide()
    return (
        <Container>
            <div className="grid h-full gap-4 md:grid-cols-12">
                <div className="flex flex-col gap-11 md:col-span-3">
                    <div className="relative flex flex-col items-start gap-11 overflow-hidden rounded-xl">
                        <div className="absolute left-3 top-3 rounded-full bg-slate-50 px-[.6875rem] py-2 text-[.9375rem] font-medium">
                            Veja essa obra
                        </div>
                        <img
                            src={projectImage.src}
                            className="h-[25.5rem] object-cover"
                            alt="Imagem do Projeto"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <img
                            src={clientImage.src}
                            alt="Imagem do Cliente"
                            className="h-14 w-14 rounded-full"
                        />
                        <div>
                            <h4 className="text-[1.0625rem] font-medium text-slate-50">
                                Gabriel Santos
                            </h4>
                            <span className="text-[.9375rem] font-medium text-slate-400">
                                CEO da Avesso
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex h-full max-w-[43rem] flex-col justify-between md:col-span-full md:col-start-5">
                    <p className="text-[1.8125rem] font-medium leading-tight text-slate-50">
                        Foi um prazer enorme contar com o trabalho da Maralto.
                        Souberam ler, identificar e nos entregar um design
                        primoroso. Exatamente o que estávamos buscando. Além
                        disso, se mantiveram prestativos e disponíveis enquanto
                        construímos todo o ambiente.
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
                        <span className="font-medium text-slate-50">
                            {swiper?.activeIndex + 1}/{swiper?.slides?.length}
                        </span>
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
