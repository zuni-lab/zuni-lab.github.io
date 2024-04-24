---
sidebar_position: 2
---

# ZSwap

## The problem ZSwap solves
### 1. Concentrated Liquidity:
While most DEXs currently draw inspiration from UniswapV2, they face a significant challenge: liquidity is dispersed across the entire price spectrum, from zero to infinity. This approach is inefficient for pairs like stablecoins, where prices tend to hover close to 1. With ZSwap, we enable liquidity providers to concentrate their contributions within a narrow price range, such as 0.99 to 1.01, thereby optimizing liquidity utilization.

### 2. Decentralized Application:
Despite the decentralization of smart contracts, DEX frontends often retain a centralized nature. ZSwap has effectively confronted this concern with the integration of BOS on NEAR. Today, ZSwap stands as a fully decentralized, trustless, and efficient liquidity DEX.

## Challenges we ran into
### 1. BOS Integration:
Learning BOS has presented its own set of challenges. Due to its newness, certain features like the import of JavaScript cannot be utilized as seamlessly as before. This has led us to write more code, and the lack of support for asynchronous functions has proven to be a hurdle. However, despite these difficulties, we hold the belief that BOS will evolve and address these issues as it continues to develop.

### 2. Cross-Contract Calling:
Navigating the concept of cross-contract calls on Near, especially in comparison to Ethereum, has proven intricate. Adapting to this paradigm shift requires a change in mindset. However, we are optimistic about its potential to resolve issues such as entrancy attacks, a challenge commonly faced within the Ethereum ecosystem.