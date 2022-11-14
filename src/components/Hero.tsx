import Slider from "./Slider";

const Hero = () => {
  return (
    <main className="flex flex-col justify-center pt-28 md:pt-10  " id="hero">
      <h1 className="max-w-[700px] mx-auto text-3xl font-bold md:text-5xl lg:text-5xl pb-10 text-center ">
        Grow You Skills to Advance Your Career Path.
      </h1>
      <button className="border-2 border-black mx-auto w-32 focus:outline-none text-white bg-red-custom rounded-lg text-sm px-5 py-2.5 mb-2">
        Started Now!
      </button>
      <Slider />
      <section className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 bg-skin-1 border-2 border-black border-b-8 border-b-black p-4  mt-10 rounded-md">
        <article className="flex flex-col items-center py-4">
          <span className="text-3xl font-bold">12k+</span>
          <p className=" text-text-shadow font-bold ">Student Joined</p>
        </article>
        <article className="flex flex-col items-center py-4">
          <span className="text-3xl font-bold">500k+</span>
          <p className="text-text-shadow font-bold">Online Courses</p>
        </article>
        <article className="flex flex-col items-center py-4">
          <span className="text-3xl font-bold">50k+</span>
          <p className="text-text-shadow font-bold">Certified Teachers</p>
        </article>
        <article className="flex flex-col items-center py-4">
          <span className="text-3xl font-bold">24+</span>
          <p className="text-text-shadow font-bold">Excellence Awards</p>
        </article>
        <article className="flex flex-col items-center py-4">
          <span className="text-3xl font-bold">34+</span>
          <p className="text-text-shadow font-bold">Brand Partners</p>
        </article>
      </section>
    </main>
  );
};

export default Hero;
