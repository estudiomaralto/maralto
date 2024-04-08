import { getFeedbacks } from '@/services/getFeedbacks'

import Slider from './components/Slider'

export default async function Feedback() {
    const { feedbacks } = await getFeedbacks()

    return (
        <section className="bg-slate-950 py-20 lg:py-[7.5rem]">
            <Slider feedbacks={feedbacks} />
        </section>
    )
}
