# RabbitHole Credentials Subgraph

Build completed: QmNPrCjvxpLgM6taqWDtUW8EoiCkVuSHdfa9arNfzovCKW

Deployed to https://thegraph.com/studio/subgraph/rabbithole-credentials

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/rabbithole-credentials/v1


Example,
```gql
{
  rabbitHoleCredentials(where: {owner: "0x0023d9ffe7d793895c5da5833d56c737832ead2b"}) {
    id
    owner
    tokenName
    tokenId
    tokenUri
  }
}
```
