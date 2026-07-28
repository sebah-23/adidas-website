import { useRef } from 'react';
import ProductCard from '../productcard/ProductCard';
import { FaChevronCircleLeft,FaChevronCircleRight } from 'react-icons/fa';

 function Recomm() {
  
  const slideRef = useRef(null);
    const scrollLeft =()=> {
        slideRef.current.scrollBy({
          left : -320,
          behavior:"smooth",  
        });
    };
      const scrollRight =()=> {
        slideRef.current.scrollBy({
          left : 320,
          behavior:"smooth",  
        });
      }


  return (
   <section className="px-10 py-14">
    <div className="flex justify-between items-center mb-8">
      <h3 className='text-3xl font-bold'>Do you still like this products?</h3>
      <div className='flex  gap-4'>
     
     <button onClick={scrollLeft}>
        <FaChevronCircleLeft className='text-2xl  cursor-pointer'/>
     </button>

          <button onClick={scrollRight}>
        <FaChevronCircleRight className='text-2xl  cursor-pointer'/>
     </button>

      </div>

    </div>
<div ref={slideRef} className='flex gap-10 overflow-x-auto scroll-smooth'>

<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />

</div>

   </section>
  )
}
export default Recomm;