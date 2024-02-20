import MaxWidthWrapper from "./MaxWidthWrapper";
import HeroImage from "@/assets/hero-img.png";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="mt-4 px-4">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row-reverse md:text-start">
          <img
            src={HeroImage}
            alt="hero image"
            className="max-w-[95%] md:max-w-[45%]"
            draggable="false"
          />
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-primary-orange">
              Best Destinations around the world
            </h4>
            <h1 className="font-volkhov text-6xl font-bold md:text-main-hero">
              Travel,
              <span className="bg-hero-splash bg-[10%_83%] bg-no-repeat">
                enjoy{" "}
              </span>{" "}
              and live a new and full life
            </h1>
            <p className="text-base text-primary-text-light">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the heart and the soul.
            </p>
            <div className="flex flex-col gap-8 md:flex-row md:justify-start ">
              <button className="mx-auto max-w-fit rounded-[10px] bg-primary-lemon px-[28px] py-[1.125rem] text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#e18400] md:m-0">
                Find out more
              </button>
              <button className="mx-auto flex max-w-fit  items-center justify-center gap-4 md:m-0 ">
                <span className="h-[52px] rounded-full bg-primary-orange p-4 text-center shadow-lg">
                  <FaPlay size={20} fill="#fff" />
                </span>
                Play Demo
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
