import Link from 'next/link'

import { WeatherData } from '@/@types/weather.type'
import { getWeather } from '@/services/getWeather'

import { Container } from '../Container/Container.component'
import { Time } from './components/Hour.component'
import { Maralto } from './components/Maralto.icon'

export async function Header() {
    const data: WeatherData = await getWeather()

    return (
        <header className="fixed left-0 right-0 top-0 z-20 bg-pale-50 py-5">
            <Container>
                <div className="grid grid-cols-3 items-center justify-between gap-4 lg:grid-cols-4">
                    <Link href={'/'}>
                        <Maralto />
                    </Link>
                    <Time className="text-[.875rem] md:text-[1.0625rem]" />
                    <span className="text-[.875rem] font-medium leading-none md:text-[1.0625rem]">
                        {data.main.temp.toFixed(0)}° Londrina, PR
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
