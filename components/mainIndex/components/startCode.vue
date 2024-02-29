<template>
  <div class="start-crust">
    <div class="start-crust-block">
      <div class="start-title start-pc" v-html="$t('storage.title')"></div>
      <div class="start-title start-mobile" v-html="$t('storage.title_mobile')"></div>
      <div class="start-code">
        <div class="start-code-left">
          <div class="start-code-left-top">
            <div class="start-code-left-tab start-pc">
              <div
                @click="activeTab = 1"
                :class="{
                  'start-code-tab': true,
                  'start-code-tab-active': activeTab == 1,
                }"
              >
                {{ $t(`storage.crustApi`) }}
              </div>
              <div
                @click="activeTab = 2"
                :class="{
                  'start-code-tab': true,
                  'start-code-tab-active': activeTab == 2,
                }"
              >
                {{ $t(`storage.crustChainApi`) }}
              </div>
            </div>
            <div class="start-code-left-tab  start-mobile">
              <div
                @click="activeTab = 1"
                :class="{
                  'start-code-tab': true,
                  'start-code-tab-active': activeTab == 1,
                }"
              >
                {{ $t(`storage.crustApi_mobile`) }}
              </div>
              <div
                @click="activeTab = 2"
                :class="{
                  'start-code-tab': true,
                  'start-code-tab-active': activeTab == 2,
                }"
              >
                {{ $t(`storage.crustChainApi_mobile`) }}
              </div>
            </div>
            <div class="start-code-content">
              <div class="start-code-main" v-if="activeTab == 1">
                <p>import { <span style="color:#c0392b">ApiPromise, WsProvider</span> } from &#39;@polkadot/api&#39;;<br />
import { <span style="color:#c0392b">typesBundleForPolkadot, crustTypes</span> } from &#39;@crustio/type-definitions&#39;;<br />
import { <span style="color:#c0392b">Keyring </span>} from &#39;@polkadot/keyring&#39;;<br />
import { <span style="color:#c0392b">KeyringPair</span> } from &#39;@polkadot/keyring/types&#39;;</p>

<p><span style="color:#c0392b">&nbsp;const </span>placeStorageOrder = <span style="color:#c0392b">async </span>() =&gt; {</p>

<p><span style="color:#27ae60">&nbsp;// 1. Connect to chain</span><br />
&nbsp;<span style="color:#c0392b">const </span>api = new <span style="color:#2980b9">ApiPromise</span>({<br />
&nbsp; &nbsp; &nbsp;provider: new <span style="color:#3498db">WsProvider</span>(&#39;wss://rpc.crust.network&#39;),<br />
&nbsp; &nbsp; &nbsp;typesBundle: typesBundleForPolkadot,<br />
&nbsp;});</p>

<p>&nbsp;<span style="color:#27ae60">// 2. Construct place-storage-order tx</span><br />
&nbsp;<span style="color:#c0392b">const </span>fileCid = &#39;Qm123&#39;; <span style="color:#27ae60">// IPFS CID</span><br />
&nbsp;<span style="color:#c0392b">const </span>fileSize = 2 * 1024 * 1024 * 1024; <span style="color:#27ae60">// Let&#39;s say 2 gb(in byte)</span><br />
&nbsp;<span style="color:#c0392b">const </span>tips = 0;<br />
&nbsp;<span style="color:#c0392b">const </span>memo = &#39;&#39;;<br />
<span style="color:#c0392b">&nbsp;const </span>tx = api.tx.market.<span style="color:#3498db">placeStorageOrder</span>(fileCid, fileSize, tips, memo);</p>

<p>&nbsp; <span style="color:#27ae60">&nbsp; // 3. Send and monitor storage order tx with seeds(account)</span><br />
<span style="color:#c0392b">&nbsp;const </span>seeds = &#39;xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx&#39;;<br />
<span style="color:#c0392b">&nbsp;const </span>kr = new <span style="color:#3498db">Keyring</span>({ type: &#39;sr25519&#39; });<br />
<span style="color:#c0392b">&nbsp;const </span>krp = kr.addFromUri(seeds);<br />
<span style="color:#c0392b">&nbsp;await </span>tx.<span style="color:#3498db">signAndSend</span>(krp, ({events = [], status}) =&gt; {<br />
&nbsp; &nbsp; &nbsp;<span style="color:#c0392b">console</span>.log(`💸 Tx status: ${status.type}, nonce: ${tx.nonce}.`);</p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; if (status.isInBlock) {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; events.<span style="color:#3498db">forEach</span>(({event: {method, section}}) =&gt; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;if (method === &#39;ExtrinsicSuccess&#39;) {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#c0392b">console</span>.log(`✅ &nbsp;Place storage order success!`);<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;}<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });<br />
&nbsp; &nbsp; &nbsp; &nbsp; } else {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#27ae60"> // Pass it</span><br />
&nbsp; &nbsp; &nbsp; &nbsp; }<br />
&nbsp; &nbsp; });</p>

<p>}</p>

<p><span style="color:#c0392b">placeStorageOrder</span>();</p>

                 </div>
              <div class="start-code-main" v-if="activeTab == 2">
                <p>import <span style="color:#c0392b">got </span>from &quot;got&quot;;</p>
<p>import { <span style="color:#c0392b">ethers </span>} from &quot;ethers&quot;;</p>
<p><span style="color:#c0392b">const </span>pinToCrust = <span style="color:#c0392b">async </span>() =&gt; {</p>
<p><span style="color:#27ae60">&nbsp; &nbsp;// 1. Construct web3 auth header</span></p>
<p><span style="color:#27ae60">&nbsp; &nbsp;// Now support: ethereum-series, polkadot-series, solana, elrond, flow, near, ...</span></p>
<p><span style="color:#27ae60">&nbsp; &nbsp;// Let&#39;s take ethereum as example</span></p>
<p>&nbsp; &nbsp;<span style="color:#c0392b">const </span>pair = ethers.Wallet.<span style="color:#2980b9">createRandom</span>();</p>
<p>&nbsp; &nbsp;<span style="color:#c0392b">const </span>sig = <span style="color:#c0392b">await </span>pair.<span style="color:#2980b9">signMessage</span>(pair.address);</p>
<p>&nbsp; &nbsp;<span style="color:#c0392b">const </span>authHeaderRaw = `eth-${pair.address}:${sig}`;</p>
<p>&nbsp; &nbsp;<span style="color:#c0392b">const </span>authHeader = Buffer.<span style="color:#2980b9">from</span>(authHeaderRaw).toString(&quot;base64&quot;); <span style="color:#27ae60">// IPFS Web3 Authed Pinning Service Endpoint</span></p>
<p>&nbsp; &nbsp;<span style="color:#c0392b">const </span>ipfsW3PinningService = &quot;https://pin.crustcode.com/psa&quot;;</p>
<p>&nbsp; &nbsp;<span style="color:#c0392b">const </span>ipfsCid = &quot;Qm123&quot;;</p>
<p>&nbsp; &nbsp;<span style="color:#c0392b">const </span>{ statusCode } = <span style="color:#c0392b">await </span>got.<span style="color:#3498db">post</span>(ipfsW3PinningService, {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; headers: {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; authorization: `Bearer ${authHeader}`,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; json: {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cid: ipfsCid,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</p>
<p>&nbsp; &nbsp; });</p>
<p>&nbsp; if (statusCode === 200) {</p>
<p>&nbsp; &nbsp; &nbsp; <span style="color:#c0392b">console</span>.log(&quot;Pin to Crust successfully!&quot;);</p>
<p>&nbsp; &nbsp;} else {</p>
<p>&nbsp; &nbsp; &nbsp; <span style="color:#c0392b">console</span>.error(&quot;Pin to Crust failed!&quot;);</p>
<p>&nbsp; &nbsp;}</p>
<p>&nbsp;};</p>
                 </div>
            </div>
          </div>
        </div>
        <div class="start-code-right">
          <div class="start-code-right-butto" @click="routeTo('start_button1')">
            <div>
              <img
                src="../../../assets/img/4-Start using Crust storage interfaces/Dev Guidance .svg"
                alt=""
              />
            </div>
            {{ $t(`storage.devButton`) }}
          </div>
          <div class="start-code-right-butto" v-if="activeTab == 2" @click="routeTo('start_button4')">
            <div>
              <img
                src="../../../assets/img/4-Start using Crust storage interfaces/storage.svg"
                alt=""
              />
            </div>
            {{ $t(`storage.crossButton`) }}
          </div>
           <div class="start-code-right-butto" v-if="activeTab == 1" @click="routeTo('start_button2')">
            <div>
              <img
                src="../../../assets/img/4-Start using Crust storage interfaces/storage.svg"
                alt=""
              />
            </div>
            {{ $t(`storage.saveButton`) }}
          </div>
          <div
            class="start-code-right-info start-code-right-info1"
            v-if="activeTab == 1"
            v-html="$t(`storage.crustInfo`)"
          ></div>
          <div
            class="start-code-right-info start-code-right-info2"
            v-if="activeTab == 2"
            v-html="$t(`storage.crustChainINfo`)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jumpTo from "../../../utils"
import Dev from "@/assets/img/4-Start using Crust storage interfaces/Dev Guidance .svg?raw"
import storage from "@/assets/img/4-Start using Crust storage interfaces/storage.svg?raw"
export default {
  data() {
    return {
      activeTab: 1,
      icons: [Dev, storage],
    }
  },
  methods:{
      routeTo(url){
jumpTo(url)
    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 1140px) {
  .start-pc{
    display: none !important;
  }
.start-crust {
  background: #fdf7f3;
  .start-crust-block {
    padding-top:7.33rem;
    margin: 0 auto;
    // height: 1247px;
    .start-title {
      text-align: center;
      margin: 0 auto 2.33rem;
 width: 23.33rem;
font-size: 1.5rem;
line-height: 2.5rem;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
    }
    .start-code {
     
      .start-code-left {
        .start-code-left-top {
            margin: 0 auto;
        width: 23.67rem;
height: 26rem;
background: #FFFFFF;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          .start-code-content {
            margin-top: 1rem;
            height: 21.92rem;
            overflow-y: scroll;
            overflow-x: scroll;
            .start-code-main {
              padding-left: 1.08rem;
              p {
              font-size: 0.83rem;
              transform: scale(0.83);
             transform-origin: 0 0;
                font-family: Montserrat, "Source Han Sans CN" !important;
                font-weight: 400;
                // color: #1F1F1F;
               line-height: 1.33rem;
              }
            }
            &::-webkit-scrollbar {
              /*滚动条整体样式*/
              width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
              height: 0px;
            }
            &::-webkit-scrollbar-thumb {
              /*滚动条里面小方块*/
              border-radius: 10px;
              box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
              background: #003752;
            }
            &::-webkit-scrollbar-track {
              /*滚动条里面轨道*/
              box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              background: #072038;
            }
            /*滚动条右下角颜色块*/
            &::-webkit-scrollbar-corner {
              background-color: #071e35;
            }
          }

          .start-code-left-tab {
            display: flex;
            height: 2.83rem;
            background: #fdf7f3;
            border-bottom:1px solid #e5e5e5;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            .start-code-tab {
            

            font-size: 1.17rem;
white-space: nowrap;
              cursor: pointer;
              padding: 0 1.33rem;
              line-height: 2.83rem;
  height: 2.83rem;
              font-family: "Montserrat-blod", "Source Han Sans CN-blod";
              font-weight: bold;
              color: #1f1f1f;
            }
            .start-code-tab-active {
              position: relative;
            
color: #FC7823;
              &::after{
               height: 0.17rem;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                content: "";
                background: #FC7823;
                border-radius: 0.8rem;
              }
              // color: #fc7823;
              // border-bottom: 4px solid#FC7823;
            }
          }
        }
      }
      .start-code-right {
        margin-top: 2rem;
        .start-code-right-butto {
          margin: 0 auto;
       width: 23.67rem;
        height: 3rem;
          background: #fdf7f3;
          border-radius: 8px;
          font-size: 1rem;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 500;
          color: #fc7823;
         line-height: 3rem;
          padding-left: 1.67rem;
          cursor: pointer;
          margin-bottom: 1rem;
          div {
            display: inline-block;
          }
          img {
           width: 1.75rem;
height: 1.75rem;
            margin-right: 0.83rem;
          }
          &:active {
            background: #fdede2;
          }
        }
        .start-code-right-info {
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
        width: 23.33rem;
        padding-left: 1.67rem;
        margin: 3.5rem auto 0;
font-size: 0.83rem;
color: #666666;
line-height: 1.25rem;
        }
      }
    }
  }
}
}
@media screen and (min-width: 1140px) {
  .start-mobile{
    display: none !important;
  }
.start-crust {
  background: #fdf7f3;
  .start-crust-block {
    padding-top: 180px;
    margin: 0 auto;
    width: 1140px;
    // height: 1247px;
    padding-bottom: 39px;
    .start-title {
      text-align: center;
      margin: 0 auto;
      height: 46px;
      line-height: 46px;
      font-size: 48px;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
    }
    .start-code {
      margin-top: 48px;
      display: flex;
      .start-code-left {
        .start-code-left-top {
          width: 702px;
          height: 562px;
          background: #ffffff;
          border: 2px solid #e5e5e5;
          border-radius: 10px;
          .start-code-content {
            margin-top: 10px;
            height: 485px;
            overflow-y: scroll;
            .start-code-main {
              padding-left: 17px;
              p {
                font-size: 14px;
                font-family: Montserrat, "Source Han Sans CN" !important;
                font-weight: 500;
                // color: #1F1F1F;
                line-height: 24px;
              }
            }
            &::-webkit-scrollbar {
              /*滚动条整体样式*/
              width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
              height: 10px;
            }
            &::-webkit-scrollbar-thumb {
              /*滚动条里面小方块*/
              border-radius: 10px;
              box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
              background: #003752;
            }
            &::-webkit-scrollbar-track {
              /*滚动条里面轨道*/
              box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              background: #072038;
            }
            /*滚动条右下角颜色块*/
            &::-webkit-scrollbar-corner {
              background-color: #071e35;
            }
          }

          .start-code-left-tab {
            display: flex;
            height: 52px;
            background: #fdf7f3;
            border-bottom: 2px solid #e5e5e5;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            .start-code-tab {
              &:first-child {
                margin-right: 50px;
              }
              cursor: pointer;
              padding: 0 15px;
              line-height: 52px;

              font-size: 18px;
              font-family: "Montserrat-blod", "Source Han Sans CN-blod";
              font-weight: bold;
              color: #1f1f1f;
            }
            .start-code-tab-active {
              position: relative;
              color:#FC7823;
              &::after{
                height: 4px;
                width: 100%;
                position: absolute;
                bottom: -3px;
                left: 0;
                content: "";
                background: #FC7823;
                border-radius: 10px;
              }
              // color: #fc7823;
              // border-bottom: 4px solid#FC7823;
            }
          }
        }
      }
      .start-code-right {
        margin-left: 9px;
        .start-code-right-butto {
          &:first-child {
            margin-top: 50px;
          }
          &:nth-child(2) {
            margin: 23px 0 71px;
          }
          width: 360px;
          height: 50px;
          background: #fdf7f3;
          border-radius: 8px;
          font-size: 18px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 500;
          color: #fc7823;
          line-height: 50px;
          padding-left: 15px;
          cursor: pointer;
          img {
            margin: 0 19px 0 16px;
          }
          div {
            display: inline-block;
          }
          img {
            width: 26px;
            height: 26px;
            margin-right: 10px;
          }
          &:hover {
            background: #fdede2;
          }
        }
        .start-code-right-info {
          line-height: 78px;
          font-size: 14px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #1f1f1f;
          line-height: 24px;
          padding:0 15px;
          padding-left: 30px;
        }
        .start-code-right-info1{
          width: 389px;
        }
        .start-code-right-info2{
          width: 482px;
        }
      }
    }
  }
}
}
</style>