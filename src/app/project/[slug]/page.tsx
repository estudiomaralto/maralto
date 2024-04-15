import { redirect } from 'next/navigation'

import { getSingleProject } from '@/services/getSingleProject'
import Project from '@/ui/Project/Project.component'

export default async function Page({
    params: { slug },
}: {
    params: { slug: string }
}) {
    const { project } = await getSingleProject({ slug })
    return project ? <Project project={project} /> : redirect('/')
}
