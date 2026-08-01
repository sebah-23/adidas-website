import { FaRegHeart } from "react-icons/fa";
import shoe from "../../assets/images/Sneaker (1).png";

function ProductCard() {
  return (
    
    <div className="w-100" > 
    <div className="relative bg-gray-100 p-10">
     <img src={shoe} alt="sniker shoes"  className="w-full" />
     <FaRegHeart className="absolute top-4 right-4 text-2xl cursor-pointer" />
     <p className="font-semibold">U$170,00</p>
     <p className="text-gray-500 text-sm" >free shipping</p>
    </div>
        <p className="font-bold mt-2" >Sneaker x</p>
        <p className="text-gray-500 text-sm">sneaker style</p>
    </div>
   
  );
}

export default ProductCard;