<template>
  <div>
    <div class="latest-crust">
      <div class="latest-crust-block">
        <div class="latest-title" v-html="$t(`latest.title`)"></div>
        <div class="latest-item">
          <div class="latest-item-box" @click="routeTo(profileURL + item.uniqueSlug)" v-for="(item,index) in posts" :key="index">
            <div class="latest-item-bg">
              <img v-if="item.virtuals.previewImage.imageId" v-bind:src="
              'https://cdn-images-1.medium.com/fit/t/800/480/' +
              item.virtuals.previewImage.imageId
            " alt="" />
            </div>
            <div class="latest-item-text">{{item.createdAt|filterTime}}</div>
            <div class="latest-item-title">{{item.title}}</div>
          </div>
          <!-- <div class="latest-item-box">
            <div class="latest-item-bg">
              <img src="../../../assets/img/latest img/img-2.png" alt="" />
            </div>
            <div class="latest-item-text">2021.November.11</div>
            <div class="latest-item-title">From Crust Network to...</div>
          </div>
          <div class="latest-item-box">
            <div class="latest-item-bg">
              <img src="../../../assets/img/latest img/img-3.png" alt="" />
            </div>
            <div class="latest-item-text">2021.November.11</div>
            <div class="latest-item-title">From Crust Network to...</div>
          </div>
          <div class="latest-item-box">
            <div class="latest-item-bg">
              <img src="../../../assets/img/latest img/img-4.png" alt="" />
            </div>
            <div class="latest-item-text">2021.November.11</div>
            <div class="latest-item-title">From Crust Network to...</div>
          </div> -->
        </div>
        <!-- <div class="latest-email">
          <div class="latest-email-title">{{ $t(`email.title`) }}</div>
          <div class="latest-email-subtitle">{{ $t(`email.subTitle`) }}</div>
          <div class="latest-email-form">
            <input v-model="email" :placeholder="$t(`email.placeholder`)" />
            <div class="latest-email-form-button">
              {{ $t(`email.button`) }}
              <img src="../../../assets/img/logo/subscribe@3x.png" alt="" />
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      email: "",
      profileURL: "https://medium.com/crustnetwork/",
      posts: [
        {
          id: "f7ff837ed0ef",
          title: "Crust’s Cross-Chain dStorage Solution",
          detectedLanguage: "en",
          content: {
            subtitle: "Introduction",
          },
          virtuals: {
            previewImage: {
              imageId: "0*hJjlbX5NPOpLtOGQ",
            },
            subtitle: "Introduction",
          },
          slug: "crusts-cross-chain-dstorage-solution",
          uniqueSlug: "crusts-cross-chain-dstorage-solution-f7ff837ed0ef",
        },
        {
          id: "2b25d5436ddb",
          title: "Community Contribution Rewards for Crust Network",
          content: {
            subtitle:
              "Crust Network is a community-focused project. All campaigns we launch are always a way to reward the community with their help to drive the…",
          },
          virtuals: {
            previewImage: {
              imageId: "1*C9zR-HIhPoK5uQUSOEpdNQ.jpeg",
            },
            subtitle:
              "Crust Network is a community-focused project. All campaigns we launch are always a way to reward the community with their help to drive the…",
          },
          slug: "community-rewards-for-crust-mainnet-launch",
          uniqueSlug: "community-rewards-for-crust-mainnet-launch-2b25d5436ddb",
        },
        {
          id: "dc9b90f7e175",
          title:
            "Crust Network Partners with NEAR Protocol to Introduce Decentralized Storage Solutions",
          content: {
            subtitle:
              "We are excited to announce that Crust Network, a decentralized storage network that underpins Web 3.0 style data & file architecture, is…",
          },
          virtuals: {
            previewImage: {
              imageId: "0*D8ypVJmm0n5F-F17.jpeg",
            },
            subtitle:
              "We are excited to announce that Crust Network, a decentralized storage network that underpins Web 3.0 style data & file architecture, is…",
          },
          slug: "crust-network-partners-with-near-protocol-to-introduce-decentralized-storage-solutions",
          uniqueSlug:
            "crust-network-partners-with-near-protocol-to-introduce-decentralized-storage-solutions-dc9b90f7e175",
        },{
          id: "dc9b90f7e175",
          title:
            "Crust Network Partners with NEAR Protocol to Introduce Decentralized Storage Solutions",
          content: {
            subtitle:
              "We are excited to announce that Crust Network, a decentralized storage network that underpins Web 3.0 style data & file architecture, is…",
          },
          virtuals: {
            previewImage: {
              imageId: "0*D8ypVJmm0n5F-F17.jpeg",
            },
            subtitle:
              "We are excited to announce that Crust Network, a decentralized storage network that underpins Web 3.0 style data & file architecture, is…",
          },
          slug: "crust-network-partners-with-near-protocol-to-introduce-decentralized-storage-solutions",
          uniqueSlug:
            "crust-network-partners-with-near-protocol-to-introduce-decentralized-storage-solutions-dc9b90f7e175",
        },
      ],
    }
  },
  filters:{
    filterTime(n){
     return moment(n).format('YYYY.MMMM.DD')
    }
  },
   async created() {
    const maxPostCount = 4
    const resp = await this.$axios.$get(
      "https://data.feedmirror.com/-MmKpg8kfvTBHNkj5474.json"
    )
    const data = resp.split("])}while(1);</x>")[1]
    const feeds = JSON.parse(data)
    const fmPosts = feeds.payload.references.Post
    const fmPostKeys = Object.keys(fmPosts)
    let fmUser = ""
    if (feeds.payload.user) {
      fmUser = "@" + feeds.payload.user.username
    } else {
      fmUser = feeds.payload.collection.slug
    }
    const posts = []
    fmPostKeys.forEach(function (element, index) {
      if (posts.length < maxPostCount) {
        posts.push(fmPosts[element])
      }
    })
    this.posts = posts
    this.profileURL = "https://medium.com/" + fmUser + "/"
  },
  methods: {
     routeTo(url) {
      window.open(url, "_blank")
    },
  },
}
</script>

<style lang="scss">
@media screen and (max-width: 1140px) {
.latest-crust {
  background: #fdf7f3;
  .latest-crust-block {
    padding-top: 2.67rem;
    margin: 0 auto;
    padding-bottom: 72px;
    .latest-title {
      text-align: center;
      margin:0 auto 2rem;
      width: 13rem;
   font-size: 2rem;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
      line-height: 2rem;
    }
    .latest-item {
      .latest-item-box {
        cursor: pointer;
        margin: 0 auto 2.67rem;
      width: 23.33rem;
height: 19.58rem;
        background: #fffcfa;
        box-shadow: 0px 5px 5px 0px rgba(4, 0, 0, 0.02);
        border-radius: 15px;
        padding: 15px;
        .latest-item-bg {
          display: flex;
          align-items: center;
          justify-content: center;
       height: 13.33rem;
       margin-bottom: 1rem;
          img {
         width: 20rem;
max-height: 13.33rem;
border-radius: 0.67rem;
          }
        }
        .latest-item-text {
          height: 0.83rem;
       font-size: 0.83rem;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #1f1f1f;
          line-height: 0.83rem;
          margin-bottom: 0.83rem;
        }
        .latest-item-title {
         width: 15rem;
          font-size: 1.17rem;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #fc7823;
          line-height:1.17rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all; //英文换行
        }
      }
    }
    .latest-email {
      margin-top: 54px;
      width: 1234px;
      height: 200px;
      border-radius: 10px;
      background: url("../../../assets/img/8-foot/bg.png") no-repeat;
      background-size: 100% 100%;
      padding-top: 33px;
      .latest-email-title {
        text-align: center;
        height: 30px;
        font-size: 30px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #ffffff;
        line-height: 30px;
      }
      .latest-email-subtitle {
        text-align: center;
        height: 18px;
        font-size: 18px;
        font-family: Montserrat, "Source Han Sans CN";
        font-weight: 400;
        color: #ffffff;
        line-height: 18px;
        margin: 8px 0 32px;
      }
      .latest-email-form {
        display: flex;
        justify-content: center;
        input {
          width: 480px;
          height: 46px;
          background: #fdf7f3;
          border-radius: 8px;
          padding-left: 26px;
          font-size: 18px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          line-height: 46px;
          border: 0;
        }
        .latest-email-form-button {
          width: 200px;
          height: 46px;
          background: #fc7823;
          border-radius: 8px;
          font-size: 18px;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #ffffff;
          line-height: 46px;
          text-align: center;
          margin-left: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:hover {
            background: #ff6400;
          }
          img {
            width: 21px;
            height: 21px;
            margin-left: 16px;
          }
        }
      }
    }
  }
}
}
@media screen and (min-width: 1140px) {
.latest-crust {
  background: #fdf7f3;
  .latest-crust-block {
    padding-top: 72px;
    margin: 0 auto;
    width: 1240px;
    padding-bottom: 72px;
    .latest-title {
      text-align: center;
      margin: 73px 0 52px;
      height: 35px;
      font-size: 48px;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
      line-height: 7px;
    }
    .latest-item {
      display: flex;
      justify-content: space-between;
      .latest-item-box {
        cursor: pointer;
        width: 300px;
        height: 300px;
        background: #fffcfa;
        box-shadow: 0px 5px 5px 0px rgba(4, 0, 0, 0.02);
        border-radius: 15px;
        padding: 15px;
        .latest-item-bg {
          display: flex;
          align-items: center;
          height: 180px;
          img {
            width: 270px;
            // height: 180px;
            border-radius: 10px;
          }
        }
        .latest-item-text {
          width: 126px;
          height: 20px;
          font-size: 14px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #1f1f1f;
          line-height: 20px;
          margin: 24px 0 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all; //英文换行
        }
        .latest-item-title {
          width: 230px;
          height: 22px;
          font-size: 18px;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #fc7823;
          line-height: 22px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all; //英文换行
        }
      }
    }
    .latest-email {
      margin-top: 54px;
      width: 1234px;
      height: 200px;
      border-radius: 10px;
      background: url("../../../assets/img/8-foot/bg.png") no-repeat;
      background-size: 100% 100%;
      padding-top: 33px;
      .latest-email-title {
        text-align: center;
        height: 30px;
        font-size: 30px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #ffffff;
        line-height: 30px;
      }
      .latest-email-subtitle {
        text-align: center;
        height: 18px;
        font-size: 18px;
        font-family: Montserrat, "Source Han Sans CN";
        font-weight: 400;
        color: #ffffff;
        line-height: 18px;
        margin: 8px 0 32px;
      }
      .latest-email-form {
        display: flex;
        justify-content: center;
        input {
          width: 480px;
          height: 46px;
          background: #fdf7f3;
          border-radius: 8px;
          padding-left: 26px;
          font-size: 18px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          line-height: 46px;
          border: 0;
        }
        .latest-email-form-button {
          width: 200px;
          height: 46px;
          background: #fc7823;
          border-radius: 8px;
          font-size: 18px;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #ffffff;
          line-height: 46px;
          text-align: center;
          margin-left: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:hover {
            background: #ff6400;
          }
          img {
            width: 21px;
            height: 21px;
            margin-left: 16px;
          }
        }
      }
    }
  }
}
}
</style>