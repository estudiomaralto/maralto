import Marquee from 'react-fast-marquee'

import { Container } from '@/components/Container/Container.component'
import condeHero from '@/images/heroConde.png'

export default function Home() {
    return (
        <section
            style={{
                backgroundImage: `url(${condeHero.src})`,
            }}
            className={`flex min-h-[calc(100vh-4.125rem)] flex-col justify-between overflow-hidden bg-pale-400 bg-top bg-no-repeat pb-[2.5rem] pt-[7.5rem]`}
        >
            <Container>
                <div className="flex h-[33.75rem] flex-col justify-between gap-5">
                    <div className="flex w-full justify-between">
                        <div className="w-full max-w-[26.25rem]">
                            <h1 className="text-[2.75rem] font-medium leading-none text-pale-50">
                                Criamos obras visuais e estratégicas para
                                negócios que desejam ser sólidos, lucrativos e
                                memoráveis.
                            </h1>
                        </div>

                        <div className="w-full max-w-[19.75rem]">
                            <p className="text-[1.0625rem] leading-[135%] text-pale-50">
                                Mussum Ipsum, cacilds vidis litro
                                abertis. Sapien in monti palavris qui num
                                significa nadis i pareci latim. Mé faiz
                                elementum girarzis, nisi eros vermeio.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full justify-between border-t-[.0625rem] border-pale-50 border-opacity-80 pt-4 text-[1.0625rem] text-pale-50">
                        <span>Estúdio Maralto®</span>
                        <span>©{new Date().getFullYear()}</span>
                    </div>
                </div>
            </Container>
            <Marquee autoFill={true}>
                <span className="text-[11rem] font-medium leading-none tracking-tighter text-pale-50">
                    Criamos obras visuais e estratégicas para negócios que
                    desejam ser sólidos, lucrativos e memoráveis.
                </span>
            </Marquee>
        </section>
    )
}
