<template>
    <div class="container px-3 brand_area pb-8 md:pb-20 pt-16">
      <div class="flex -mx-3 justify-center md:mb-14 mb-7">
        <div class="w-full">
          <SectionTitle title="Your omnichain solution for decentralized storage in web3" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <Vue3Marquee  direction="normal" duration=50 class="mb-10">
            <img v-for="img in imgArray" :key="img" :src="img"/>
          </Vue3Marquee>
          <Vue3Marquee  direction="reverse" duration=50>
            <img v-for="img in imgArray" :key="img" :src="img"/>
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const imgArray = [
      '/gh-pages/img/brand/IPFS.svg',
      '/gh-pages/img/brand/polkadot.png',
      '/gh-pages/img/brand/Uniswap.png',
      '/gh-pages/img/brand/Moonbeam.png',
      '/gh-pages/img/brand/Moonriver.png',
      '/gh-pages/img/brand/BNB_Chain.png',
      '/gh-pages/img/brand/Aave.png',
      '/gh-pages/img/brand/Ethereum.png',
      '/gh-pages/img/brand/polygon-logo.png',
      '/gh-pages/img/brand/MultiversX.png',
      '/gh-pages/img/brand/NEAR.png',
      '/gh-pages/img/brand/Chainlink-logo.png',
      '/gh-pages/img/brand/Solana.png',
      '/gh-pages/img/brand/APTOS.png',
      '/gh-pages/img/brand/Arbitrum.png',
      '/gh-pages/img/brand/Shardeum-Network.png',
      '/gh-pages/img/brand/Optimism.png',
      '/gh-pages/img/brand/zkSync.png',
      '/gh-pages/img/brand/OASIS.png',
      '/gh-pages/img/brand/Algorand.png',
    ];
    
  </script>
  
  <style lang="scss" scoped>
  /* Add any additional styles if needed */
  </style>
  