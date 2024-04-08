import Link from 'next/link'

import { Container } from '../Container/Container.component'
import { Time } from './components/Hour.component'
import { Maralto } from './components/Maralto.icon'

export function Header() {
    return (
        <header className="bg-pale-50 py-5">
            <Container>
                <div className="grid grid-cols-3 items-center justify-between gap-4 lg:grid-cols-4">
                    <Link href={'/'}>
                        <Maralto />
                    </Link>
                    <Time className="text-[.875rem] md:text-[1.0625rem]" />
                    <span className="text-[.875rem] leading-none md:text-[1.0625rem]">
                        26° Londrina, PR
                    </span>
                    <div className="hidden justify-end gap-5 leading-none md:flex md:text-[1.0625rem]">
                        <Link
                            href={'/'}
                            className="transition hover:text-pale-300"
                        >
                            Projetos
                        </Link>
                        <button className="transition hover:text-pale-300">
                            Contato
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}
