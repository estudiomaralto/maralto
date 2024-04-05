import { Card } from '@/components/Card/Card.component'
import { Container } from '@/components/Container/Container.component'
import avessoCover from '@/images/avesso-cover.png'

export function Projects() {
    return (
        <section className="bg-pale-100 py-20 lg:py-[7.5rem]">
            <Container className="flex flex-col gap-16">
                <div className="flex flex-col gap-3 md:gap-4">
                    <h2 className="text-[2rem] font-extrabold uppercase text-slate-600 md:text-[3rem] lg:text-[4rem]">
                        Design / Marca / Branding / Interface / Estratégia /
                        Manipulação 3D
                    </h2>
                    <p className="max-w-[43rem] text-[1.0625rem] leading-tight text-slate-400 md:text-[1.8125rem] md:tracking-[-0.0435em]">
                        Criamos obras visuais e estratégicas para negócios que
                        desejam ser sólidos lucrativos e memoráveis.
                    </p>
                </div>
                <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card
                        src={avessoCover.src}
                        roles={[
                            {
                                role: 'Design',
                                time: '15 dias',
                            },
                            {
                                role: 'Branding',
                                time: '15 dias',
                            },
                            {
                                role: 'Motion',
                                time: '15 dias',
                            },
                        ]}
                        title="Avesso"
                        caption="Banco Digital"
                        createdAt={new Date()}
                    />
                    <Card
                        src={avessoCover.src}
                        roles={[
                            {
                                role: 'Design',
                                time: '15 dias',
                            },
                            {
                                role: 'Branding',
                                time: '15 dias',
                            },
                            {
                                role: 'Motion',
                                time: '15 dias',
                            },
                        ]}
                        title="Avesso"
                        caption="Banco Digital"
                        createdAt={new Date()}
                    />
                    <Card
                        src={avessoCover.src}
                        roles={[
                            {
                                role: 'Design',
                                time: '15 dias',
                            },
                            {
                                role: 'Branding',
                                time: '15 dias',
                            },
                            {
                                role: 'Motion',
                                time: '15 dias',
                            },
                        ]}
                        title="Avesso"
                        caption="Banco Digital"
                        createdAt={new Date()}
                    />
                </div>
            </Container>
        </section>
    )
}
