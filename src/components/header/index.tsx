import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="h-36 w-full">
        <div className="pl-60 pt-10">
          <Image
            src="/assets/images/mark.svg"
            width={238}
            height={84}
            alt="Ordivision Mark"
          />
        </div>
      </div>
    </>
  );
}
