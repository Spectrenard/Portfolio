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
                src={"/images/uxdesign.svg"}
                alt="avatar"
                height={50}
                width={70}
              />
              <h1 className="text-2xl font-medium text-titleWhite ">
                UX Design
              </h1>
              <p className="text-textGray">
                I create lo-fi mock-ups, conduct internal workshops, analyze
                data, create personas, and propose A/B test hypotheses to
                improve sales effectiveness.
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
              <h1 className="text-2xl font-medium text-titleWhite">
                UX Design
              </h1>
              <p className="text-textGray">
                I create lo-fi mock-ups, conduct internal workshops, analyze
                data, create personas, and propose A/B test hypotheses to
                improve sales effectiveness.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="px-8 py-10 w-full bg-cardbgGray rounded-3xl">
            <div className="flex flex-col gap-8">
              <Image
                className="rounded-2xl p-4 bg-white"
                src={"/images/uxdesign.svg"}
                alt="avatar"
                height={50}
                width={70}
              />
              <h1 className="text-2xl font-medium text-titleWhite">
                UX Design
              </h1>
              <p className="text-textGray">
                I create lo-fi mock-ups, conduct internal workshops, analyze
                data, create personas, and propose A/B test hypotheses to
                improve sales effectiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
