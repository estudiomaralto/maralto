import { Container } from '@/components/Container/Container.component'
import { getFeedbacks } from '@/services/getFeedbacks'

import Slider from './components/Slider'

export default async function Feedback() {
    const { feedbacks } = await getFeedbacks()

    return (
        <section className="bg-slate-950 py-20 lg:py-[7.5rem]">
            <div className="mb-12 lg:mb-16">
                <Container>
                    <h2 className="text-[1.3125rem] font-medium uppercase text-slate-50">
                        O que falam de nós
                    </h2>
                </Container>
            </div>
            <Slider feedbacks={feedbacks} />
        </section>
    )
}
