'use client'
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Feedback } from '@/@types/hygraph/feedbacks.type'

import Slide from './Slide.component'

export default function Slider({ feedbacks }: { feedbacks: Feedback[] }) {
    return (
        <Swiper autoHeight grabCursor>
            {feedbacks.map((feedback, index) => (
                <SwiperSlide key={index}>
                    <Slide feedback={feedback} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
