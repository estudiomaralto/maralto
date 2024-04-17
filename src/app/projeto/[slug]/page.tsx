import { redirect } from 'next/navigation'

import { getSingleProject } from '@/services/getSingleProject'
import Project from '@/ui/Project/Project.component'

export default async function Page({
    params: { slug },
}: {
    params: { slug: string }
}) {
    const { project, error } = await getSingleProject({ slug })
    return !error ? <Project project={project} /> : redirect('/')
}
