import Link from 'next/link'

import { Container } from '../Container/Container.component'
import ContactButton from './components/ContactButton.component'
import { Time } from './components/Hour.component'
import { Maralto } from './components/Maralto.icon'

export async function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 z-20 bg-pale-50 py-5">
            <Container>
                <div className="flex items-center justify-between gap-4 md:flex-row">
                    <Time className="text-[.875rem] md:text-[1.0625rem]" />
                    <Link href={'/'} className="ml-[6vw] md:ml-[3vw]">
                        <Maralto />
                    </Link>
                    <div className="justify-end gap-5 leading-none md:flex md:text-[1.0625rem]">
                        <Link
                            href={'/projetos'}
                            className="transition hover:text-pale-300"
                        >
                            Projetos
                        </Link>
                        <ContactButton className="hidden md:block" />
                    </div>
                </div>
            </Container>
        </header>
    )
}
