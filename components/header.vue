<template>
  <header class="heading py-5 md:py-10 bg-transparent absolute top-0 left-0 w-full z-[999]">
    <div class="container">
      <div class="flex items-center">
        <div class="w-3/12">
          <NuxtLink to="/">
            <img src="/img/logo.png" alt="" class="w-[99px] h-6" />
          </NuxtLink>
        </div>
        <div class="w-9/12 text-center">
          <button class="menu_bar ml-auto block lg:hidden" @click="toggleMenu">
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
              <li v-for="item in menus" :key="item.label" class="relative px-5 py-2 group">
                <NuxtLink :to="item.link" :target="item.target"
                  class="block capitalize font-normal py-2 text-base text-white text-opacity-60 transition-all duration-300 border-b-2 border-transparent group-hover:text-primary-500 group-hover:text-opacity-100 group-hover:border-b-2 group-hover:border-orange-500">
                  {{ item.label }}<UIcon v-if="item.children && item.children.length" class="text-inherit align-middle" name="i-heroicons-chevron-down-20-solid"/>
                </NuxtLink>

                <ul v-if="item.children && item.children.length" class="sub-menu py-2 z-10 hidden group-hover:block lg:bg-[#3b3b3b] lg:absolute lg:top-14 lg:right-0 lg:rounded-md">
                  <li v-for="link in item.children" :key="link.label" class="px-6 py-2 text-nowrap text-left" style="text-wrap: nowrap;">
                    <NuxtLink :to="link.url" :target="link.target" class="text-nowrap transition-all duration-300 hover:text-primary-500">{{ link.label }}</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const menus = [
  {
    label: 'Home',
    link: '/',
    children: [],
  },
  {
    label: 'Get Started',
    link: '',
    children: [
      { label: 'Crust Network', url: 'https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/explorer', target: '_blank' },
      { label: 'Crust Wallet', url: 'https://wiki.crust.network/docs/en/crustWallet', target: '_blank' },
      { label: 'Blockchain Explorer', url: ' https://crust.subscan.io', target: '_blank' },
      { label: 'EVM Storage', url: 'https://crust.network/evm', target: '_blank' },
      { label: 'Crust Cloud', url: 'https://crustcloud.io', target: '_blank' },
      { label: 'Crust Files', url: 'https://crustfiles.io', target: '_blank' },
      { label: 'IPFS Scan', url: 'https://ipfs-scan.io/', target: '_blank' },
      { label: 'Crust Swap', url: 'https://swap.crust.network/#/swap', target: '_blank' },
    ],
  },
  {
    label: 'Build',
    link: '',
    children: [
      { label: 'Github', url: 'https://github.com/crustio', target: '_blank' },
      { label: 'Build on Crust', url: 'https://wiki.crust.network/docs/en/build101', target: '_blank' },
    ],
  },
  {
    label: 'Documents',
    link: '',
    children: [
    { label: 'Wiki', url: 'https://wiki.crust.network', target: '_blank' },
    { label: 'Tech Whitepaper', url: 'https://ipfs.io/ipfs/QmP9WqDYhreSuv5KJWzWVKZXJ4hc7y9fUdwC4u23SmqL6t', target: '_blank' },
    { label: 'Economy Whitepaper', url: 'https://crustipfs.live/ipfs/QmXUhqUgZGVJsWmV4TCDePwWtpJvEAx7rvNCjuNKaEUHzk', target: '_blank' },
    { label: 'CSM Lightpaper', url: 'https://ipfs.io/ipfs/QmYVRP7puUhGvQPuThHK2mtQgj2nUAoJYkBgXYxwiaC8Dq?filename=Crust%20Shadow%20lightpaper202105.pdf', target: '_blank' },
    { label: 'EVM Storage Lightpaper', url: 'https://ipfs.io/ipfs/QmSijA1yFvMxY2R6CxRzDNtrLA9h7v8hTxZqTvpgdSPsD3?filename=Crust%20EVM%20Storage.pdf', target: '_blank' },

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
const isMenuOpen = ref(false);

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