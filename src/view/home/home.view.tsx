import { Floating } from '@/components/Floating/Floating.component'
import Feedback from '@/pages/Home/components/Feedbacks/Feedback.component'
import Manifesto from '@/pages/Home/components/Manifesto/Manifesto.component'
import Overview from '@/pages/Home/components/Overview/Overview.component'
import Process from '@/pages/Home/components/Process/Process.component'
import Projects from '@/pages/Home/components/Projects/Projects.component'
import Home from '@/pages/Home/Home.component'

export default function Initial() {
    return (
        <>
            <Home />
            <Manifesto />
            <Overview />
            <Process />
            <Projects />
            <Feedback />
            <Floating avalibility="available" />
        </>
    )
}
