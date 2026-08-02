import { useRef } from 'react';
import ProductCard from '../productcard/ProductCard';
import { FaChevronCircleLeft,FaChevronCircleRight } from 'react-icons/fa';

function AdiWeek() {
  const slideRef = useRef(null);

  const scrollLeft = () => {
    slideRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    slideRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 md:px-8 lg:px-10 py-10 lg:py-14">

      <div className="flex justify-between items-center mb-6 lg:mb-8">

        <h3 className="text-2xl md:text-3xl font-bold">
          adiWeek
        </h3>

        <div className="flex gap-3 md:gap-4">

          <button onClick={scrollLeft}>
            <FaChevronCircleLeft className="text-xl md:text-2xl cursor-pointer hover:scale-110 transition" />
          </button>

          <button onClick={scrollRight}>
            <FaChevronCircleRight className="text-xl md:text-2xl cursor-pointer hover:scale-110 transition" />
          </button>

        </div>
      </div>
      <div
        ref={slideRef}
        className=" flex gap-4 md:gap-6 lg:gap-10  overflow-x-auto scroll-smooth scrollbar-hide ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

    </section>
  );
}

export default AdiWeek;