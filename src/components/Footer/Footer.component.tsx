import Link from 'next/link'

import condeProfile from '@/images/condeProfile.png'

import { Container } from '../Container/Container.component'

export function Footer() {
    return (
        <footer className="bg-blue-400 pb-5 pt-16">
            <Container className="flex flex-col gap-12 md:gap-24">
                <div className="flex w-full flex-col gap-12 md:gap-20">
                    <div className="flex max-w-[43rem] flex-col gap-4 md:flex-row md:items-start md:gap-8">
                        <img
                            src={condeProfile.src}
                            alt=""
                            className="h-16 w-16 rounded-full"
                        />
                        <h2 className="text-[2.75rem] leading-none tracking-tighter text-blue-50 md:text-[3.5rem] lg:text-[4.75rem]">
                            Vamos criar uma obra memorável?
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-4">
                        <ul className="flex flex-col gap-4 text-[.9375rem] font-bold uppercase text-blue-800">
                            Páginas
                            <div className="flex flex-col gap-3 leading-none">
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    <Link href={'/'}>Início</Link>
                                </li>
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    <Link href={'/Projects'}>Projetos</Link>
                                </li>
                            </div>
                        </ul>
                        <ul className="flex flex-col gap-4 text-[.9375rem] font-bold uppercase text-blue-800">
                            Projetos
                            <div className="flex flex-col gap-3 leading-none">
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    Manual Ilustrado
                                </li>
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    Planner Esponsal
                                </li>
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    Estudei
                                </li>
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    JáEditei
                                </li>
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    Avesso
                                </li>
                                <li className="cursor-pointer text-[.9375rem] font-normal normal-case text-blue-50 hover:text-blue-100">
                                    Êxito
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
                                    15:28:08 GMT+3
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                        <ul className="flex flex-col gap-1 text-[.9375rem] font-bold uppercase text-blue-800">
                            Local
                            <li className="text-[.9375rem] font-normal normal-case leading-none text-blue-50">
                                19° Little Londres, Paraná
                            </li>
                        </ul>
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
                                    <a href={''}>Linkedin</a>
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
                    <div className="flex flex-col justify-between gap-4 border-t border-blue-600 pt-5 text-[.875rem] font-bold uppercase md:flex-row">
                        <span>©2024 estúdio maralto</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
