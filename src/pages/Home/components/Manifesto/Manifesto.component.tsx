import { Container } from '@/components/Container/Container.component'

export function Manifesto() {
    return (
        <section className="bg-pale-50 py-20 lg:py-[7.5rem]">
            <Container>
                <div className="flex flex-col gap-12 lg:gap-16">
                    <h2 className="text-[1.3125rem] font-medium uppercase text-pale-950">
                        é hora de adentrar em águas mais profundas.
                    </h2>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex w-full flex-col gap-10">
                            <div className="border-b border-pale-200 pb-4">
                                <span className="text-pale-300">01</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[2rem] font-medium leading-none text-pale-800">
                                    Posicionamento
                                </h3>
                                <p className="font-normal text-pale-300">
                                    With a solid track record in designing
                                    websites and apps, I deliver strong and
                                    user-friendly digital designs. Solid company
                                    branding is the foundation of any succesful
                                    website.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-10">
                            <div className="border-b border-pale-200 pb-4">
                                <span className="text-pale-300">02</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[2rem] font-medium leading-none text-pale-800">
                                    Visual
                                </h3>
                                <p className="text-pale-300">
                                    With a solid track record in designing
                                    websites and apps, I deliver strong and
                                    user-friendly digital designs. Solid company
                                    branding is the foundation of any succesful
                                    website.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-10">
                            <div className="border-b border-pale-200 pb-4">
                                <span className="text-pale-300">03</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[2rem] font-medium leading-none text-pale-800">
                                    Estratégia
                                </h3>
                                <p className="text-pale-300">
                                    With a solid track record in designing
                                    websites and apps, I deliver strong and
                                    user-friendly digital designs. Solid company
                                    branding is the foundation of any succesful
                                    website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
