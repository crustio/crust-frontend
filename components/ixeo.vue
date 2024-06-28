<template>
  <div class="container pb-5 pt-7 md:pb-20 ixeo__area">
    <div class="flex flex-wrap">
      <ul
        class="flex mb-0 list-none flex-wrap flex-row w-full ixeo__list_wrapper rounded-[10px] bg-[#0C0C0C] backdrop-filter-[blur(7px)]"
      >
        <li v-on:click="toggleTabs(1)" :class="{ 'nav-item': true, active: openTab === 1 }">IPFS</li>
        <li v-on:click="toggleTabs(2)" :class="{ 'nav-item': true, active: openTab === 2 }">XCMP</li>
        <li v-on:click="toggleTabs(3)" :class="{ 'nav-item': true, active: openTab === 3 }">EVM</li>
        <li v-on:click="toggleTabs(4)" :class="{ 'nav-item': true, active: openTab === 4 }">Others</li>
      </ul>
      <div class="ixeo__tab__content relative flex flex-col w-full pt-[45px] pb-7 md:pb-16 px-[20px] md:px-7 rounded-[10px] bg-[#080809]">
        <transition name="fade" mode="out-in">
          <div :key="openTab" class="fade">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <div class="flex flex-wrap">
                <div class="lg:w-6/12 pt-4 md:pl-[75px]">
                  <h3 class="mb-4 md:mb-6 text-[24px] md:pl-[30px]">IPFS</h3>
                  <ul class="tab__content__in_list">
                    <li
                      v-for="(item, index) in items1"
                      :key="index"
                      class="mb-9 md:mr-[15%] relative pl-8 text-[14px] md:text-[16px]"
                    >
                      {{ item }}
                    </li>
                  </ul>
                  <a
                   :href="`https://wiki.${currentHostname}/`"
                    target="_blank"
                    class="bg-[#FA8C16] min-w-[206px] text-white p-3 mt-[24px] md:mt-[60px] rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300 md:ml-[30px] text-[16px] md:text-[20px]"
                  >
                    Start Building
                  </a>
                </div>
                <div class="mt-8 lg:w-6/12">
                  <div class="api_code_with_copy_code">
                    <ul class="copycode_header">
                      <p>Api Code</p>
                      <button @click="copyCode('#IPFS-Code')" class="copy-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                          <path
                            d="M3.95087 6.67881C3.70961 5.65025 3.70961 4.57983 3.95087 3.55127C4.28495 2.12706 5.39698 1.01502 6.8212 0.680949C7.84975 0.439684 8.92018 0.439684 9.94873 0.680949C11.3729 1.01502 12.485 2.12706 12.8191 3.55128C13.0603 4.57983 13.0603 5.65025 12.8191 6.6788C12.485 8.10302 11.3729 9.21505 9.94872 9.54913C8.92017 9.79039 7.84975 9.79039 6.8212 9.54913M3.95087 6.67881C4.28495 8.10302 5.39699 9.21505 6.8212 9.54913M3.95087 6.67881C3.79896 6.03119 3.7427 5.36696 3.78209 4.70705C3.72639 4.71842 3.67081 4.7306 3.61538 4.7436C2.39462 5.02995 1.44145 5.98313 1.1551 7.20388C0.9483 8.0855 0.9483 9.00301 1.1551 9.88462C1.44145 11.1054 2.39463 12.0586 3.61538 12.3449C4.49699 12.5517 5.4145 12.5517 6.29612 12.3449C7.51687 12.0586 8.47005 11.1054 8.7564 9.88462C8.7694 9.82919 8.78158 9.77361 8.79295 9.71791C8.13304 9.7573 7.46882 9.70104 6.8212 9.54913"
                            stroke="#D9D9E2"
                          />
                        </svg>
                        Copy Code
                      </button>
                      <div v-if="copyStatus" class="copy-status">{{ copyStatus }}</div>
                    </ul>
                    <div class="code">
                      <pre class="code-wrapper">
<code id="IPFS-Code" class="language theme-dracula" v-pre>const got = require('got');
const { create, globSource } = require('ipfs-http-client');
const { Keyring } = require('@polkadot/keyring');

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    // 1. Get all inputss
    const path = './build';
    const seeds = process.argv[2];
    const ipfsGateway = 'https://crustwebsites.net'; // IPFS Web3 Authed Gateway address
    const ipfsPinningService = 'https://pin.crustcode.com/psa'; // IPFS Web3 Authed Pinning Service address

    // 2. Construct auth header
    const keyring = new Keyring();
    const pair = keyring.addFromUri(seeds);
    const sig = pair.sign(pair.address);
    const sigHex = '0x' + Buffer.from(sig).toString('hex');

    const authHeader = Buffer.from(`sub-${pair.address}:${sigHex}`).toString('base64');

    // 3. Create ipfs http client
    const ipfs = create({
        url: ipfsGateway + '/api/v0',
        headers: {
            authorization: 'Basic ' + authHeader
        }
    });

    const { cid } = await ipfs.add(globSource(path, '**/*'));

    if (cid) {
        console.log(cid.toV0().toString());
    } else {
        throw new Error('IPFS add failed, please try again.');
    }

    // 4. Pin to crust with IPFS standard W3Authed pinning service
    const {body} = await got.post(
        ipfsPinningService + '/pins',
        {
            headers: {
                authorization: 'Bearer ' + authHeader
            },
            json: {
                cid: cid.toV0().toString(),
                name: 'crust-demo'
            }
        }
    );

    if (body) {
        const rid = JSON.parse(body)['requestId'];
        console.log(body, rid);
        // 5. Query pinning status through pinning service
        while (true) {
            const {body: pinningStat} = await got(
                ipfsPinningService + `/pins/${rid}`,
                {
                    headers: {
                        authorization: 'Bearer ' + authHeader
                    }
                }
            );
            console.log(pinningStat); // After success, you can query the cid on Crust

            await timeout(1000);
        }
    } else {
        console.log(body);
        throw new Error('Crust pin failed, please try again.');
    }
}

main().catch(error => {
    console.error(error.message);
});
</code>
</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <div class="flex flex-wrap">
                <div class="lg:w-6/12 pt-4 md:pl-[75px]">
                  <h3 class="mb-4 md:mb-6 text-[24px] md:pl-[30px]">XCMP</h3>
                  <ul class="tab__content__in_list">
                    <li
                      v-for="(item, index) in items2"
                      :key="index"
                      class="mb-9 md:mr-[15%] relative pl-8 text-[14px] md:text-[16px]"
                    >
                      {{ item }}
                    </li>
                  </ul>
                  <a
                   :href="`https://wiki.${currentHostname}/`"
                    target="_blank"
                    class="bg-[#FA8C16] min-w-[206px] text-white p-3 mt-[24px] md:mt-[60px] rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300 md:ml-[30px] text-[16px] md:text-[20px]"
                  >
                    Start Building
                  </a>
                </div>
                <div class="mt-8 lg:w-6/12">
                  <div class="api_code_with_copy_code">
                    <ul className="copycode_header">
                      <p>Api Code</p>
                      <button @click="copyCode('#XCMP-Code')" class="copy-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                          <path
                            d="M3.95087 6.67881C3.70961 5.65025 3.70961 4.57983 3.95087 3.55127C4.28495 2.12706 5.39698 1.01502 6.8212 0.680949C7.84975 0.439684 8.92018 0.439684 9.94873 0.680949C11.3729 1.01502 12.485 2.12706 12.8191 3.55128C13.0603 4.57983 13.0603 5.65025 12.8191 6.6788C12.485 8.10302 11.3729 9.21505 9.94872 9.54913C8.92017 9.79039 7.84975 9.79039 6.8212 9.54913M3.95087 6.67881C4.28495 8.10302 5.39699 9.21505 6.8212 9.54913M3.95087 6.67881C3.79896 6.03119 3.7427 5.36696 3.78209 4.70705C3.72639 4.71842 3.67081 4.7306 3.61538 4.7436C2.39462 5.02995 1.44145 5.98313 1.1551 7.20388C0.9483 8.0855 0.9483 9.00301 1.1551 9.88462C1.44145 11.1054 2.39463 12.0586 3.61538 12.3449C4.49699 12.5517 5.4145 12.5517 6.29612 12.3449C7.51687 12.0586 8.47005 11.1054 8.7564 9.88462C8.7694 9.82919 8.78158 9.77361 8.79295 9.71791C8.13304 9.7573 7.46882 9.70104 6.8212 9.54913"
                            stroke="#D9D9E2"
                          />
                        </svg>
                        Copy Code
                      </button>
                      <div v-if="copyStatus" class="copy-status">{{ copyStatus }}</div>
                    </ul>
                    <div class="code">
                      <pre className="code-wrapper">
<code id="XCMP-Code" class="language theme-dracula" v-pre>#[pallet::weight(1_000_000)]
pub fn place_storage_order(
  origin: OriginFor&lt;T&gt;,
  cid: Vec&lt;u8&gt;,
  size: u64,
  currency_id: T::CurrencyId
) -> DispatchResult {
  let who = ensure_signed(origin)?;

  let location: MultiLocation =
    T::CurrencyIdToMultiLocation::convert(currency_id.clone()).ok_or(Error::&lt;T&gt;::NotCrossChainTransferableCurrency)?;

  let amount = StorageFeePerCurrency::&lt;T&gt;::get(&currency_id)
  .ok_or(Error::&lt;T&gt;::NotSupportedCurrency)?;

  let fee: MultiAsset = MultiAsset {
    id: Concrete(location),
    fun: Fungible(amount),
  };

  // Convert origin to multilocation
  let origin_as_mult = T::AccountIdToMultiLocation::convert(who.clone());
  let dest_as_mult = T::AccountIdToMultiLocation::convert(Self::account_id());

  T::AssetTransactor::internal_transfer_asset(&fee.clone().into(), &origin_as_mult, &dest_as_mult)
    .map_err(|_| Error::&lt;T&gt;::UnableToTransferStorageFee)?;

  Self::deposit_event(Event::FileSuccess {
    account: who,
    cid,
    size,
  });

  Ok(().into())
}
</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <div class="flex flex-wrap">
                <div class="lg:w-6/12 pt-4 md:pl-[75px]">
                  <h3 class="mb-4 md:mb-6 text-[24px] md:pl-[30px]">EVM</h3>
                  <ul class="tab__content__in_list">
                    <li
                      v-for="(item, index) in items3"
                      :key="index"
                      class="mb-9 md:mr-[15%] relative pl-8 text-[14px] md:text-[16px]"
                    >
                      {{ item }}
                    </li>
                  </ul>
                  <a
                   :href="`https://wiki.${currentHostname}/`"
                    target="_blank"
                    class="bg-[#FA8C16] min-w-[206px] text-white p-3 mt-[24px] md:mt-[60px] rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300 md:ml-[30px] text-[16px] md:text-[20px]"
                  >
                    Start Building
                  </a>
                </div>
                <div class="mt-8 lg:w-6/12">
                  <div class="api_code_with_copy_code">
                    <ul class="copycode_header">
                      <p>Api Code</p>
                      <button @click="copyCode('#EVM-Code')" class="copy-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                          <path
                            d="M3.95087 6.67881C3.70961 5.65025 3.70961 4.57983 3.95087 3.55127C4.28495 2.12706 5.39698 1.01502 6.8212 0.680949C7.84975 0.439684 8.92018 0.439684 9.94873 0.680949C11.3729 1.01502 12.485 2.12706 12.8191 3.55128C13.0603 4.57983 13.0603 5.65025 12.8191 6.6788C12.485 8.10302 11.3729 9.21505 9.94872 9.54913C8.92017 9.79039 7.84975 9.79039 6.8212 9.54913M3.95087 6.67881C4.28495 8.10302 5.39699 9.21505 6.8212 9.54913M3.95087 6.67881C3.79896 6.03119 3.7427 5.36696 3.78209 4.70705C3.72639 4.71842 3.67081 4.7306 3.61538 4.7436C2.39462 5.02995 1.44145 5.98313 1.1551 7.20388C0.9483 8.0855 0.9483 9.00301 1.1551 9.88462C1.44145 11.1054 2.39463 12.0586 3.61538 12.3449C4.49699 12.5517 5.4145 12.5517 6.29612 12.3449C7.51687 12.0586 8.47005 11.1054 8.7564 9.88462C8.7694 9.82919 8.78158 9.77361 8.79295 9.71791C8.13304 9.7573 7.46882 9.70104 6.8212 9.54913"
                            stroke="#D9D9E2"
                          />
                        </svg>
                        Copy Code
                      </button>
                      <div v-if="copyStatus" class="copy-status">{{ copyStatus }}</div>
                    </ul>
                    <div class="code">
                      <pre class="code-wrapper">
<code id="EVM-Code" class="lang-js theme-dracula" v-pre>const { ethers } = require("ethers");

// Base
const ABI = `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"customer","type":"address"},{"indexed":false,"internalType":"address","name":"merchant","type":"address"},{"indexed":false,"internalType":"string","name":"cid","type":"string"},{"indexed":false,"internalType":"uint256","name":"size","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isPermanent","type":"bool"}],"name":"Order","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"address","name":"nodeAddress","type":"address"}],"name":"addOrderNode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getNodesNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"bool","name":"isPermanent","type":"bool"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nodeArray","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nodes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"bool","name":"isPermanent","type":"bool"}],"name":"placeOrder","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"address","name":"nodeAddress","type":"address"},{"internalType":"bool","name":"isPermanent","type":"bool"}],"name":"placeOrderWithNode","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"priceOracle","outputs":[{"internalType":"contract IPriceOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nodeAddress","type":"address"}],"name":"removeOrderNode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"priceOracleAddress","type":"address"}],"name":"setPriceOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}]`
const CONTRACT_ADDRESS = "0xE391613d2056e47F74ED5eF1d443d4CDB21AAAd9";
const CHAIN_URL = "https://ethereum-mainnet-rpc.allthatnode.com";
const PRIVATE_KEY = "0xxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// File infomation
const fileCid = "QmTWBmGaUhEEusN5cftWFWjcegbfd9KftRND9EdsZrUvh2";
const fileSize = 44358;
const isPermanentStorage = false; // false means 6 months storage

async function main() {
    // provider
    const provider = new ethers.providers.JsonRpcProvider(CHAIN_URL)
    // signer
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    // contract instance
    const storeContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    console.log("Get the file storage fee");
    const price = await storeContract.getPrice(fileSize, isPermanentStorage);
    console.log("Fee: " + price + " wei");

    console.log("Place storge order");
    const tx = await storeContract.placeOrder(fileCid, fileSize, isPermanentStorage, { value: price });
    await tx.wait();
    console.log("Done this");
}

(async () => {
    await main();
})().catch(e => {
    console.error(e);
});
</code>
</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <div class="flex flex-wrap">
                <div class="lg:w-6/12 pt-4 md:pl-[75px]">
                  <h3 class="mb-4 md:mb-6 text-[24px] md:pl-[30px]">Others</h3>
                  <ul class="tab__content__in_list">
                    <li
                      v-for="(item, index) in items4"
                      :key="index"
                      class="mb-9 md:mr-[15%] relative pl-8 text-[14px] md:text-[16px]"
                    >
                      {{ item }}
                    </li>
                  </ul>
                  <a
                   :href="`https://wiki.${currentHostname}/`"
                    target="_blank"
                    class="bg-[#FA8C16] min-w-[206px] text-white p-3 mt-[24px] md:mt-[60px] rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300 md:ml-[30px] text-[16px] md:text-[20px]"
                  >
                    Start Building
                  </a>
                </div>
                <div class="mt-8 lg:w-6/12">
                  <div class="api_code_with_copy_code">
                    <ul className="copycode_header">
                      <p>Api Code</p>
                      <button @click="copyCode('#Others-Code')" class="copy-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                          <path
                            d="M3.95087 6.67881C3.70961 5.65025 3.70961 4.57983 3.95087 3.55127C4.28495 2.12706 5.39698 1.01502 6.8212 0.680949C7.84975 0.439684 8.92018 0.439684 9.94873 0.680949C11.3729 1.01502 12.485 2.12706 12.8191 3.55128C13.0603 4.57983 13.0603 5.65025 12.8191 6.6788C12.485 8.10302 11.3729 9.21505 9.94872 9.54913C8.92017 9.79039 7.84975 9.79039 6.8212 9.54913M3.95087 6.67881C4.28495 8.10302 5.39699 9.21505 6.8212 9.54913M3.95087 6.67881C3.79896 6.03119 3.7427 5.36696 3.78209 4.70705C3.72639 4.71842 3.67081 4.7306 3.61538 4.7436C2.39462 5.02995 1.44145 5.98313 1.1551 7.20388C0.9483 8.0855 0.9483 9.00301 1.1551 9.88462C1.44145 11.1054 2.39463 12.0586 3.61538 12.3449C4.49699 12.5517 5.4145 12.5517 6.29612 12.3449C7.51687 12.0586 8.47005 11.1054 8.7564 9.88462C8.7694 9.82919 8.78158 9.77361 8.79295 9.71791C8.13304 9.7573 7.46882 9.70104 6.8212 9.54913"
                            stroke="#D9D9E2"
                          />
                        </svg>
                        Copy Code
                      </button>
                      <div v-if="copyStatus" class="copy-status">{{ copyStatus }}</div>
                    </ul>
                    <div class="code">
                      <pre class="code-wrapper">
<code id="Others-Code" class="lang-js">import fs from 'fs';
import path from 'path';
import { create, IPFSHTTPClient } from 'ipfs-http-client';
import { ethers } from 'ethers';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { typesBundleForPolkadot } from '@crustio/type-definitions';
import { Keyring } from '@polkadot/keyring';

const crustChainEndpoint = 'wss://rpc.{{currentHostname}}'; // More endpoints: https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/endpoints/production.ts#L9
const ipfsW3GW = 'https://crustipfs.xyz'; // More web3 authed gateways: https://github.com/crustio/ipfsscan/blob/main/lib/constans.ts#L29
const crustSeeds = 'xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx'; // Create account(seeds): https://wiki.{{currentHostname}}/docs/en/crustAccount
const api = new ApiPromise({
    provider: new WsProvider(crustChainEndpoint),
    typesBundle: typesBundleForPolkadot,
});

main();

async function main() {
    // I. Upload file to IPFS
    // 1. Read file
    const filePath = 'sampleFile.txt';
    const fileContent = await fs.readFileSync(path.resolve(__dirname, filePath));

    // 2. [Local] Create IPFS instance
    const ipfsLocal = await create({ url: 'http://localhost:5001' });

    // 2. [Gateway] Create IPFS instance
    // Now support: ethereum-series, polkadot-series, solana, elrond, flow, near, ...
    // Let's take ethereum as example
    const pair = ethers.Wallet.createRandom();
    const sig = await pair.signMessage(pair.address);
    const authHeaderRaw = `eth-${pair.address}:${sig}`;
    const authHeader = Buffer.from(authHeaderRaw).toString('base64');
    const ipfsRemote = create({
        url: `${ipfsW3GW}/api/v0`,
        headers: {
            authorization: `Basic ${authHeader}`
        }
    });

    // 3. Add IPFS
    const rst = await addFile(ipfsRemote, fileContent); // Or use IPFS local
    console.log(rst);

    // II. Place storage order
    await placeStorageOrder(rst.cid, rst.size);
    // III. [OPTIONAL] Add prepaid
    // Learn what's prepard for: https://wiki.{{currentHostname}}/docs/en/DSM#3-file-order-assurance-settlement-and-discount
    const addedAmount = 100; // in pCRU, 1 pCRU = 10^-12 CRU
    await addPrepaid(rst.cid, addedAmount);

    // IV. Query storage status
    // Query forever here ...
    while (true) {
        const orderStatus: any = (await getOrderState(rst.cid)).toJSON();
        console.log('Replica count: ', orderStatus['reported_replica_count']); // Print the replica count
        await new Promise(f => setTimeout(f, 1500)); // Just wait 1.5s for next chain-query
    }
}

async function addFile(ipfs: IPFSHTTPClient, fileContent: any) {
    // 1. Add file to ipfs
    const cid = await ipfs.add(fileContent);

    // 2. Get file status from ipfs
    const fileStat = await ipfs.files.stat("/ipfs/" + cid.path);

    return {
        cid: cid.path,
        size: fileStat.cumulativeSize
    };
}

async function placeStorageOrder(fileCid: string, fileSize: number) {
    // 1. Construct place-storage-order tx
    const tips = 0;
    const memo = '';
    const tx = api.tx.market.placeStorageOrder(fileCid, fileSize, tips, memo);

    // 2. Load seeds(account)
    const kr = new Keyring({ type: 'sr25519' });
    const krp = kr.addFromUri(crustSeeds);

    // 3. Send transaction
    await api.isReadyOrError;
    return new Promise((resolve, reject) => {
        tx.signAndSend(krp, ({events = [], status}) => {
            console.log(`💸  Tx status: ${status.type}, nonce: ${tx.nonce}`);

            if (status.isInBlock) {
                events.forEach(({event: {method, section}}) => {
                    if (method === 'ExtrinsicSuccess') {
                        console.log(`✅  Place storage order success!`);
                        resolve(true);
                    }
                });
            } else {
                // Pass it
            }
        }).catch(e => {
            reject(e);
        })
    });
}

async function addPrepaid(fileCid: string, amount: number) {
    // 1. Construct add-prepaid tx
    const tx = api.tx.market.addPrepaid(fileCid, amount);

    // 2. Load seeds(account)
    const kr = new Keyring({ type: 'sr25519' });
    const krp = kr.addFromUri(crustSeeds);

    // 3. Send transaction
    await api.isReadyOrError;
    return new Promise((resolve, reject) => {
        tx.signAndSend(krp, ({events = [], status}) => {
            console.log(`💸  Tx status: ${status.type}, nonce: ${tx.nonce}`);

            if (status.isInBlock) {
                events.forEach(({event: {method, section}}) => {
                    if (method === 'ExtrinsicSuccess') {
                        console.log(`✅  Add prepaid success!`);
                        resolve(true);
                    }
                });
            } else {
                // Pass it
            }
        }).catch(e => {
            reject(e);
        })
    });
}

async function getOrderState(cid: string) {
    await api.isReadyOrError;
    return await api.query.market.filesV2(cid);
}
</code>
</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.min.css';
export default {
  name: 'products-tab',
  data() {
    return {
      currentHostname : window.location.hostname === 'localhost' ? 'crust.network' : window.location.hostname,
      openTab: 1,
      items1: [
        'Native IPFS integrations and toolkits for all web3 and web2 users',
        'Chain agnostic storage services for any use case scenario',
        'Leverage Crust solutions to enhance your IPFS experience',
      ],
      items2: [
        'Crust provides a native cross-chain communication pallet based on XCMP called xStorage',
        'Empowering builders via native storage services across the entire Substrate universe',
        'Store, share and retrieve data seamlessly across all Polkadot and Kusama Parachains',
      ],
      items3: [
        'Frictionless integration with all chains. platforms and applications built on top of Ethereum',
        'Temporary and permanent storage options for all developers and users',
        'Fully EVM compatible storage, hosting and retrieval services',
      ],
      items4: [
        'Crust Network offers advanced storage smart contract integrations tailored to diverse smart contract platforms',
        'Storage Smart Contracts allow users to seamlessly interact with Crust across a wide range of ecosystems',
      ],
      copyStatus: null,
      code1: `#[pallet::weight(1_000_000)]`,
      code2: ``,
    };
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
    copyCode(el) {
      // Get the code element
      const codeElement = document.querySelector(el);

      // Check if code element is found
      if (!codeElement) {
        this.copyStatus = 'Code not found.';
        return;
      }

      // Create a range and select the code content
      const range = document.createRange();
      range.selectNode(codeElement);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      try {
        // Attempt to copy the selected content to the clipboard
        document.execCommand('copy');

        // Set a temporary success message
        this.copyStatus = 'Code copied!';

        // Clear the message after a delay
        setTimeout(() => {
          this.copyStatus = null;
        }, 2000); // Adjust the delay as needed
      } catch (error) {
        // Handle copy error, if any
        console.error('Unable to copy code:', error);
        this.copyStatus = 'Error copying code.';
      } finally {
        // Clear the selection
        window.getSelection().removeAllRanges();
      }
    },
  },
};
onMounted(() => {
  Prism.highlightAll();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.code-wrapper {
  overflow-x: auto;
  overflow-y: scroll;
  padding: 20px;
  border-radius: 0px 0px 5px 5px;
  border: 1px solid #171718;
  background: #000;
  max-height: 429px;
}

/* custom scroll bar  */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 8px #171718 !important;
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background: #7a7a7a !important;
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  background: #7a7a7a !important;
}

@media (max-width: 992px) {
  .api_code_with_copy_code {
    width: 670px;
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .api_code_with_copy_code {
    width: 480px;
    max-width: 100%;
  }
}
@media (max-width: 576px) {
  .api_code_with_copy_code {
    width: 390px;
    max-width: 100%;
  }
}
@media (max-width: 480px) {
  .api_code_with_copy_code {
    width: 285px;
    max-width: 100%;
  }

  .ixeo__area .copycode_header {
    padding: 12px 15px;
  }

  .code-wrapper code {
    color: #fa8c16;
  }
}
</style>
