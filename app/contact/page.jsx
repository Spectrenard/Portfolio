import NavNoAnim from "@/components/navnoanim";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="p-8">
      <NavNoAnim />
      <div className="flex flex-row max-sm:mt-24 mt-10 md:p-24 xl:p-48">
        <div className="container">
          <h1 className="max-w-screen-md md:max-w-screen-md text-titleGray flex flex-wrap gap-x-3  text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-clash font-medium mb-10">
            <div className="overflow-hidden ">
              <span className="flex animate-slideUp1 translate-y-0 rotate-0 scale-100 opacity-100 text-titleWhite">
                Lets
              </span>
            </div>
            <div className="overflow-hidden ">
              <span className="flex animate-slideUp2 translate-y-0 rotate-0 scale-100 opacity-100 text-titleWhite">
                create
              </span>
            </div>
            <div className="overflow-hidden ">
              <span className="flex animate-slideUp3 translate-y-0 rotate-0 scale-100 opacity-100">
                something
              </span>
            </div>
            <div className="overflow-hidden ">
              <span className="flex animate-slideUp4 translate-y-0 rotate-0 scale-100 opacity-100">
                remarkable
              </span>
            </div>
            <div className="overflow-hidden ">
              <span className="flex animate-slideUp5 translate-y-0 rotate-0 scale-100 opacity-100">
                together.
              </span>
            </div>
          </h1>
          <div className=" mx-auto  pt-10 animate-appears2 opacity-0">
            <form
              action="https://formspree.io/f/mrgnddpw"
              method="POST"
              className="flex flex-col max-sm:mb-11 transform-none rotate-0 scale-100 opacity-100"
            >
              <label className="mb-2 text-titleWhite">
                Your Name*
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Write your name..."
                  className="bg-transparent w-full pt-6  text-sm text-textWhite outline-none"
                  required
                />
              </label>
              <div className=" border-t border-textGray border-solid w-full max-h-[0.1px] mt-2 mb-10">
                {" "}
              </div>
              <label className="mb-2 text-titleWhite">
                Your E-mail*
                <input
                  type="email"
                  name="_replyto"
                  autoComplete="off"
                  placeholder="Write your E-mail..."
                  className="bg-transparent w-full py-6  text-sm text-textWhite outline-none"
                  required
                />
              </label>
              <div className=" border-t border-textGray border-solid w-full max-h-[0.1px] mt-2 mb-10">
                {" "}
              </div>
              <label className="mb-2 text-titleWhite h-44">
                Your Message*
                <textarea
                  name="message"
                  autoComplete="off"
                  placeholder="Write your Message..."
                  className="bg-transparent w-full h-44 py-6  text-sm text-textWhite outline-none resize-none"
                  required
                />
              </label>
              <div className=" border-t border-textGray border-solid w-full max-h-[0.1px] mt-2 mb-10">
                {" "}
              </div>
              <div className="max-w-[200px]">
                <button
                  type="submit"
                  className="flex gap-3 px-5 py-3 text-black rounded-full bg-textWhite transition duration-200 items-center max-md:max-w-[166px] hover:bg-titleWhite"
                >
                  <Link className="max-sm:text-xs" href="/contact">
                    Submit form
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
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
