import Image from "next/image";

export type AssetType = {
  img_url: string;
  supply: string;
  mining: string;
  percent: number;
};

export default function Asset({ img_url, supply, mining, percent }: AssetType) {
  return (
    <>
      <div className="h-[325px] w-[276px] cursor-pointer bg-[#1E1E1E]">
        <Image src={img_url} width={276} height={192} alt="" />
        <div className="flex flex-col justify-start gap-1 p-2">
          <div className="flex items-center justify-between">
            <div>Supply</div>
            <div>{supply}</div>
          </div>
          <div className="flex items-center justify-between">
            <div>Mining:</div>
            <div>{mining}</div>
          </div>
        </div>
      </div>
    </>
  );
}
