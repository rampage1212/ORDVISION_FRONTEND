import Image from "next/image";
import Asset, { AssetType } from "~/components/asset";
import Header from "~/components/header";
import Miner, { MinerType } from "~/components/miner";
import Link from "next/link";

const miners = [
  {
    image: "/assets/images/miner-icon.svg",
    address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
    name: "Clucker",
    count: "1",
    amount: "10,000",
  },
  {
    image: "/assets/images/miner-icon.svg",
    address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
    name: "Clucker",
    count: "1",
    amount: "10,000",
  },
  {
    image: "/assets/images/miner-icon.svg",
    address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
    name: "Clucker",
    count: "1",
    amount: "10,000",
  },
  {
    image: "/assets/images/miner-icon.svg",
    address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
    name: "Clucker",
    count: "1",
    amount: "10,000",
  },
  {
    image: "/assets/images/miner-icon.svg",
    address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
    name: "Clucker",
    count: "1",
    amount: "10,000",
  },
];

const assets = [
  {
    img_url: "/assets/images/asset-image-1.svg",
    supply: "10000",
    mining: "100,000,000",
    percent: 50,
  },
  {
    img_url: "/assets/images/asset-image-2.svg",
    supply: "10000",
    mining: "100,000,000",
    percent: 30,
  },
  {
    img_url: "/assets/images/asset-image-3.svg",
    supply: "10000",
    mining: "200,000,000",
    percent: 35,
  },
  {
    img_url: "/assets/images/asset-image-4.svg",
    supply: "10000",
    mining: "350,000",
    percent: 70,
  },
  {
    img_url: "/assets/images/asset-image-5.svg",
    supply: "10000",
    mining: "300,000",
    percent: 20,
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[url('/assets/images/background-1.svg')] bg-cover font-poppins">
        <Header />
        <div className="flex w-full justify-center border-t-[0.4px] border-solid border-white border-opacity-70 font-poppins text-white">
          <div className="flex w-[1440px] flex-col items-center justify-start">
            <div className="mt-14 flex w-full items-center justify-between">
              <Link href="/">
                <button className="h-10 w-[108px] rounded-[20px] bg-[#CA540F]">
                  Home
                </button>
              </Link>
              <div className="text-[40px]">Rune Miner</div>
              <div className="w-[108px]"></div>
            </div>
            <div className="mt-4 text-[18px]">
              For Mother Cluckers, By Mother Cluckers
            </div>
            <div className="mt-10 flex w-full items-center justify-between">
              <div className="flex h-[380px] w-[705px] justify-between rounded-xl bg-[#1E1E1E] p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="h-[246px] w-[246px] rounded-full bg-[#333333]"></div>
                </div>
                <div className="w-[370px]">
                  <div className="flex justify-end text-[32px]">
                    Token Stats
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="flex justify-between text-[20px]">
                      <div>Total Mined:</div>
                      <div>1320</div>
                    </div>
                    <div className="flex justify-between text-[20px]">
                      <div>Total Supply:</div>
                      <div>210,000,000</div>
                    </div>
                    <div className="flex justify-between text-[20px]">
                      <div>Holders:</div>
                      <div>103,650,000 (50%)</div>
                    </div>
                    <div className="flex justify-between text-[20px]">
                      <div>Partner:</div>
                      <div>76,350,000 (36%)</div>
                    </div>
                    <div className="flex justify-between text-[20px]">
                      <div>Team:</div>
                      <div>30,000,000 (14%)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[380px] w-[705px] flex-col justify-start gap-2 rounded-xl bg-[#1E1E1E] p-8">
                <div className="flex justify-end text-[32px]">Top Miners</div>
                <div className="flex flex-col justify-start gap-2">
                  {miners.map((miner: MinerType) => {
                    return (
                      <>
                        <Miner
                          image={miner.image}
                          address={miner.address}
                          name={miner.name}
                          count={miner.count}
                          amount={miner.amount}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-14 text-[40px]">Your Assets</div>
            <div className="mt-4 flex w-full items-center justify-between">
              {assets.map((asset: AssetType) => {
                return (
                  <>
                    <Asset
                      img_url={asset.img_url}
                      supply={asset.supply}
                      mining={asset.mining}
                      percent={asset.percent}
                    />
                  </>
                );
              })}
            </div>
            <div className="m-14 flex w-full items-center justify-end">
              <div className="flex justify-between gap-2">
                <Image
                  src="/assets/images/icon-internet.svg"
                  width={30}
                  height={30}
                  alt="internet"
                  className="cursor-pointer"
                />
                <Image
                  src="/assets/images/icon-x.svg"
                  width={30}
                  height={30}
                  alt="x"
                  className="cursor-pointer"
                />
                <Image
                  src="/assets/images/icon-discord.svg"
                  width={30}
                  height={30}
                  alt="discord"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
