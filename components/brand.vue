<template>
    <div class="container px-3 brand_area pb-8 md:pb-20 pt-16">
      <div class="flex -mx-3 justify-center md:mb-14 mb-7">
        <div class="w-full">
          <SectionTitle title="Your omnichain solution for decentralized storage in web3" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <Marquee class="mb-10">
            <img v-for="img in imgArray" :key="img" :src="img"/>
          </Marquee>
          <Marquee direction="reverse">
            <img v-for="img in imgArray" :key="img + 'reverse'" :src="img"/>
          </Marquee>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const imgArray = [
      '/img/brand/IPFS logo.png',
      '/img/brand/polkadot.png',
      '/img/brand/Uniswap.png',
      '/img/brand/Moonbeam.png',
      '/img/brand/Moonriver.png',
      '/img/brand/BNB_Chain.png',
      '/img/brand/Aave.png',
      '/img/brand/Ethereum.png',
      '/img/brand/polygon-logo.png',
      '/img/brand/MultiversX.png',
      '/img/brand/NEAR.png',
      '/img/brand/Chainlink logo.png',
      '/img/brand/Solana.png',
      '/img/brand/APTOS.png',
      '/img/brand/Arbitrum.png',
      '/img/brand/Shardeum Network.png',
      '/img/brand/Optimism.png',
      '/img/brand/zkSync.png',
      '/img/brand/OASIS.png',
      '/img/brand/Algorand.png',
    ];
    
  </script>
  
  <style lang="scss" scoped>
  /* Add any additional styles if needed */
  </style>
  
