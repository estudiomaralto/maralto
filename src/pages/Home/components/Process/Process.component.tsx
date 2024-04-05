import { Container } from '@/components/Container/Container.component'
import { Divider } from '@/components/Divider/Divider.component'

import { Detail } from './components/Detail.component'

export function Process() {
    return (
        <section className="bg-pale-50 py-20 lg:py-[7.5rem]">
            <Container className="flex flex-col gap-16">
                <div className="flex flex-col gap-10 lg:gap-14">
                    <h2 className="text-[1.3125rem] font-medium uppercase text-pale-950">
                        Nosso processo de criação
                    </h2>
                    <Divider />
                </div>

                <Detail />
                <Detail />
            </Container>
        </section>
    )
}
