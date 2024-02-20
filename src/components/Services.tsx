import Service1 from "@/assets/icon1.png";
import Service2 from "@/assets/icon2.png";
import Service3 from "@/assets/icon3.png";
import Service4 from "@/assets/icon4.png";
import MaxWidthWrapper from "./MaxWidthWrapper";

type ServiceType = {
  img: string;
  service: string;
  desc: string;
  id?: number;
};

const servicesArr: ServiceType[] = [
  {
    id: 1,
    img: Service1,
    service: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    id: 2,
    img: Service2,
    service: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    id: 3,
    img: Service3,
    service: "Local Events",
    desc: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
  },
  {
    id: 4,
    img: Service4,
    service: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
  },
];

const ServiceCard = ({ img, service, desc }: ServiceType) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center rounded-[36px] bg-white px-4 py-9 text-center before:absolute before:-z-10 before:h-[100px] before:w-[100px] before:rounded-bl-[10px] before:rounded-tl-[30px] before:bg-primary-orange  before:transition-transform before:duration-300 before:ease-out before:content-[''] hover:shadow-lg md:hover:before:-translate-x-32 md:hover:before:translate-y-32">
      <img src={img} alt={service} />
      <h5 className="text-lg font-semibold">{service}</h5>
      <p className="text-base text-primary-text-light">{desc}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="mt-20">
      <MaxWidthWrapper>
        <div className="bg-services-deco flex flex-col gap-16 bg-[100%_0%] bg-no-repeat">
          <div className="text-center">
            <p className="mb-[12px] font-poppins font-semibold">CATEGORY</p>
            <h2 className="font-volkhov text-5xl font-bold">
              We Offer Best Services
            </h2>
          </div>
          <div className="grid grid-cols-1 place-items-center justify-center gap-x-14 gap-y-8 md:grid-cols-2 lg:grid-cols-4 ">
            {servicesArr.map((s) => (
              <ServiceCard
                key={s.id}
                img={s.img}
                service={s.service}
                desc={s.desc}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
