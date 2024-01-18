<template>
    <div class="hero_area pt-[140px] md:pt-[215px] pb-[60px] md:pb-[125px] bg-cover bg-left-bottom reactive">
        <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover -z-0">
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
                <div class="lg:w-1/4 md:w-1/3 w-full px-3 mb-10 md:mb-7 text-center" v-for="item in bannerInfo"
                    :key="item.title">
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
    mounted() {
        const domain = 'https://sd.crustcode.com/api/'
        const username = "crust"
        const password = "654321"
        const token = `${username}:${password}`
        const encodedToken = btoa(token)
        useFetch(`${domain}totalStorage`, { server: false, headers: { 'Authorization': `Basic ${encodedToken}` } }).then(res => {
            this.totalStorage = this.formatData(res);
        }).catch(err => console.log(err));
        useFetch(`${domain}totalValidNodes`, { server: false, headers: { 'Authorization': `Basic ${encodedToken}` } }).then(res => {
            this.totalValidNodes = this.formatData(res);
        }).catch(err => console.log(err));
        useFetch(`${domain}orderCount`, { server: false, headers: { 'Authorization': `Basic ${encodedToken}` } }).then(res => {
            this.orderCount = this.formatData(res);
        }).catch(err => console.log(err));
        useFetch(`${domain}filePrice`, { server: false, headers: { 'Authorization': `Basic ${encodedToken}` } }).then(res => {
            this.filePrice = this.formatData(res);
        }).catch(err => console.log(err));
    },
    methods: {
        formatData(data) {
            let res = data?.data?.value
            if (res) {
                if (Object.prototype.toString.call(res) === "[object Object]") {
                    return res.data
                } else if (Object.prototype.toString.call(res) === "[object String]") {
                    try {
                        let obj = JSON.parse(res)
                        return obj.data
                    } catch (error) {
                        return 0
                    }
                } else {
                    return res
                }
            }
            return 0
        }
    },
};
</script>

<style lang="scss" scoped></style>