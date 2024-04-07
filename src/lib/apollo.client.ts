import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
    uri: 'https://sa-east-1.cdn.hygraph.com/content/cluc1bwsp066w07wegpv4dzjg/master',
    cache: new InMemoryCache(),
})
