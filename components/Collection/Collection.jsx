import Boll from "../../assets/images/Boll.png";
import Release from "../../assets/images/RELEASES.Png";
import Proofwater from "../../assets/images/PROOF-WATER.png";
import Gazelle from "../../assets/images/GAZELLE.png";

function Collection() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-10">
        MOST INTERESTING
      </h2>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        <div>
          <img src={Boll}alt="Football Collection" className=" w-[220px]  sm:w-[240px] lg:w-[270px] h-[300px] sm:h-[330px] lg:h-[350px]
           object-cover cursor-pointer hover:scale-105 transition duration-300"/>
        </div>

        <div>
          <img
            src={Release}
            alt="Release Collection"
            className=" w-[220px] sm:w-[240px] lg:w-[270px] h-[300px] sm:h-[330px] lg:h-[350px] object-cover cursor-pointer
              hover:scale-105 transition duration-300 "/>
        </div>

        <div>
          <img
            src={Proofwater}
            alt="Waterproof Collection"
            className="
              w-[220px]
              sm:w-[240px]
              lg:w-[270px]
              h-[300px]
              sm:h-[330px]
              lg:h-[350px]
              object-cover
              cursor-pointer
              hover:scale-105
              transition
              duration-300
            "
          />
        </div>

        <div>
          <img
            src={Gazelle}
            alt="Gazelle Collection"
            className="  w-[220px] sm:w-[240px] lg:w-[270px] h-[300px] sm:h-[330px] lg:h-[350px] object-cover cursor-pointer
             hover:scale-105 transition duration-300 "/>
        </div>

      </div>
    </section>
  );
}

export default Collection;