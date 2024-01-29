<template>
    <div class="vue3-marquee horizontal" ref="outer">
        <div class="marquee" ref="inner" :class="{ 'st-scrolling': needToScroll && duration }">
          <slot></slot><slot></slot>
        </div>
    </div>
  </template>
  <script>
  export default {
    name: 'Marquee',
    props: {
      direction: {
        type: String,
        default: 'normal',
      },
      // 滚动速度 npx/s
      speed: {
        type: Number,
        default: 30,
      }
    },
    data() {
      return {
        startDelay: 1000, // 开始延迟 3000ms
        needToScroll: false,
        duration: '',
        innerWidth: 0,
        outerWidth: 0,
        timer: null,
      }
    },
    mounted() {
        this.init();
    },
    beforeUnmount() {
      this.clear();
    },
    watch: {
      
    },
    methods: {
      // 初始化
      init() {
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            let { flag, duration } = this.isOverflow();
            this.duration = duration;
            this.needToScroll = flag;
          }, this.startDelay);
        })
      },
  
      // 清除
      clear() {
        this.duration = 0;
        this.needToScroll = false;
        clearTimeout(this.timer);
      },
  
      // 判断子元素宽度是否大于父元素宽度，超出则需要滚动，否则不滚动，并且计算 animation duration
      isOverflow() {
        let outer = this.$refs.outer;
        let inner = this.$refs.inner;
        let outerWidth = this.getWidth(outer);
        let innerWidth = this.getWidth(inner);
        this.outerWidth = outerWidth;
        this.innerWidth = innerWidth;
        return {
          flag: innerWidth > outerWidth,
          duration: (innerWidth / this.speed).toFixed(0) + 's',
        }
      },
  
      // 获取元素宽度
      getWidth(el) {
        let { width = 0 } = el?.getBoundingClientRect() || {};
        return width
      },
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .vue3-marquee {
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    
    .st-scrolling {
      // 向左匀速滚动动画
      animation: scroll v-bind(duration) linear infinite;
      animation-direction: v-bind(direction);
    }
    .marquee {
        display: flex;
        flex-direction: row;
    }
  }
  
  
  @keyframes scroll {
    0% {
      transform: translate3d(0%, 0, 0);
    }
  
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
  </style>