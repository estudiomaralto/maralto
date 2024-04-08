import { Container } from '@/components/Container/Container.component'

export default function Manifesto() {
    return (
        <section className="bg-pale-50 py-20 lg:py-[7.5rem]">
            <Container>
                <div className="flex flex-col gap-12 lg:gap-16">
                    <h2 className="text-[1.3125rem] font-medium uppercase text-pale-950">
                        é hora de adentrar em águas mais profundas.
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                        <div className="flex w-full flex-col gap-5 md:gap-10">
                            <div className="border-b border-pale-200 pb-4">
                                <span className="text-pale-300">01</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[1.4375rem] font-medium leading-none text-pale-800 md:text-[2rem] ">
                                    Posicionamento
                                </h3>
                                <p className="text-[.9375rem] font-normal text-pale-300">
                                    Através do diagnóstico estratégico buscamos
                                    entender os objetivos, dores e dificuldades
                                    que o seu negócio enfrenta atualmente e
                                    buscamos maneiras de resolver estes
                                    problemas com ajustes ou adaptações no
                                    posicionamento da empresa com o cliente.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-5 md:gap-10">
                            <div className="border-b border-pale-200 pb-4">
                                <span className="text-pale-300">02</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[1.4375rem] font-medium leading-none text-pale-800 md:text-[2rem]">
                                    Visual
                                </h3>
                                <p className="text-[.9375rem] text-pale-300">
                                    Após definir o posicionamento, vamos
                                    concretizar todas as decisões estratégicas
                                    que serão aplicadas no negócio através do
                                    design com um toque de arte. É aqui que
                                    vamos consolidar o projeto, seja identidade
                                    visual, branding, manipulação 3D ou
                                    editorial.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-5 md:gap-10">
                            <div className="border-b border-pale-200 pb-4">
                                <span className="text-pale-300">03</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[1.4375rem] font-medium leading-none text-pale-800 md:text-[2rem]">
                                    Estratégia
                                </h3>
                                <p className="text-[.9375rem] text-pale-300">
                                    Nessa etapa vamos planejar todo o escopo de
                                    como o projeto surgirá ao mundo. Após
                                    consolidarmos toda o diagnóstico e
                                    estratégia visual da empresa, chegou a hora
                                    de seus clientes vivenciarem uma nova
                                    experiência com sua marca.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
