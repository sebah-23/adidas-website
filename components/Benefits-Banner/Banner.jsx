import bannerimg from "../../assets/images/bannerimg.png";

 function Banner() {
  return (
   <section className="py-16 flex justify-center "  >
    <div className="flex w-[1200px] h-[470px]">
    <div className=" w-[35%]"><img src={bannerimg} alt="banner-img" className="w-full h-full object-cover rounded-l-[50px]"/></div> 
  <div className="w-[65%] bg-[#231F20] text-white rounded-r-[50px] flex flex-col justify-center px-16">
       <div>
            <h1 className="text-6xl font-extrabold leading-none">
              OUTFITS FOR
            </h1>
            <h1 className="text-6xl font-extrabold text-yellow-400 leading-none mt-2">
              BENEFITS
            </h1>
          </div>
              <p className="mt-10 text-xl">
            <span className="text-yellow-400 font-semibold">
              60% OFF + free shipping:
            </span>
            only for adiClub members.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-8">
            Check your account and start buying for benefits on 
            <span className="text-yellow-400">adiWeek.</span>
          </p>
         <div className="flex gap-24 mt-16">
            <button className="flex items-center gap-3 text-3xl font-bold hover:text-yellow-400 ">
              <span>→</span>
              BUY NOW
            </button>

            <button className="flex items-center gap-3 text-3xl font-bold hover:text-yellow-400 ">
              <span>↓</span>
              WHAT IS ADIDAS?
            </button>

          </div>

          </div>
  
    </div>
   </section>
  )
}
export default Banner;