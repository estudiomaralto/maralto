import { gql } from '@apollo/client'

import { ProjectResponse } from '@/@types/hygraph/project.type'
import { apolloClient } from '@/lib/apollo.client'

export async function getSingleProject({ slug }: { slug: string }) {
    const { data, loading, error } = await apolloClient.query({
        query: gql`
            query getProject($slug: String!) {
                project(where: { slug: $slug }) {
                    id
                    name
                    description
                    industry
                    slug
                    services
                    media {
                        id
                        url
                    }
                    feedback {
                        id
                        content
                        client {
                            id
                            name
                            role
                            profile {
                                id
                                url
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            slug: slug,
        },
    })

    const { project }: ProjectResponse = data

    return { project, loading, error }
}
