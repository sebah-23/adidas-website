import bannerimg from "../../assets/images/bannerimg.png";

 function Banner() {
  return (
    <section className="py-10 md:py-16 flex justify-center px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-[1200px] h-auto lg:h-[470px] " >
        <div className="w-full lg:w-[35%]">
          <img src={bannerimg} alt="banner-img" className=" w-full h-[300px] md:h-[400px] lg:h-full object-cover rounded-t-[50px]
              lg:rounded-l-[50px] lg:rounded-tr-none"/>  
        </div>
        <div className=" w-full lg:w-[65%] bg-[#231F20] text-white flex flex-col justify-center  px-6  md:px-10 lg:px-16  py-8
            rounded-b-[50px] lg:rounded-r-[50px] lg:rounded-bl-none ">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-none">
              OUTFITS FOR
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 leading-none mt-2">
              BENEFITS
            </h1>
          </div>
          <p className="mt-8 text-base md:text-lg lg:text-xl leading-7">
            <span className="text-yellow-400 font-semibold">
              60% OFF + free shipping:
            </span>{" "}
            only for adiClub members.
          </p>

          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-300 leading-7">
            Check your account and start buying for benefits on{" "}
            <span className="text-yellow-400 font-semibold">
              adiWeek.
            </span>
          </p>

          <div className=" flex flex-col sm:flex-row  gap-6 lg:gap-20 mt-10 lg:mt-16" >
            <button className="flex items-center gap-3 text-lg md:text-2xl lg:text-3xl font-bold hover:text-yellow-400 transition duration-300">
              <span>→</span>
              BUY NOW
            </button>

            <button className="flex items-center gap-3 text-lg md:text-2xl lg:text-3xl font-bold hover:text-yellow-400 transition duration-300">
              <span>↓</span>
              WHAT IS ADIDAS?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;