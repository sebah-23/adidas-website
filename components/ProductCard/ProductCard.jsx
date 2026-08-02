import { FaRegHeart } from "react-icons/fa";
import shoe from "../../assets/images/Sneaker (1).png";

function ProductCard() {
  return (
    <div
      className="
        w-[220px]
        sm:w-[240px]
        md:w-[260px]
        lg:w-[280px]
        flex-shrink-0
      "
    >
      <div className="relative bg-gray-100 p-4 md:p-6 lg:p-8 rounded-lg">

        <img
          src={shoe}
          alt="Sneaker shoes"
          className="w-full object-contain"
        />

        <FaRegHeart className="absolute top-4 right-4 text-xl md:text-2xl cursor-pointer hover:text-red-500 transition" />

        <p className="mt-4 font-semibold text-base md:text-lg">
          U$170.00
        </p>

        <p className="text-gray-500 text-sm">
          Free shipping
        </p>

      </div>

      <div className="mt-3">

        <p className="font-bold text-base md:text-lg">
          Sneaker X
        </p>

        <p className="text-gray-500 text-sm">
          Sneaker Style
        </p>

      </div>
    </div>
  );
}

export default ProductCard;