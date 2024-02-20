import MaxWidthWrapper from "./MaxWidthWrapper";
import DestinationRome from "@/assets/dest1.jpg";
import DestinationLondon from "@/assets/dest2.jpg";
import DestinationEurope from "@/assets/dest3.jpg";
import { IoIosSend } from "react-icons/io";

type DestinationType = {
  id?: number;
  image: string;
  location: string;
  price: string;
  duration: string;
};

const destinationsArr: DestinationType[] = [
  {
    id: 55,
    image: DestinationRome,
    location: "Rome, Italy",
    price: "$5,42k",
    duration: "10 Days Trip",
  },
  {
    id: 65,
    image: DestinationLondon,
    location: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    id: 85,
    image: DestinationEurope,
    location: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
];

const DestinationCard = ({
  image,
  location,
  price,
  duration,
}: DestinationType) => {
  return (
    <div
      className={`group relative z-10 flex max-w-[350px] cursor-pointer flex-col gap-4 rounded-3xl shadow-xl`}
    >
      <img src={image} alt={location} className="rounded-t-3xl" />
      <div className="px-4 py-4 font-medium text-primary-text-light">
        <div className="mb-[12px] flex justify-between">
          <p className="group-hover:text-primary-lemon">{location}</p>
          <p>{price}</p>
        </div>
        <div className="flex gap-4">
          <IoIosSend size={25} fill="#000" /> {duration}
        </div>
      </div>
      {/*element 
	top: 20%;
	left: 87%;
	z-index: -1;
*/}
      {location === "Full Europe" && (
        <div className="absolute left-[75%] top-[20%] -z-10 block h-[254px] w-[98px] cursor-default bg-destinations-spring md:left-[87%]" />
      )}
    </div>
  );
};

const Destinations = () => {
  return (
    <section className="mt-20 ">
      <MaxWidthWrapper>
        <div className="mb-14 text-center">
          <p className="mb-[12px] font-poppins font-semibold">Top Selling</p>
          <h2 className="font-volkhov text-5xl font-bold">Top Destinations</h2>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-3">
          {destinationsArr.map((d) => (
            <DestinationCard
              key={d.id}
              image={d.image}
              location={d.location}
              duration={d.duration}
              price={d.price}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Destinations;
