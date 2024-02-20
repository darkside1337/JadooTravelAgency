import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import MaxWidthWrapper from "./MaxWidthWrapper";
import PlayStore from "@/assets/google-play.png";
import AppleStore from "@/assets/apple-store.png";
import FooterLogo from "@/assets/logo-footer.svg";
const Footer = () => {
  return (
    <section className="mt-28 ">
      <MaxWidthWrapper>
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-16">
          <div className="items-between flex flex-col justify-center gap-8 text-primary-text-light md:flex-row">
            <div>
              <img src={FooterLogo} alt="logo" className="mb-8" />
              <p>
                Book your trip in minute, get full <br /> Control for much
                longer
              </p>
            </div>
            <div>
              <h3 className="bold mb-8 text-[28px] text-black">Company</h3>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Mobile</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="bold mb-8 text-[28px] text-black">Contact</h3>
              <ul>
                <li>
                  <a href="#">Help/FAQ</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="bold mb-8 text-[28px] text-black">More</h3>
              <ul>
                <li>
                  <a href="#">Airline fees</a>
                </li>
                <li>
                  <a href="#">Airline</a>
                </li>
                <li>
                  <a href="#">Low Fare tips</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-8 flex justify-evenly  gap-8 ">
                <div className="transition-color group flex h-[40px] w-[40px] items-center justify-center rounded-full shadow-xl duration-300 hover:bg-[#3F5C9A] ">
                  <FaFacebookF
                    size={25}
                    fill="black"
                    className="group-hover:fill-white"
                  />
                </div>
                <div className="group flex h-[40px] w-[40px] items-center justify-center rounded-full from-[#833ab4] via-[#fd1d1d] to-[#fcb045] shadow-xl transition-colors duration-300 hover:bg-gradient-to-r ">
                  <FaInstagram
                    size={25}
                    fill="black"
                    className="group-hover:fill-white"
                  />
                </div>
                <div className="group flex h-[40px] w-[40px] items-center justify-center rounded-full transition-colors  duration-300 hover:bg-[#1DA1F2]">
                  <FaTwitter
                    size={25}
                    fill="black"
                    className="group-hover:fill-white"
                  />
                </div>
              </div>
              <p className="mb-8 text-center md:text-left">Discover our app</p>
              <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                <img src={PlayStore} alt="play store" />
                <img src={AppleStore} alt="apple store" />
              </div>
            </div>
          </div>
          <p className="mb-16">All rights reserved ©jadoo.com</p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Footer;
