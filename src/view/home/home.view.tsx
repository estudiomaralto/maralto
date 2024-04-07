import { Floating } from '@/components/Floating/Floating.component'
import Feedback from '@/ui/Home/components/Feedbacks/Feedback.component'
import Manifesto from '@/ui/Home/components/Manifesto/Manifesto.component'
import Overview from '@/ui/Home/components/Overview/Overview.component'
import Process from '@/ui/Home/components/Process/Process.component'
import Projects from '@/ui/Home/components/Projects/Projects.component'
import Home from '@/ui/Home/Home.component'

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
