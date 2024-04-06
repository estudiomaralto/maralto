'use client'

import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'

import Slide from './components/Slide.component'

export default function Feedback() {
    return (
        <section className="bg-slate-950 py-20 lg:py-[7.5rem]">
            <Swiper className="">
                <SwiperSlide>
                    <Slide />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
