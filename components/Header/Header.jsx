import { FaSearch, FaHeart, FaUser, FaShoppingBag } from "react-icons/fa";
import adidaslogo from "../../assets/images/adidas.png";
function Header() {
  return (
    <header>

      <div className="bg-black text-yellow-400 text-center py-2 text-[10px] sm:text-xs md:text-sm">
        NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE
      </div>

      <nav className="flex flex-wrap items-center justify-between px-4 md:px-8 lg:px-10 py-4 gap-4">

        <div className="flex-shrink-0">
          <img
            src={adidaslogo}
            alt="adidas logo"
            className="w-14 md:w-16 lg:w-20"
          />
        </div>

        <ul className=" flex flex-wrap justify-center gap-3 md:gap-5  lg:gap-8 text-xs md:text-sm lg:text-base font-medium ">
          <li className="cursor-pointer hover:underline">WOMEN</li>
          <li className="cursor-pointer hover:underline">MEN</li>
          <li className="cursor-pointer hover:underline">KIDS</li>
          <li className="cursor-pointer hover:underline">NEWS</li>
          <li className="cursor-pointer hover:underline">SPORTS</li>
          <li className="cursor-pointer hover:underline">ADIDAS WORLD</li>
        </ul>
        <div className=" flex items-center gap-3 md:gap-4 lg:gap-5 text-lg md:text-xl ">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
        </div>

      </nav>

    </header>
  );
}

export default Header;
