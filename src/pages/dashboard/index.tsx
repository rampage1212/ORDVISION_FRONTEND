import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "~/components/header";

export default function Dashboard() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-[url('/assets/images/background-1.svg')] bg-cover font-poppins">
        <Header />
        <div
          className={`absolute top-[261px] flex w-full flex-col items-center justify-start ${startAnimation ? "animate-slide-up" : ""}`}
        >
          <div className="text-[40px] text-white">
            Mother Clucking Mining Checker
          </div>
          <div className="mt-8 text-[32px] text-white">
            Enter your eligible address
          </div>
          <input
            className="mt-4 h-[89px] w-[770px] rounded-full bg-white	 px-10 text-2xl text-[#1E1E1E] placeholder-[#1E1E1E] outline-none"
            placeholder="Enter ordinals address"
          ></input>
        </div>
        <div className="absolute bottom-28 flex w-[1440px] items-center justify-end">
          <div className="flex justify-between gap-2">
            <Image
              src="/assets/images/icon-internet.svg"
              width={30}
              height={30}
              alt="internet"
              className="transform cursor-pointer transition duration-300 ease-in-out hover:scale-125"
            />
            <Image
              src="/assets/images/icon-x.svg"
              width={30}
              height={30}
              alt="x"
              className="transform cursor-pointer transition duration-300 ease-in-out hover:scale-125"
            />
            <Image
              src="/assets/images/icon-discord.svg"
              width={30}
              height={30}
              alt="discord"
              className="transform cursor-pointer transition duration-300 ease-in-out hover:scale-125"
            />
          </div>
        </div>
      </div>
    </>
  );
}
