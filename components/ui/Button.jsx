import Image from "next/image";

export default function Button() {
  return (
    <button className="max-md:hidden flex gap-2 items-center text-sm  border-solid border border-textWhite rounded-full my-14 transition duration-200 hover:bg-cardbgGray hover:border-cardbgGray ">
      <span className="py-5 pl-10 pr-8 text-[16px] justify-center  flex items-center text-md text-titleWhite">
        Check out all
        <Image
          className="ml-1"
          src={"/chevron-right-small.svg"}
          alt="avatar"
          height={23}
          width={23}
        />
      </span>
    </button>
  );
}
