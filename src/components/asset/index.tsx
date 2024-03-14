import { useState, useEffect } from "react";
import Image from "next/image";

export type AssetType = {
  img_url: string;
  supply: string;
  mining: string;
  percent: number;
};

export default function Asset({ img_url, supply, mining, percent }: AssetType) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <>
      <div
        className={`h-[325px] w-[276px] transform cursor-pointer bg-[#1E1E1E] transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}
      >
        <Image src={img_url} width={276} height={192} alt="" />
        <div className="flex flex-col items-center justify-start gap-2 p-2">
          <div className="flex w-full items-center justify-between">
            <div>Supply</div>
            <div>{supply}</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>Mining:</div>
            <div>{mining}</div>
          </div>
          <div>
            <div className="mt-2 h-7 w-[248px] rounded-[14px] bg-[#333333]">
              <div
                className={`z-10 h-7 min-w-10 rounded-[14px] bg-[#CA540F] text-center text-[16px] leading-7`}
                style={{ width: `${((248 * percent) / 100).toFixed(0)}px` }}
              >
                {percent}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
