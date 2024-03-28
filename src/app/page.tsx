import { Floating } from '@/components/Floating/Floating.component'
import Manifesto from '@/pages/Home/components/Manifesto/Manifesto.component'
import Overview from '@/pages/Home/components/Overview/Overview.component'
import Home from '@/pages/Home/Home.component'

export default function Page() {
    return (
        <>
            <Home />
            <Manifesto />
            <Overview />
            <Floating avalibility="available" />
        </>
    )
}
