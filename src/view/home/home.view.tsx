import Feedback from '@/ui/Home/components/Feedbacks/Feedback.component'
import Hero from '@/ui/Home/components/Hero.component'
import Manifesto from '@/ui/Home/components/Manifesto/Manifesto.component'
import Overview from '@/ui/Home/components/Overview/Overview.component'
import Process from '@/ui/Home/components/Process/Process.component'
import Projects from '@/ui/Home/components/Projects/Projects.component'

export default function Initial() {
    return (
        <>
            <Hero />
            <Manifesto />
            <Overview />
            <Process />
            <Projects />
            <Feedback />
        </>
    )
}
