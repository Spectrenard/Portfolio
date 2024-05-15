import Header from "../components/header";
import works from "../public/data/works.json";
import Image from "next/image";
import Link from "next/link";
import Work from "../components/work";
import Button from "../components/ui/Button";
import Services from "../components/services";
import Footer from "../components/footer";

export default function Home() {
  const featuredWorks = works.filter((work) => work.homepage);
  return (
    <div>
      <Header />

      <div className="p-4 lg:p-8 md:p-6 font-brico w-full ">
        <div className="flex justify-between items-center">
          <h1 className="max-w-screen-md md:max-w-screen-sm text-textGray flex flex-wrap gap-x-4 text-3xl md:text-5xl font-clash my-14">
            <div className="overflow-hidden animate-appears7 opacity-0">
              <span className="flex animate-fadeInText3 transform-none rotate-0 scale-100 opacity-100">
                Latest
              </span>
            </div>
            <div className="overflow-hidden animate-appears7 opacity-0">
              <span className="flex animate-fadeInText3 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
                Projects
              </span>
            </div>
            <Link href="/my-works">
              <Image
                className="ml-1  hover:cursor-pointer md:hidden "
                src={"/chevron-right-small.svg"}
                alt="avatar"
                height={33}
                width={33}
              />
            </Link>
          </h1>
          <Link href="/my-works">
            <Button />
          </Link>
        </div>
        <Work />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
