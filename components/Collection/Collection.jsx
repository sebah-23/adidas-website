import Boll from "../../assets/images/Boll.png";
import Release from "../../assets/images/RELEASES.Png";
import Proofwater from "../../assets/images/PROOF-WATER.png";
import Gazelle from "../../assets/images/GAZELLE.png";

 function Collection() {
  return (
    <section className="py-20 px-12">
       <h2 className="text-4xl font-bold mb-10">
        MOST INTERESTING
      </h2>
        <div className="flex justify-between gap-6">
        <div>
            <img src={Boll} alt="" className=" w-[270px] h-[350px] overflow-hidden cursor-pointer" />
        </div>
        <div>
            <img src={Release} alt="" className=" w-[270px] h-[350px] overflow-hidden cursor-pointer" />
        </div>
        <div>
            <img src={Proofwater} alt="" className=" w-[270px] h-[350px] overflow-hidden cursor-pointer " />
        </div>
        <div>
            <img src={Gazelle} alt="" className=" w-[270px] h-[350px] overflow-hidden cursor-pointer "/>
        </div>
        </div>
    </section>
  )
}
export default Collection;