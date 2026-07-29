import history from "../../assets/images/history.png";

 function History() {
  return (
   <section className=" bg-orange-500 relative w-full h-[700px] overflow-hidden">
   <img src={history} alt="cover-img" className="absolute inset-0 w-full h-full object-cover" />
   <div className="absolute left-20 top-48 w-[360px] text-white">

<p className="leading-9 text-xl">
At adidas, we believe that sports have the power to transform lives. It's not just about keeping your body and mind fit; it's about bringing people together and creating a community of individuals who share the same passion for excellence.
</p>

<p className="mt-16 leading-9 text-xl">
We draw inspiration from the athletes who push themselves to their limits every day, and from the technology we develop to help them achieve their goals. 
</p>

</div>
<div className="absolute right-20 top-48 w-[360px] text-white text-right">

<p className="leading-9 text-xl">
Whether you're a runner, a basketball player, a soccer player, or someone who loves to train, you'll find a home with us. Our products are designed to meet your needs, no matter what your preferred form of exercise may be. 
</p>

<p className="mt-16 leading-9 text-xl">
We're not just present on the playing field, either. You'll find the three stripes at music festivals, on stages, and in the city streets. 
</p>
</div>

<p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-3xl font-semibold text-center " >
To improve performances.
Improve lives.
<br/>
and change the world.
</p>

   </section>
  )
}
export default History;