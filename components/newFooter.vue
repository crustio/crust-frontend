<template>
    <footer class="md:pt-32 py-8 md:py-[60px] px-4 pt-16 bg-black">
        <div class="container px-3">
            <div class="flex flex-wrap -mx-3 get__in__touch">
                <div class="px-3 md:w-5/12">
                    <NuxtLink to="/">
                        <img src="/img/logo.png" alt="" class="w-[138px] mb-6" />
                    </NuxtLink>
                    <p class="text-[14px] md:text-[18px] leading-[170%]  text-white text-opacity-60 pb-8 md:pb-6 pt-3">{{ footerDesc }}</p>
                    <ul class="flex flex-wrap items-center w-full social__icons ">
                        <li v-for="(item,index) in social" :key="index">
                            <NuxtLink :to=item.url target="_blank"><span v-html="item.svg"></span></NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="px-3 md:w-7/12">
                    <div class="flex flex-wrap">                        
                        <div class="w-6/12 mt-3 mb-2 lg:w-4/12" v-for="item in state.footerMenu" :key="item.title">
                            <h5 class="mb-5 text-xl font-semibold text-white">{{ item.title }}</h5>
                            <ul>
                                <li v-for="(submenu, index) in item.link" :key="index">
                                    <NuxtLink :to="submenu.url" :target="submenu.target" class="block mb-4 text-base font-normal text-white transition-all duration-500 text-opacity-70 hover:text-primary-500">{{submenu.label}}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>    
</template>

<script setup>
import { reactive,onMounted } from 'vue';

const state = reactive({
  value: '',
  footerMenu:''
});

onMounted(() => {
    state.footerMenu = reactive([
        {
            title: 'Website',
            link: [
                { label: 'Home', url: '/' },
                { label: 'Wiki', url: `https://wiki.${document.location.hostname === 'localhost'? 'crust.network' :  document.location.hostname.replace(/^www\./, '')}/`, target: '_blank' },
                { label: 'Blog', url: ' https://medium.com/crustnetwork', target: '_blank' },
                { label: 'Media kit', url: 'https://drive.google.com/drive/folders/1oNTJXmRKQP3Ywj3up2DNLxCshCOBqb43?usp=drive_link', target: '_blank' },
            ],
        },
        {
            title: 'Media',
            link: [
                { label: 'Twitter', url: 'https://twitter.com/CrustNetwork', target: '_blank' },
                { label: 'Discord', url: 'https://discord.gg/zJtChDk4yW', target: '_blank' },
                { label: 'Telegram', url: 'https://t.me/CrustNetwork', target: '_blank' },
                { label: 'Medium', url: 'https://medium.com/crustnetwork', target: '_blank' },
                { label: 'Governance', url: 'https://crust.subsquare.io/', target: '_blank' },
            ],
        },
        {
            title: 'Link',
            link: [
                { label: 'Github', url: 'https://github.com/crustio', target: '_blank' },
                { label: 'Tech Whitepaper', url: 'https://ipfsgw.live/ipfs/QmP9WqDYhreSuv5KJWzWVKZXJ4hc7y9fUdwC4u23SmqL6t', target: '_blank' },
                { label: 'Economy Whitepaper', url: 'https://ipfsgw.live/ipfs/Qmdf4CrSjVPpfLEi822FxTPpUbXHoBC1xJP8myqGvKWnFc', target: '_blank' },
                { label: 'Token Metrics', url: 'https://medium.com/crustnetwork/crust-token-metrics-economics-84592efc6d1f', target: '_blank' },
            ],
        },
    ]);
})

    const social = reactive([
        {
            title: 'tw',
            svg: `<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.714077 6.31496C1.18538 6.37293 1.53479 6.41431 2.05892 6.47644C0.852218 4.82417 0.112751 3.18431 1.26663 1.11793C1.75013 1.5693 2.12392 1.90473 2.48552 2.25258C4.22039 3.91314 6.28441 4.86971 8.63279 5.25484C9.37633 5.37494 9.7298 5.25484 9.7176 4.39762C9.69324 2.66254 10.518 1.36639 12.0376 0.65413C13.5287 -0.0415641 15.0157 0.111654 16.4174 1.09308C16.7466 1.32498 17.2991 1.36225 17.7217 1.29599C18.2417 1.21317 18.7293 0.931582 19.5459 0.612722C19.0462 1.44093 18.713 1.99169 18.3148 2.65012C18.7983 2.57558 19.2006 2.50932 19.81 2.41408C19.5947 2.75778 19.5053 3.0518 19.3143 3.18431C18.1889 3.97527 18.0589 5.16788 17.8964 6.40604C16.71 15.2638 7.86897 19.2185 0.779084 15.5536C0.628756 15.4749 0.498736 15.3548 0.165573 15.1147C2.21331 14.9987 3.98068 14.684 5.59775 13.4375C4.14323 12.8205 2.72117 12.2863 2.29456 10.5223C2.6968 10.4187 3.02997 10.3317 3.47284 10.22C1.83952 9.40416 0.746584 8.29435 0.718141 6.3108L0.714077 6.31496Z" fill="white"/>
                </svg>
                `,
            url: 'https://twitter.com/CrustNetwork'
        },
        {
            title: 'ds',
            svg: `<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.87491 12.0316C4.8237 12.6067 5.77252 13.1819 6.73595 13.768C6.56013 14.4421 6.13151 14.7241 5.48675 14.6252C3.78331 14.3688 2.21541 13.7753 0.940567 12.5884C0.680471 12.3467 0.427703 11.9254 0.438693 11.5957C0.555919 8.49647 1.26661 5.53286 2.69165 2.75971C3.24481 1.68269 6.09854 0.294289 7.31478 0.473793C7.39171 0.484783 7.45396 0.591019 7.59317 0.719235C6.51249 1.23577 5.4721 1.72665 4.43539 2.2212C4.46471 2.31645 4.49035 2.41536 4.51964 2.51061C8.31121 0.85478 12.0954 0.818146 15.9712 2.29813C15.495 2.01606 15.0334 1.70833 14.5388 1.46289C14.0186 1.20646 13.4692 1.0123 12.9307 0.78884C13.0113 0.627653 13.0296 0.528742 13.0662 0.521416C14.44 0.305279 17.1911 1.64606 17.8212 2.84397C19.2426 5.55119 19.825 8.48183 20.0778 11.4858C20.1035 11.7935 19.913 12.2038 19.6822 12.4309C18.3671 13.7424 16.7149 14.3761 14.9015 14.6252C14.2934 14.7095 13.8941 14.4164 13.7842 13.757C14.7293 13.1672 15.6672 12.5848 16.605 11.9986C12.3372 13.8926 8.15001 13.8523 3.87856 12.0279L3.87491 12.0316ZM14.6158 8.45254C14.6231 7.39383 14.059 6.73075 13.1431 6.73075C12.2602 6.73075 11.6119 7.45976 11.6228 8.44519C11.6338 9.39033 12.2456 10.0864 13.0882 10.1083C14.0443 10.134 14.6048 9.52954 14.6121 8.45619L14.6158 8.45254ZM5.83845 8.43787C5.84577 9.48558 6.42825 10.1267 7.35507 10.1083C8.19764 10.09 8.80941 9.40133 8.82773 8.45986C8.84605 7.4744 8.20497 6.73443 7.33307 6.73075C6.43557 6.72711 5.83113 7.4158 5.83845 8.43787Z" fill="white"/>
    </svg>
    `,
            url: 'https://discord.com/invite/Jbw2PAUSCR'
        },
        {
            title: 'te',
            svg: `<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.16758 15.8393C8.16758 15.0355 8.22096 14.3284 8.15759 13.6313C7.98748 11.7002 9.08479 10.5262 10.4523 9.3922C12.5068 7.68453 14.4679 5.86012 16.4657 4.07909C16.5691 3.98571 16.6425 3.85565 16.6325 3.57547C16.339 3.71554 16.0255 3.82561 15.752 3.99572C12.7102 5.88347 9.66511 7.76458 6.64003 9.68236C6.1064 10.0192 5.63611 10.1059 5.03575 9.89914C3.95515 9.52561 2.83782 9.25545 1.76387 8.86189C1.38698 8.72513 1.09014 8.35826 0.75995 8.09811C1.08013 7.81462 1.35029 7.41104 1.72384 7.26762C6.4399 5.43655 11.166 3.64219 15.8921 1.8378C16.7926 1.49427 17.6898 1.14073 18.5936 0.8072C19.9077 0.32025 20.5314 0.827212 20.2513 2.20801C19.6843 4.99965 19.0739 7.78126 18.4769 10.5629C18.12 12.2338 17.7765 13.9081 17.3996 15.5725C17.0894 16.9566 16.4491 17.2034 15.2851 16.3929C14.1511 15.6025 13.0071 14.8153 11.9331 13.9448C11.3094 13.4379 10.9225 13.5413 10.4289 14.0816C9.92526 14.6352 9.34494 15.1222 8.78129 15.6158C8.66453 15.7192 8.46444 15.7325 8.17093 15.8359L8.16758 15.8393Z" fill="white"/>
    </svg>
    `,
            url: 'https://t.me/CrustNetwork'
        },
        {
            title: 'gl',
            svg: `<svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8389 7.93784C13.8389 11.7985 10.7767 14.9333 6.98313 14.9333C3.18959 14.9333 0.127335 11.7985 0.127335 7.93784C0.127335 4.07721 3.18959 0.942383 6.98313 0.942383C10.7767 0.942383 13.8389 4.07721 13.8389 7.93784ZM21.3498 7.93784C21.3498 11.5668 19.8111 14.5163 17.9219 14.5163C16.0328 14.5163 14.494 11.5668 14.494 7.93784C14.494 4.30885 16.0328 1.35933 17.9219 1.35933C19.8111 1.35933 21.3498 4.29341 21.3498 7.93784ZM24.4273 7.93784C24.4273 11.1962 23.8941 13.8369 23.2238 13.8369C22.5534 13.8369 22.0202 11.1962 22.0202 7.93784C22.0202 4.67947 22.5534 2.0388 23.2238 2.0388C23.8941 2.0388 24.4273 4.67947 24.4273 7.93784Z" fill="white"/>
    </svg>
    `,
            url: 'https://medium.com/crustnetwork'
        },
    ]);
    const footerDesc = "With Crust data and storage resources can be made ownable like any other on-chain asset. Gain full control over your data";




</script>
<style lang="scss" scoped>

 .social__icons li a{
        background: linear-gradient(155deg, #1A1A1A 51.7%, #000 127.92%);
        stroke-width: 0.736px;
        stroke: #FFF;
        width: 44.182px;
        height: 44.182px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 22px;
        margin-bottom: 22px;
        transition: all .3s ease-in-out;
        &:hover{
            background: linear-gradient(155deg, #FA8C16 51.7%, #000 127.92%);
        }
    }
</style>