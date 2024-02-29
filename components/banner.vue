<template>
    <div class="hero_area pt-[140px] md:pt-[215px] pb-[60px] md:pb-[125px] bg-cover bg-left-bottom reactive">
        <video autoplay muted playsinline loop class="absolute inset-0 w-full h-full object-cover -z-0">
            <source src="/public/img/hero-orange-video.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <img src="/public/img/hero-banner-after.png" alt="" class="w-full h-auto absolute top-0 left-0 z-1">
        <div class="container px-3 z-10 relative">
            <div class="flex -mx-3 justify-center">
                <div class="w-full sm:w-10/12 px-3 text-center pb-[100px] md:pb-[140px]">
                    <div class="mb-[60px] md:mb-24 px-[2%]">
                        <h1
                            class="font-normal text-white text-[28px] md:text-[45px] lg:text-[60px] xl:text-[64px] leading-[1.28]">
                            Complete Your Web3 Journey <strong class="font-bold block">with Decentralized Storage</strong>
                        </h1>
                    </div>
                    <div
                        class="w-11/12 sm:w-10/12 md:w-8/12 flex flex-wrap items-center gap-4 md:gap-8 mx-auto justify-center">
                        <Button class="min-w-[170px] lg:min-w-[210px] btn_one">
                            <a href="https://wiki.crust.network/docs/en/build101" target="_blank"
                                rel="noopener noreferrer">Build on Crust</a>
                        </Button>
                        <Button class="min-w-[170px] lg:min-w-[210px] btn_two">
                            <a href="https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/explorer"
                                target="_blank" rel="noopener noreferrer">Crust Mainnet</a>
                        </Button>
                        <Button class="min-w-[170px] lg:min-w-[210px] btn_three">
                            <a href="https://ethda.io/" target="_blank" rel="noopener noreferrer">EthDA</a>
                        </Button>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 justify-center">
                <div class="lg:w-1/4 md:w-1/3 w-full px-3 mb-10 md:mb-7 text-center" v-for="(item, index) in bannerInfo" :key="item.des + '-' + index">
                    <h3 class="text-[24px] md:text-[32px] font-bold leading-tight mb-3 text-white">{{ item.title }} <sub>{{
                        item.sub }}</sub></h3>
                    <p class="mb-0 text-primary-500 uppercase font-medium text-[14px] md:text-[18px]">{{ item.des }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "banner",
    data() {
        return {
            totalStorage: 0,
            totalValidNodes: 0,
            orderCount: 0,
            filePrice: 0,
        };
    },
    computed: {
        bannerInfo() {
            const { totalStorage, totalValidNodes, orderCount, filePrice } = this;
            return [
                {
                    title: totalStorage.toLocaleString() + ' TB',
                    des: 'Storage capacity'
                },
                {
                    title: totalValidNodes.toLocaleString(),
                    des: 'DISTRIBUTED NODES'
                },
                {
                    title: orderCount.toLocaleString(),
                    des: 'STORAGE ORDERS'
                },
                {
                    title: '$ ' + filePrice.toLocaleString(undefined, { maximumFractionDigits: 6 }) + ' ',
                    sub: '/GB/Year',
                    des: 'STORAGE FEE'
                },
            ]
        }
    },
    async mounted() {
        let totalStorage = await this.getJSON('/totalStorage')
        let totalValidNodes = await this.getJSON('/totalValidNodes')
        let orderCount = await this.getJSON('/orderCount')
        let filePrice = await this.getJSON('/filePrice')

        this.totalStorage = totalStorage.data || 0
        this.totalValidNodes = totalValidNodes.data || 0
        this.orderCount = orderCount.data || 0
        this.filePrice = filePrice.data || 0
    },
    methods: {
        async getJSON(path) {
            const domain = 'https://sd.crustcode.com/api'
            const username = "crust"
            const password = "654321"
            const token = `${username}:${password}`
            const encodedToken = btoa(token);

            try {
                let response = await fetch(domain + path, {
                    headers: { 'Authorization': `Basic ${encodedToken}` }
                });
                return await response.json();
            } catch (error) {
                console.log('Request Failed', error);
            }
        }
    },
};
</script>

<style lang="scss" scoped></style>