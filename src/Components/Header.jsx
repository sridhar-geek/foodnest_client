import { BsCart3, BsSearch } from "react-icons/bs";

import Logo from "../../public/logo.webp";
import MenuItems from "./MenuItems";
const Header = () => {
  return (
    <div className="shadow-gray-600/30 shadow-sm p-4">
      <div className="flex justify-between px-4">
        {/* right box start (logo and input) */}
        <div className="flex flex-col sm:flex-row  gap-4">
          <button>
            <img src={Logo} alt="logo" className="h-10" />
          </button>
          <div className="relative">
            <input
              type="text"
              name="favorite food"
              placeholder="Search your favorite food here"
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main-800"
            />
            <BsSearch className="icon w-5 h-4 absolute top-1/3 left-3 " />
          </div>
        </div>
        {/* right box end */}
        {/* left box start (navigation links and cart) */}
        <div className="flex flex-col gap-2 items-end">
          <div className="hidden md:flex justify-center gap-3">
            <button>Quick Links</button>
            <button>Language</button>
            <button>My Account</button>
          </div>
          <div className="flex gap-3">
            <button className="icon text-2xl md:text-xl md:mr-5">
              <BsCart3 />{" "}
            </button>
            {/* Navigation on mobile screens */}
            <div className="md:hidden">
              <MenuItems />
            </div>
          </div>
        </div>

        {/* left box end */}
      </div>
    </div>
  );
};

export default Header;
