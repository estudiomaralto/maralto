import { Container } from '@/components/Container/Container.component'

export function Feedback() {
    return (
        <section className="bg-slate-950 py-20 lg:py-[7.5rem]">
            <Container className="grid grid-cols-12">
                <div className="h-44 bg-slate-600"></div>
                <div className="h-44 bg-slate-600"></div>
            </Container>
        </section>
    )
}
