import { useMediaQuery } from "@uidotdev/usehooks";
import Logo from "@/assets/logo.svg";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState } from "react";

type NavbarProps = {
  isTopOfThePage: boolean;
};
type NavType = {
  id: number;
  text: string;
};

const navItems: NavType[] = [
  { id: 1, text: "Destinations" },
  { id: 2, text: "Hotels" },
  { id: 3, text: "Flights" },
  { id: 4, text: "Bookings" },
  { id: 5, text: "Login" },
];

const Navbar = ({ isTopOfThePage }: NavbarProps) => {
  const isTabletOrMobile = useMediaQuery("(max-width: 1023px)");
  const [isOpen, setIsOpen] = useState(false);
  const genericNavStyles = `absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-[#F0F4F9] transition-transform duration-300 ease-out origin-top `;
  const toggleMenu = () => setIsOpen(!isOpen);

  /* -------------------------------- component ------------------------------- */
  return (
    <header
      className={`sticky left-0 top-0 z-50 w-full ${isTopOfThePage ? "" : "bg-white/30 shadow-sm backdrop-blur-sm"}`}
    >
      <MaxWidthWrapper>
        <div className={`flex items-center justify-between px-8 py-6 `}>
          <img src={Logo} alt="logo" className="mx-2 md:-translate-y-[6px]" />
          {isTabletOrMobile ? (
            <button onClick={toggleMenu} className="z-10">
              {isOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
            </button>
          ) : (
            <ul className="justify-even flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.id} className="group relative hover:scale-x-100">
                  <a href="#" className="block">
                    {item.text}
                  </a>
                  <span className="absolute left-0 top-0 h-[2px] w-full origin-left translate-y-6 scale-x-0  rounded-full bg-blue-600 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </li>
              ))}
              <li>
                <button
                  className="rounded-md border border-primary-dark-blue bg-transparent px-4 
                py-2 transition-colors duration-300 hover:bg-primary-dark-blue hover:text-white"
                >
                  Sign Up
                </button>
              </li>
              <li>
                <select
                  defaultValue="EN"
                  id="countries"
                  className="block w-full rounded-lg border-none  bg-transparent p-2.5 text-sm  "
                >
                  <option value="EN">EN</option>
                  <option value="FR">FR</option>
                  <option value="BN">BN</option>
                </select>
              </li>
            </ul>
          )}

          {/* ------------------------------- MOBILE MENU ------------------------------ */}

          <div
            className={`${genericNavStyles} ${isOpen ? "mouse-events-auto scale-y-100" : "mouse-events-none scale-y-0"} `}
          >
            <ul className="justify-even flex flex-col items-center gap-10">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href="#">{item.text}</a>
                </li>
              ))}
              <li>
                <button className="rounded-md border border-primary-dark-blue bg-transparent px-4 py-2 transition-colors duration-300 hover:bg-primary-dark-blue hover:text-white">
                  Sign Up
                </button>
              </li>
              <li>
                <select
                  defaultValue="EN"
                  id="countries"
                  className="block w-full rounded-lg border-none  bg-transparent p-2.5 text-sm  "
                >
                  <option value="EN">EN</option>
                  <option value="FR">FR</option>
                  <option value="BN">BN</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
