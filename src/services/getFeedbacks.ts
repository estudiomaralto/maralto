import { gql } from '@apollo/client'

import { FeedbackResponse } from '@/@types/hygraph/feedbacks.type'
import { apolloClient } from '@/lib/apollo.client'

export async function getFeedbacks() {
    const { data, error, loading } = await apolloClient.query({
        query: gql`
            query getFeedbacks {
                feedbacks {
                    content
                    client {
                        id
                        name
                        role
                        profile {
                            url
                        }
                    }
                    project {
                        cover {
                            url
                        }
                        slug
                    }
                }
            }
        `,
    })

    const { feedbacks }: FeedbackResponse = data

    return {
        feedbacks,
        error,
        loading,
    }
}
