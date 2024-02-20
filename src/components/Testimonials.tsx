import author1 from "@/assets/author.png";
import author2 from "@/assets/author2.png";
import author3 from "@/assets/author3.png";
import { useEffect, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { GoDot, GoDotFill } from "react-icons/go";

type testimonyType = {
  img: string;
  desc: string;
  name: string;
  location: string;
};

const testimonies: testimonyType[] = [
  {
    img: author1,
    desc: `"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."`,
    name: "Mike Taylor",
    location: "Stockholm, Sweden",
  },
  {
    img: author2,
    desc: "Jadoo is recognized as one of the finest travel agency in the world. When it came to planning a trip, I found them to be dependable.",
    name: "Thomas Wagon",
    location: "CEO of Red Button",
  },
  {
    img: author3,
    desc: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Kelly Willium",
    location: "Khulna, Bangladesh",
  },
];

const Card = ({ img, desc, name, location }: testimonyType) => {
  return (
    <div className="relative flex flex-col gap-4 rounded-xl px-8 py-4 shadow-xl">
      <p className="font-medium text-primary-text-light">{desc}</p>
      <p className="text-lg font-semibold text-primary-text-light">{name}</p>
      <p className="text-sm font-medium text-primary-text-light">{location}</p>
      <img
        src={img}
        alt={name}
        width={68}
        className="absolute left-[-34px] top-[-34px]"
      />
    </div>
  );
};

const Testimonials = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const handleNext = () =>
    setCurrIndex((prev) => (prev + 1) % testimonies.length);
  const handlePrevious = () =>
    setCurrIndex(
      (prev) => (prev - 1 + testimonies.length) % testimonies.length,
    );

  useEffect(() => {
    const int = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <section className="md:mt-22 mt-48">
      <MaxWidthWrapper>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          <div className="flex flex-col items-center md:w-[40%] md:items-start">
            <p className="mb-6 font-volkhov text-lg font-semibold">
              Testimonials
            </p>
            <h2 className="mb-8 text-center text-5xl font-bold md:text-left">
              What People Say About Us.
            </h2>
            <div className="flex  gap-4 ">
              <button onClick={() => setCurrIndex(0)}>
                {currIndex === 0 ? (
                  <GoDotFill size={25} />
                ) : (
                  <GoDot size={25} />
                )}
              </button>
              <button onClick={() => setCurrIndex(1)}>
                {currIndex === 1 ? (
                  <GoDotFill size={25} />
                ) : (
                  <GoDot size={25} />
                )}
              </button>
              <button onClick={() => setCurrIndex(2)}>
                {currIndex === 2 ? (
                  <GoDotFill size={25} />
                ) : (
                  <GoDot size={25} />
                )}
              </button>
            </div>
          </div>

          <div className="flex max-w-[500px] flex-col items-center justify-center gap-8  p-8 md:w-[60%] md:flex-row">
            <Card
              img={testimonies[currIndex].img}
              desc={testimonies[currIndex].desc}
              name={testimonies[currIndex].name}
              location={testimonies[currIndex].location}
            />
            <div className="flex flex-col gap-8 md:flex-row">
              <button onClick={handleNext}>
                <IoChevronUp size={25} />
              </button>
              <button onClick={handlePrevious}>
                <IoChevronDown size={25} />
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
