import Link from "next/link";
import Image from "next/image";
export default function ButtonForm() {
  return (
    <div className="overflow-hidden">
      <button className="flex gap-3 px-5 py-3 text-black rounded-full bg-textWhite transition duration-200 items-center max-md:max-w-[166px] hover:bg-titleWhite animate-slideSlow1 ">
        <Link className="max-sm:text-xs" href="/contact">
          Write a message
        </Link>
        <Image
          className="max-sm:w-4"
          src={"/images/send-plane.svg"}
          height={23}
          width={23}
          alt="sendicon"
        />
      </button>
    </div>
  );
}
