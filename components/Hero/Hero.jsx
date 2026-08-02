import adidas from "../../assets/images/adidas.png";
import covers from "../../assets/images/cover-image.png";
import { FaArrowRight } from "react-icons/fa";

 function Hero() {
  return (
    <section className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden">

      <img src={covers} alt="hero" className="w-full h-full object-cover" />
      <div className="absolute top-12 left-5 md:top-20 md:left-10 lg:top-28 lg:left-10 text-black">

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-none">
          ADICLUB <br />
          IS SHOWING OFF.
        </h1>

        <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg max-w-[280px] md:max-w-md leading-6">
          Exclusive releases for our members and more ways to unlock those
          things that you love.
        </p>

        <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col gap-4">

          <button className="flex items-center gap-3 text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer hover:translate-x-2 transition">
            <FaArrowRight />
            <span className="text-lg md:text-xl lg:text-2xl">
              SEE MORE
            </span>
          </button>

          <button className="flex items-center gap-3 text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer hover:translate-x-2 transition">
            <FaArrowRight />
            <span className="text-lg md:text-xl lg:text-2xl">
              BUY NOW
            </span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;
