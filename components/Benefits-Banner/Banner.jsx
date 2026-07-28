import bannerimg from "../../assets/images/bannerimg.png";

 function Banner() {
  return (
   <section className="px-10 py-16" >
    <div className="grid grid-colos-2">
    <div><img src={bannerimg} alt="banner-img" className="w-full h-full object-cover"/></div> 
  <div className="bg-black text-white flex flex-col justify-center px-14">
    <h2 className="text-5xl font-bold leading-tight text"> OUTFITS </h2>
    <h2 className="text-yellow">FOR BENEFITS</h2>
            <p className="mt-8 text-lg">
            Up to 60% off for our members.
            Sign in or join now to shop.
          </p>

          <div className="mt-10 flex flex-col gap-5">

            <button className="text-left font-bold text-xl hover:translate-x-2 transition">

              → BUY NOW

            </button>

            <button className="text-left font-bold text-xl hover:translate-x-2 transition">

              → WHAT IS ADICLUB?

            </button>

          </div>

  
  
  </div>
  
    </div>
   </section>
  )
}
export default Banner;