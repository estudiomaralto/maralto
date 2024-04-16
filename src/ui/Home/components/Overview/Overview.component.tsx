import { Card } from '@/components/Card/Card.component'
import { Container } from '@/components/Container/Container.component'
import { getLastProjects } from '@/services/getLastProjects'

export default async function Overview() {
    const { projects, error, loading } = await getLastProjects({ size: 3 })
    return (
        <section className="bg-pale-100 py-20">
            <Container>
                <div className="flex flex-col gap-12 lg:gap-16">
                    <h2 className="text-[1.3125rem] font-medium uppercase text-pale-950">
                        Projetos recentes
                    </h2>

                    <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <Card
                                href={`/project/${project.slug}`}
                                key={project.id}
                                src={project.media[0].url}
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
                                createdAt={new Date(project.createdAt)}
                                title={project.name}
                                caption={project.industry}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
