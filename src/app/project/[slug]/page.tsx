import { Container } from '@/components/Container/Container.component'
import { getSingleProject } from '@/services/getSingleProject'

export default async function Page({
    params: { slug },
}: {
    params: { slug: string }
}) {
    const { project } = await getSingleProject({ slug })
    return <Container>{project?.name}</Container>
}
