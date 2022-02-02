import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { chainConfig } from '../chainConfig'

export const getClient = (network) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: chainConfig[network]?.conveyorSubgraph,
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  })

  const mevClient = new ApolloClient({
    link: new HttpLink({
      uri: chainConfig[network]?.mevSubgraph,
    }),
    cache: new InMemoryCache(),
  })

  const healthClient = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.thegraph.com/index-node/graphql',
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  })

  const stakingClient = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  })

  const blockClient = new ApolloClient({
    link: new HttpLink({
      uri: chainConfig[network]?.blocksSubgraph,
    }),
    cache: new InMemoryCache(),
  })

  return { client, mevClient, healthClient, stakingClient, blockClient }
}
