import Image from "next/image";

export default function Services() {
  return (
    <div className="flex-col flex lg:flex-row gap-8 my-24">
      <p className="text-titleGray text-3xl lg:text-4xl  font-medium font-clash max-w-[600px] lg:max-w-[450px]">
        What i can do to{" "}
        <span className=" text-titleWhite text-3xl  lg:text-4xl pr-1   font-clash">
          consistenly and effectively
        </span>
        support your business?
      </p>
      {/* ********* CARD PART ************ */}
      <div className="w-full">
        <div className="lg:flex gap-x-8">
          <div className="px-8 py-10 w-full bg-cardbgGray rounded-3xl max-lg:mb-10">
            <div className="flex flex-col gap-8 ">
              <Image
                className="rounded-2xl p-4 bg-white"
                src={"/images/Signature.svg"}
                alt="avatar"
                height={50}
                width={70}
              />
              <h1 className="text-2xl font-medium text-titleWhite ">Design</h1>
              <p className="text-textGray">
                Crafting intuitive and visually stunning interfaces that delight
                users and elevate your brand. From wireframing to high-fidelity
                prototypes, I create user-centered designs that drive engagement
                and conversion.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="px-8 py-10 w-full bg-cardbgGray rounded-3xl max-lg:mb-10">
            <div className="flex flex-col gap-8">
              <Image
                className="rounded-2xl p-4 bg-white"
                src={"/images/uxdesign.svg"}
                alt="avatar"
                height={50}
                width={70}
              />
              <h1 className="text-2xl font-medium text-titleWhite">SEO</h1>
              <p className="text-textGray">
                Improve your online visibility and drive more traffic to your
                website. I‘ll optimize your website‘s structure, content, and
                meta tags to increase search engine rankings, boost organic
                traffic, and enhance your online presence.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="px-8 py-10 w-full bg-cardbgGray rounded-3xl">
            <div className="flex flex-col gap-8">
              <Image
                className="rounded-2xl p-4 bg-white"
                src={"/images/developicon.svg"}
                alt="avatar"
                height={50}
                width={70}
              />
              <h1 className="text-2xl font-medium text-titleWhite">
                Development
              </h1>
              <p className="text-textGray">
                Bringing your vision to life with robust, scalable, and
                maintainable code that meets your business needs. I use the
                latest technologies to build fast, secure, and reliable
                solutions that drive results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
