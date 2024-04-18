import type { Project } from '@/@types/hygraph/project.type'
import { Container } from '@/components/Container/Container.component'

export default function Project({ project }: { project: Project }) {
    return (
        <section className="bg-pale-50 py-20 pt-16 lg:pb-[7.5rem] lg:pt-[6.5rem]">
            <Container>
                <div className="flex flex-col gap-10 md:gap-16">
                    <div className="w-full">
                        <img
                            src={project?.cover?.url}
                            alt="Capa do Projeto"
                            className="w-full rounded-2xl object-cover md:h-[50.25rem]"
                        />
                    </div>
                    <div className="grid gap-8 md:grid-cols-12 md:gap-x-4">
                        <div className="md:col-span-6 md:col-start-1">
                            <div className="flex flex-col gap-6 md:gap-10">
                                <div className="flex flex-col gap-1 leading-none">
                                    <h1 className="text-[1.5625rem] font-bold md:text-4xl">
                                        {project?.name}
                                    </h1>
                                    <p className=" text-[.9375rem] text-slate-400 md:text-[1.0625rem]">
                                        {project?.industry}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {project?.description
                                        ?.split(/\. (?=[A-Z])/)
                                        .map((paragraph, index) => (
                                            <p
                                                className="text-[.9375rem] text-pale-600 md:text-[1.0625rem]"
                                                key={index}
                                            >
                                                {paragraph.trim()}
                                            </p>
                                        ))}
                                </div>
                                <hr className="border-pale-100" />
                                {/* {project.feedback && (
                                    <>
                                        {' '}
                                        <div className="flex flex-col gap-8 md:max-w-[87.5%]">
                                            <div className="flex flex-col gap-5">
                                                <h3 className="text-[1.1875rem] font-medium">
                                                    Feedback do Projeto
                                                </h3>
                                                <div className="flex flex-col gap-2">
                                                    {project?.feedback?.content
                                                        ?.split(/\. (?=[A-Z])/)
                                                        .map(
                                                            (
                                                                paragraph,
                                                                index
                                                            ) => (
                                                                <p
                                                                    className="text-[.9375rem] text-pale-600"
                                                                    key={index}
                                                                >
                                                                    {paragraph.trim()}
                                                                </p>
                                                            )
                                                        )}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={
                                                        project?.feedback
                                                            ?.client?.profile
                                                            ?.url
                                                    }
                                                    alt="Imagem de perfil do cliente"
                                                    className="h-8 w-8 rounded-full md:h-12 md:w-12"
                                                />
                                                <div className="flex flex-col gap-1 font-medium leading-none">
                                                    <span>
                                                        {
                                                            project?.feedback
                                                                ?.client?.name
                                                        }
                                                    </span>
                                                    <span className="text-[.875rem] text-pale-600">
                                                        {
                                                            project?.feedback
                                                                ?.client?.role
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )} */}

                                <>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={
                                                project?.feedback.client.profile
                                                    .url
                                            }
                                            alt="Imagem de perfil do cliente"
                                            className="h-8 w-8 rounded-full md:h-12 md:w-12"
                                        />
                                        <div className="flex flex-col gap-1 font-medium leading-none">
                                            <span>
                                                {
                                                    project?.feedback?.client
                                                        ?.name
                                                }
                                            </span>
                                            <span className="text-[.875rem] text-pale-600">
                                                {
                                                    project?.feedback?.client
                                                        ?.role
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </>

                                <hr className="border-pale-100" />
                            </div>
                        </div>
                        <div className="md:col-span-full md:col-start-9">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-[1.0625rem] font-medium text-pale-950">
                                        O que desenvolvemos
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project?.services?.map(
                                            (service, index) => (
                                                <div
                                                    className="rounded-full bg-blue-500 px-[.9375rem] py-3 leading-none text-blue-50"
                                                    key={index}
                                                >
                                                    {service}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-[.9375rem] font-medium md:text-[1.0625rem]">
                                            Ano
                                        </span>
                                        <span className="text-pale-600">
                                            {new Date(
                                                project.createdAt
                                            ).getFullYear()}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[.9375rem] font-medium md:text-[1.0625rem]">
                                            Nicho
                                        </span>
                                        <span className="text-pale-600">
                                            {project?.industry}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {project?.media?.map((image, index) => (
                            <img
                                className="rounded-2xl"
                                key={index}
                                src={image?.url}
                                alt="imagem do projeto"
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
