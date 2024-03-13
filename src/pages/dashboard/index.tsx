import Image from "next/image";
import Header from "~/components/header";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-[url('/assets/images/background-1.svg')] bg-cover font-poppins">
        <Header />
        <div className="absolute top-[261px] flex w-full flex-col items-center justify-start">
          <div className="text-4xl text-white">Enter your eligible address</div>
          <input
            className="mt-16 h-[89px] w-[770px] rounded-full bg-white	 px-10 text-2xl text-[#1E1E1E] placeholder-[#1E1E1E] outline-none"
            placeholder="Enter ordinals address"
          ></input>
          <div className="mt-96 flex w-[1440px] items-center justify-end">
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
    </>
  );
}
