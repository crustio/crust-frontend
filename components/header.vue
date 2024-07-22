<template>
  <header class="heading py-5 md:py-10  absolute top-0 left-0 w-full z-[999]">
    <div class="bg-black ">
    <div class="container px-0 mt-5 ">
      <div class="flex items-center justify-between">
        <div class="w-3/12">
          <NuxtLink to="/">
            <img src="/img/logo.png" alt="" class="w-[99px] h-6" />
          </NuxtLink>
        </div>
        <div class="text-center ">
          <button class="block ml-auto menu_bar lg:hidden" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
              <rect width="37" height="37" rx="18.5" fill="#FA8C16" />
              <path d="M28.1562 16.4792H12.4791" stroke="white" stroke-width="2.23958" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M28.1562 12H8" stroke="white" stroke-width="2.23958" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M28.1562 20.9583H8" stroke="white" stroke-width="2.23958" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M28.1562 25.4375H12.4791" stroke="white" stroke-width="2.23958" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>

          <nav class="main-menu z-[999]" :class="{ 'hide': !isMenuOpen }">
            <ul class="flex flex-wrap items-center justify-start">
              <li v-for="item in state.menus" :key="item.label" class="relative py-2 ml-20 group">
                <NuxtLink :to="item.link" :target="item.target"
                  class="block py-2 text-base font-normal text-white capitalize transition-all duration-300 border-b-2 border-transparent text-opacity-60 group-hover:text-primary-500 group-hover:text-opacity-100 group-hover:border-b-2 group-hover:border-orange-500">
                  {{ item.label }}<UIcon v-if="item.children && item.children.length" class="align-middle text-inherit" name="i-heroicons-chevron-down-20-solid"/>
                </NuxtLink>


                <ul v-if="item.children && item.children.length" class="sub-menu py-2 z-10 hidden group-hover:block lg:bg-[#3b3b3b] lg:absolute lg:top-14 lg:right-0 lg:rounded-md">
                  <li v-for="link in item.children" :key="link.label" class="px-6 py-2 text-left text-nowrap" style="text-wrap: nowrap;">
                    <NuxtLink :to="link.url"   :target="link.target" class="transition-all duration-300 text-nowrap hover:text-primary-500">{{ link.label }}</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  </header>
</template>

<script setup>

import { useRouter } from 'vue-router';
const isMenuOpen = ref(false);

import { reactive,onMounted } from 'vue';

const state = reactive({
  value: '',
  menus:''
});

onMounted(() => {
  state.value =  window.location.hostname === 'localhost' ? 'crust.network' : window.location.hostname,
  state.menus = [
  {
    label: 'Home',
    link: '/',
    children: [],
  },
  {
    label: 'Get Started',
    link: '',
    children: [
      { label: 'Crust Network', url: `https://apps.${state.value}/?rpc=wss%3A%2F%2Frpc.${state.value}#/explorer`, target: '_blank' },
      { label: 'Crust Wallet', url: `https://wiki.${state.value}/docs/en/crustWallet`, target: '_blank' },
      { label: 'Crust Mainnet Explorer', url: ' https://crust.subscan.io', target: '_blank' },
      { label: 'Crust Parachain Explorer', url: 'https://crust-parachain.statescan.io/', target: '_blank' },
      { label: 'Shadow Explorer', url: 'https://shadow.statescan.io/', target: '_blank' },
      { label: 'EVM Storage', url: '/evm/', target: '_blank' },
      { label: 'Crust Cloud', url: 'https://crustcloud.io', target: '_blank' },
      { label: 'Crust Files', url: 'https://crustfiles.io', target: '_blank' },
      { label: 'IPFS Scan', url: 'https://ipfs-scan.io/', target: '_blank' },
      { label: 'Crust Swap', url: `https://swap.crust.network/#/swap`, target: '_blank' },


    ],
  },
  {
    label: 'Build',
    link: '',
    children: [
      { label: 'Github', url: 'https://github.com/crustio', target: '_blank' },
      { label: 'Build on Crust', url: `https://wiki.${state.value}/docs/en/build101`, target: '_blank' },
    ],
  },
  {
    label: 'Documents',
    link: '',
    children: [
    { label: 'Wiki', url: `https://wiki.${state.value}`, target: '_blank' },
    { label: 'Tech Whitepaper', url: 'https://ipfsgw.live/ipfs/QmP9WqDYhreSuv5KJWzWVKZXJ4hc7y9fUdwC4u23SmqL6t', target: '_blank' },
    { label: 'Economy Whitepaper', url: 'https://ipfsgw.live/ipfs/Qmdf4CrSjVPpfLEi822FxTPpUbXHoBC1xJP8myqGvKWnFc', target: '_blank' },
    { label: 'CSM Lightpaper', url: 'https://ipfsgw.live/ipfs/QmYVRP7puUhGvQPuThHK2mtQgj2nUAoJYkBgXYxwiaC8Dq?filename=Crust%20Shadow%20lightpaper202105.pdf', target: '_blank' },
    { label: 'EVM Storage Lightpaper', url: 'https://ipfsgw.live/ipfs/QmSijA1yFvMxY2R6CxRzDNtrLA9h7v8hTxZqTvpgdSPsD3?filename=Crust%20EVM%20Storage.pdf', target: '_blank' },

    ],
  },
  {
    label: 'Blog',
    link: 'https://medium.com/crustnetwork',
    target: '_blank',
    children: [],
  },
  {
    label: 'Get CRU',
    link: 'https://swap.crust.network/#/swap',
    target: '_blank',
    children: [],
  },
];


});


console.log('hosthost',state, isMenuOpen.value);



// const menus = [
//   {
//     label: 'Home',
//     link: '/',
//     children: [],
//   },
//   {
//     label: 'Get Started',
//     link: '',
//     children: [
//       { label: 'Crust Network', url: `https://apps.${state}/?rpc=wss%3A%2F%2Frpc.${state}#/explorer`, target: '_blank' },
//       { label: 'Crust Wallet', url: `https://wiki.${state.value}/docs/en/crustWallet`, target: '_blank' },
//       { label: 'Crust Mainnet Explorer', url: ' https://crust.subscan.io', target: '_blank' },
//       { label: 'Crust Parachain Explorer', url: 'https://crust-parachain.statescan.io/', target: '_blank' },
//       { label: 'Shadow Explorer', url: 'https://shadow.statescan.io/', target: '_blank' },
//       { label: 'EVM Storage', url: '/evm/', target: '_blank' },
//       { label: 'Crust Cloud', url: 'https://crustcloud.io', target: '_blank' },
//       { label: 'Crust Files', url: 'https://crustfiles.io', target: '_blank' },
//       { label: 'IPFS Scan', url: 'https://ipfs-scan.io/', target: '_blank' },
//       { label: 'Crust Swap', url: `https://swap.${state.value}/#/swap`, target: '_blank' },


//     ],
//   },
//   {
//     label: 'Build',
//     link: '',
//     children: [
//       { label: 'Github', url: 'https://github.com/crustio', target: '_blank' },
//       { label: 'Build on Crust', url: `https://wiki.${state.value}/docs/en/build101`, target: '_blank' },
//     ],
//   },
//   {
//     label: 'Documents',
//     link: '',
//     children: [
//     { label: 'Wiki', url: `https://wiki.${state.value}`, target: '_blank' },
//     { label: 'Tech Whitepaper', url: 'https://ipfsgw.live/ipfs/QmP9WqDYhreSuv5KJWzWVKZXJ4hc7y9fUdwC4u23SmqL6t', target: '_blank' },
//     { label: 'Economy Whitepaper', url: 'https://crustipfs.live/ipfs/Qmdf4CrSjVPpfLEi822FxTPpUbXHoBC1xJP8myqGvKWnFc', target: '_blank' },
//     { label: 'CSM Lightpaper', url: 'https://ipfsgw.live/ipfs/QmYVRP7puUhGvQPuThHK2mtQgj2nUAoJYkBgXYxwiaC8Dq?filename=Crust%20Shadow%20lightpaper202105.pdf', target: '_blank' },
//     { label: 'EVM Storage Lightpaper', url: 'https://ipfsgw.live/ipfs/QmSijA1yFvMxY2R6CxRzDNtrLA9h7v8hTxZqTvpgdSPsD3?filename=Crust%20EVM%20Storage.pdf', target: '_blank' },

//     ],
//   },
//   {
//     label: 'Blog',
//     link: 'https://medium.com/crustnetwork',
//     target: '_blank',
//     children: [],
//   },
//   {
//     label: 'Get CRU',
//     link: 'https://swap.${state.value}/#/swap',
//     target: '_blank',
//     children: [],
//   },
// ];




const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

useHead({
  script: [
    { src: '/js/twitter-pixel.js', defer: true },
  ]
})
</script>

<style lang="scss" scoped></style>