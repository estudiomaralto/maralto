import { gql } from '@apollo/client'

import { ProjectsResponse } from '@/@types/hygraph/projects.type'
import { apolloClient } from '@/lib/apollo.client'

export async function getProjects() {
    const { data, loading, error } = await apolloClient.query({
        query: gql`
            query getProjects {
                projects {
                    cover {
                        url
                    }
                    name
                    id
                    slug
                    services
                    industry
                    createdAt
                    media {
                        url
                    }
                }
            }
        `,
    })

    const { projects }: ProjectsResponse = data

    return { projects, loading, error }
}
