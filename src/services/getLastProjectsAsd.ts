import { gql } from '@apollo/client'

import { ProjectsResponse } from '@/@types/hygraph/projects.type'
import { apolloClient } from '@/lib/apollo.client'

export async function getLastProjectsAsd({ size }: { size: number }) {
    const { data, loading, error } = await apolloClient.query({
        query: gql`
            query getProjects($size: Int!) {
                projects(last: $size) {
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

        variables: {
            size,
        },
    })

    const { projects }: ProjectsResponse = data

    return { projects, loading, error }
}
