import Link from 'next/link'

import { Card } from '@/components/Card/Card.component'
import { Container } from '@/components/Container/Container.component'
import { Spinner } from '@/components/Spinner/Spinner.component'
import { getProjects } from '@/services/getProjects'

export default async function Projects() {
    const { projects, error, loading } = await getProjects()

    return (
        <section className="bg-pale-100 py-20 lg:py-[7.5rem]">
            <Container className="flex flex-col gap-16">
                <div className="flex flex-col gap-3 md:gap-4">
                    <h2 className="text-[1.6875rem] font-extrabold uppercase text-pale-900 md:text-[2rem] md:text-[3rem] lg:text-[4rem]">
                        Design / Marca / Branding / Interface / Estratégia /
                        Manipulação 3D
                    </h2>
                    <p className="max-w-[43rem] text-[1.0625rem] leading-tight text-pale-500 md:text-[1.8125rem] md:tracking-[-0.0435em]">
                        Criamos obras visuais e estratégicas para negócios que
                        desejam ser sólidos lucrativos e memoráveis.
                    </p>
                </div>
                {!loading ? (
                    <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/project/${project.slug}`}
                            >
                                <Card
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
                            </Link>
                        ))}
                    </div>
                ) : (
                    <Spinner />
                )}
            </Container>
        </section>
    )
}
