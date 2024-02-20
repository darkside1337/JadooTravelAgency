import sponsor1 from "@/assets/sponsors-1.png";
import sponsor2 from "@/assets/sponsors-2.png";
import sponsor3 from "@/assets/sponsors-3.png";
import sponsor4 from "@/assets/sponsors-4.png";
import sponsor5 from "@/assets/sponsors-5.png";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Sponsors = () => {
  return (
    <section className="mt-32">
      <MaxWidthWrapper>
        <div className="grid min-h-52 w-full grid-cols-1 flex-wrap place-items-center gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="hover:shadow-lg">
            <img src={sponsor1} alt="sponsor" className="" />
          </div>
          <div className="hover:shadow-lg">
            <img src={sponsor2} alt="sponsor" />
          </div>
          <div className="hover:shadow-lg">
            <img src={sponsor3} alt="sponsor" />
          </div>
          <div className="hover:shadow-lg">
            <img src={sponsor4} alt="sponsor" />
          </div>
          <div className="hover:shadow-lg">
            <img src={sponsor5} alt="sponsor" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Sponsors;
