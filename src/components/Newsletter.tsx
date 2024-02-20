import { IoMailOutline } from "react-icons/io5";
import MaxWidthWrapper from "./MaxWidthWrapper";
import toprightdeco from "@/assets/send-icon.png";
import toprightspring from "@/assets/top-right-deco-edited.png";
import bottomlefttspring from "@/assets/bottom-right-deco-edited.png";

const Newsletter = () => {
  return (
    <section className="mt-28  ">
      <MaxWidthWrapper>
        <div className=" relative flex min-h-[408px] flex-col justify-center gap-8 rounded-b-[20px] rounded-tl-[129px] rounded-tr-[20px] bg-[#F9F6FD] px-8 py-16 text-center md:px-20 md:py-8">
          <h3 className=" font-poppins text-[33px] font-semibold leading-[54px] text-[#5E6282]">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h3>
          {/* ---------------------------------- input --------------------------------- */}
          <div className="flex w-full flex-col  items-center gap-6 md:flex-row md:justify-center">
            <div className="relative">
              <div className="absolute left-[24px] top-[50%] translate-y-[-50%]">
                <IoMailOutline size={25} />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="z-10 max-w-[320px] rounded-xl  bg-white px-16 py-6 text-primary-dark-blue shadow-xl placeholder:text-sm  md:max-w-[320px] lg:max-w-[420px]"
              />
            </div>
            <button className="w-fit rounded-xl bg-[#FF946D] px-8 py-5 font-open_sans text-lg font-semibold text-white hover:bg-[#FF5E24]">
              Subscribe
            </button>
          </div>
          <div className="absolute right-[0px] top-[-30px] h-[70px] w-[70px] md:right-[-35px]">
            <img draggable={false} src={toprightdeco} />
          </div>
          <div className="absolute right-0 top-0 h-[352px]  w-[205px]">
            <img draggable={false} src={toprightspring} />
          </div>
          <div className="absolute bottom-0 left-0 h-[280px] w-[380px]">
            <img draggable={false} src={bottomlefttspring} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Newsletter;
