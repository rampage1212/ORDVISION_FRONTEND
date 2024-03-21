import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "~/components/header";

export default function Dashboard() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [address, setAddress] = useState<string>("");
  const router = useRouter();

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === "Enter") {
      // Call your function to handle the Enter key press here
      handleEnterKeyPress();
    }
  };

  const handleEnterKeyPress = (): void => {
    // Your logic to handle the Enter key press goes here
    console.log("Enter key pressed!", address);
    // Navigate to another page with address as parameter
    router.push(`/home?address=${address}`);
  };

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
            onChange={(e) => setAddress(e.target.value)}
            onKeyPress={handleKeyPress}
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
