import { FaSearch, FaHeart, FaUser, FaShoppingBag } from "react-icons/fa";
import adidaslogo from "../../assets/images/adidas.png";
function Header() {
  return (
    <header>
 <div className="bg-black text-yellow-400 text-center py-3 text-sm">
        NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE
      </div>

      <nav className="flex items-center justify-between px-10 py-5">

        <div>
         <img src={adidaslogo} alt="adidas logo" className="w-20" />
        </div>

        <ul className="flex gap-8 font-medium">
          <li className="cursor-pointer hover:underline">WOMEN</li>
          <li className="cursor-pointer hover:underline">MEN</li>
          <li className="cursor-pointer hover:underline">KIDS</li>
          <li className="cursor-pointer hover:underline">NEWS</li>
          <li className="cursor-pointer hover:underline">SPORTS</li>
          <li className="cursor-pointer hover:underline">ADIDAS WORLD</li>
        </ul>

         <div className="flex items-center gap-5 text-xl">
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