'use client'

import { ApolloLink, from, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'
import { PropsWithChildren } from 'react'

import { customToast } from '@/packages/react-toast'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  // graphQL error
  if (graphQLErrors)
    graphQLErrors.forEach(({ message }) => {
      customToast(message, 'error')
    })
  // network error
  if (networkError && !graphQLErrors) {
    customToast(networkError.message, 'error')
  }
})

// client
const makeClient = () => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  })

  // return
  return new NextSSRApolloClient({
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : from([errorLink, httpLink]),
    cache: new NextSSRInMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        notifyOnNetworkStatusChange: true,
      },
      mutate: {
        awaitRefetchQueries: true,
      },
    },
  })
}

// apollo client side
export const ApolloClient = ({ children }: PropsWithChildren) => {
  // return
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
