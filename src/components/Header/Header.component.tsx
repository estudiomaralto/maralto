import Link from 'next/link'

import { Container } from '../Container/Container.component'
import { Time } from './components/Hour.component'
import { Maralto } from './components/Maralto.icon'

export function Header() {
    return (
        <header className="py-5">
            <Container>
                <div className="grid grid-cols-3 justify-between gap-4 lg:grid-cols-4">
                    <Maralto />
                    <Time />
                    <span className="text-[1.0625rem] font-normal">
                        26° Londrina, PR
                    </span>
                    <div className="hidden justify-end gap-5 text-[1.0625rem] md:flex">
                        <Link href={'/'}>Projetos</Link>
                        <Link href={'/'}>Sobre</Link>
                        <button>Contato</button>
                    </div>
                </div>
            </Container>
        </header>
    )
}
