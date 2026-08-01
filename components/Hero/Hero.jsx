import adidas from "../../assets/images/adidas.png";
import covers from "../../assets/images/cover-image.png";
import { FaArrowRight } from "react-icons/fa";

 function Hero(){
  return (
    <section className="relative w-full h-[650px] overflow-hidden">
    <img src={covers} alt ="hero" className="w-full h-full object-cover"  />
    {/* <img src={adidas} alt="adidas logo" className="absolute top-10 right-100 w-72"/> */}
    <div className="absolute top-28 left-10 text-black">
        <h1 className="text-6xl font-bold leading-tight">
            ADICLUB<br/>
            IS SHOWING OFF.
        </h1>
        <p className="mt-6 text-lg max-w-md leading-7" > Exclusive releases for our members and more ways
          to unlock those things that you love.</p>
       <div className="mt-10 flex flex-col gap-5">
        <button className="flex items-center gap-4 text-3xl font-bold cursor-pointer color-white">
            <FaArrowRight/>
            <span className="text-2xl">SEE MORE</span>
        </button>
         <button className="flex items-center gap-4 text-3xl font-bold cursor-pointer color-white">
            <FaArrowRight/>
            <span className="text-2xl">SEE MORE</span>
        </button>
    </div> </div>

    </section>
  )
}



export default Hero;