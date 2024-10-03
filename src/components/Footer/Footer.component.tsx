import Link from 'next/link'

import { WeatherData } from '@/@types/weather.type'
import condeProfile from '@/images/condeProfile.png'
import { getWeather } from '@/services/getWeather'

import { Container } from '../Container/Container.component'
import Time from './component/Time.component'

export async function Footer() {
    const data: WeatherData = await getWeather()

    return (
        <footer className="bg-blue-400 pb-[12vh] pt-16 md:pb-5">
            <Container className="flex flex-col gap-12 md:gap-24">
                <div className="flex w-full flex-col gap-12 md:gap-20">
                    <div className="flex max-w-[43rem] flex-col gap-4 md:flex-row md:items-start md:gap-8">
                        <img
                            src={condeProfile.src}
                            alt=""
                            className="h-20 w-20 rounded-full md:h-16 md:w-16"
                        />
                        <h2 className="text-[2.75rem] leading-none tracking-tighter text-blue-50 md:text-[3.5rem] lg:text-[4.75rem]">
                            Vamos criar uma obra memorável?
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-4">
                        <ul className="flex flex-col gap-4 text-[.9375rem] font-bold uppercase text-blue-800">
                            Páginas
                            <div className="flex flex-col gap-3 leading-none">
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    <Link href={'/'}>Início</Link>
                                </li>
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    <Link href={'/projects'}>Projetos</Link>
                                </li>
                            </div>
                        </ul>
                        <ul className="flex flex-col gap-4 text-[.9375rem] font-bold uppercase text-blue-800">
                            Contato
                            <div className="flex flex-col gap-3 leading-none">
                                <a
                                    href="mailto:contato@estudiomaralto.com"
                                    className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100"
                                >
                                    contato@estudiomaralto.com
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/estudiomaralto/"
                                    className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100"
                                >
                                    Instagram
                                </a>
                            </div>
                        </ul>
                        <ul className="flex flex-col gap-4 text-[.9375rem] font-bold uppercase text-blue-800">
                            Horário
                            <div className="flex flex-col gap-3 leading-none">
                                <li className="text-[.9375rem] font-normal normal-case text-blue-50">
                                    <Time />
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                        <ul className="flex flex-col gap-1 text-[.9375rem] font-bold uppercase text-blue-800">
                            Social
                            <div className="flex gap-8 leading-none lg:gap-16">
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    <a
                                        href={
                                            'https://www.instagram.com/estudiomaralto/'
                                        }
                                    >
                                        Instagram
                                    </a>
                                </li>

                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    <a
                                        href={
                                            'https://www.behance.net/estudiomaralto'
                                        }
                                    >
                                        Behance
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="flex flex-row justify-between gap-4 border-t border-blue-500 pt-5 text-[11px] font-bold uppercase md:text-[.875rem]">
                        <span>©2024 estúdio maralto</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
