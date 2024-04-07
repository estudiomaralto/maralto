import { Card } from '@/components/Card/Card.component'
import { Container } from '@/components/Container/Container.component'
import avessoCover from '@/images/avesso-cover.png'

export default function Overview() {
    return (
        <section className="bg-pale-100 py-20">
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
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
