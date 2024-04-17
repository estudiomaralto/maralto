import { Card } from '@/components/Card/Card.component'
import { Container } from '@/components/Container/Container.component'
import { Spinner } from '@/components/Spinner/Spinner.component'
import { getLastProjectsAsd } from '@/services/getLastProjectsAsd'

export default async function Page() {
    const { projects, error, loading } = await getLastProjectsAsd({ size: 12 })
    return (
        <section className="bg-pale-100 py-20 lg:py-[7.5rem]">
            <Container className="flex flex-col gap-16">
                {!loading ? (
                    <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {projects?.map((project) => (
                            <Card
                                href={`/projeto/${project.slug}`}
                                key={project.id}
                                src={project.media[0]?.url}
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
                ) : (
                    <Spinner />
                )}
            </Container>
        </section>
    )
}
