import MaxWidthWrapper from "./MaxWidthWrapper";
import { IoIosSend } from "react-icons/io";

import Square from "@/assets/selection-1.png";
import Swimming from "@/assets/water-sport.png";
import Taxi from "@/assets/taxi.png";
import BookingImg from "@/assets/booking-img.jpg";
import BookingProgress from "@/assets/booking-progress.png";

import BookingOngoing from "@/assets/booking-ongoing.png";
import { BsBuilding } from "react-icons/bs";
import { RiLeafFill } from "react-icons/ri";
import { CiMap } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";

const Booking = () => {
  return (
    <section className="mt-28  md:mt-44" id="booking">
      <MaxWidthWrapper>
        <div className="mb-8 flex flex-col md:flex-row">
          <div className="px-4 py-8 text-center md:w-[50%] md:text-left">
            <div>
              <p className="mb-[12px] font-poppins font-semibold">
                Easy and Fast
              </p>
              <h2 className="font-volkhov text-5xl font-bold">
                Book your next trip in 3 easy steps
              </h2>
            </div>
            {/* ---------------------------------- Card ---------------------------------- */}
            <div className="mt-8 flex flex-col items-center gap-8 md:flex-row">
              <div className="flex min-h-[48px] min-w-[48px] items-center justify-center gap-16 rounded-2xl bg-primary-lemon">
                <img src={Square} alt="square" />
              </div>
              <div className="text-primary-text-light">
                <h3 className="font-poppins font-bold">Choose Destination</h3>
                <p className="text-balance font-poppins ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="mt-8 flex  flex-col items-center gap-8 md:flex-row">
              <div className="flex min-h-[48px] min-w-[48px] items-center justify-center gap-16 rounded-2xl bg-primary-orange">
                <img src={Swimming} alt="square" />
              </div>
              <div className="text-primary-text-light">
                <h3 className="font-poppins font-bold">Make Payment</h3>
                <p className="text-balance font-poppins ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="mt-8 flex  flex-col items-center gap-8 md:flex-row">
              <div className="flex min-h-[48px] min-w-[48px] items-center justify-center gap-16 rounded-2xl bg-[#006380]">
                <img src={Taxi} alt="square" />
              </div>
              <div className="text-primary-text-light">
                <h3 className="font-poppins font-bold">
                  Reach Airport on Selected Date
                </h3>
                <p className="text-balance font-poppins ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
          {/* ---------------------------------- right ---------------------------------- */}
          <div className="flex items-center  justify-center md:w-[50%]">
            <div className="relative flex min-h-[400px] max-w-[370px] flex-col gap-8 rounded-3xl p-8 shadow-2xl">
              <img
                src={BookingImg}
                alt="trip picture"
                className="rounded-3xl"
              />
              <div className="flex flex-col gap-2">
                <p>Trip To Greece</p> <p>14-29 June | by Robbin Joseph</p>
                <div className="flex gap-4">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#EEEEEE]">
                    <RiLeafFill size={20} />
                  </div>
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#EEEEEE]">
                    <CiMap size={25} />
                  </div>
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#EEEEEE]">
                    <IoIosSend size={25} />
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className=" flex items-center justify-center gap-4">
                    <BsBuilding size={25} />
                    <p>24 people going</p>
                  </div>
                  <FiHeart
                    color="#4152CA"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.fill = "#4152CA")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.fill = "none")}
                    size={25}
                  />
                </div>
              </div>
              {/* --------------------------------- Gadget --------------------------------- */}
              <div className="bold absolute -bottom-36 z-20 flex max-w-[265px] items-center justify-center gap-8 rounded-3xl bg-white p-4 font-medium shadow-xl md:-right-[20%] md:bottom-20 lg:-right-[30%]">
                <img src={BookingOngoing} className="rounded-full" />
                <div className="max-h-[130px]">
                  <p className="mb-1 text-sm text-primary-text-light">
                    Ongoing
                  </p>
                  <p className="mb-1 text-lg font-bold">Trip to rome</p>
                  <p className="mb-1 font-bold">
                    <span className="text-[#8A79DF]">40% </span> completed
                  </p>
                  <img src={BookingProgress} alt="progress bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Booking;
