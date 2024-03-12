export type MinerType = {
  address: string;
  name: string;
  count: string;
  amount: string;
};

export default function Miner({ address, name, count, amount }: MinerType) {
  return (
    <>
      <div className="flex h-[47px] cursor-pointer items-center justify-between rounded-[5px] bg-[#333333] pl-2 pr-4">
        <div>{address}</div>
        <div>{name}</div>
        <div>{count}</div>
        <div>{amount}</div>
      </div>
    </>
  );
}
