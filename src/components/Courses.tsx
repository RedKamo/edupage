import { AiOutlineClockCircle } from "react-icons/ai";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
const Courses = () => {
  return (
    <main className="pt-32" id="courses">
      <h1 className="text-3xl font-bold md:text-5xl lg:text-5xl pb-20 text-center">
        Popular Courses
      </h1>
      <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <section className=" hover:bg-change-back p-4 bg-skin-1 w-full border-2 border-black rounded-xl border-b-8 border-b-black">
          <img src={c1} className="w-full " alt="" />
          <h3 className="text-lg font-bold pt-4">
            Android development from Zero to Hero.
          </h3>
          <p className=" text-text-shadow font-bold pt-2">Tiffany smith </p>
          <article className="pt-8 flex items-center gap-2 text-text-shadow font-bold">
            <AiOutlineClockCircle className="  text-2xl" />
            <span className=" font-bold">47hrs</span>
          </article>
        </section>
        <section className=" hover:bg-change-back p-4 bg-skin-1 w-full border-2 border-black rounded-xl border-b-8 border-b-black">
          <img src={c2} className="w-full " alt="" />
          <h3 className="text-lg font-bold pt-4">
            Android development from Zero to Hero.
          </h3>
          <p className=" text-text-shadow font-bold pt-2">Tiffany smith </p>
          <article className="pt-8 flex items-center gap-2 text-text-shadow font-bold">
            <AiOutlineClockCircle className="  text-2xl" />
            <span className=" font-bold">47hrs</span>
          </article>
        </section>
        <section className=" hover:bg-change-back p-4 bg-skin-1 w-full border-2 border-black rounded-xl border-b-8 border-b-black">
          <img src={c3} className="w-full " alt="" />
          <h3 className="text-lg font-bold pt-4">
            Android development from Zero to Hero.
          </h3>
          <p className=" text-text-shadow font-bold pt-2">Tiffany smith </p>
          <article className="pt-8 flex items-center gap-2 text-text-shadow font-bold">
            <AiOutlineClockCircle className="  text-2xl" />
            <span className=" font-bold">47hrs</span>
          </article>
        </section>
        <section className=" hover:bg-change-back p-4 bg-skin-1 w-full border-2 border-black rounded-xl border-b-8 border-b-black">
          <img src={c1} className="w-full " alt="" />
          <h3 className="text-lg font-bold pt-4">
            Android development from Zero to Hero.
          </h3>
          <p className=" text-text-shadow font-bold pt-2">Tiffany smith </p>
          <article className="pt-8 flex items-center gap-2 text-text-shadow font-bold">
            <AiOutlineClockCircle className="  text-2xl" />
            <span className=" font-bold">47hrs</span>
          </article>
        </section>
        <section className=" hover:bg-change-back p-4 bg-skin-1 w-full border-2 border-black rounded-xl border-b-8 border-b-black">
          <img src={c2} className="w-full " alt="" />
          <h3 className="text-lg font-bold pt-4">
            Android development from Zero to Hero.
          </h3>
          <p className=" text-text-shadow font-bold pt-2">Tiffany smith </p>
          <article className="pt-8 flex items-center gap-2 text-text-shadow font-bold">
            <AiOutlineClockCircle className="  text-2xl" />
            <span className=" font-bold">47hrs</span>
          </article>
        </section>
        <section className=" hover:bg-change-back p-4 bg-skin-1 w-full border-2 border-black rounded-xl border-b-8 border-b-black">
          <img src={c3} className="w-full " alt="" />
          <h3 className="text-lg font-bold pt-4">
            Android development from Zero to Hero.
          </h3>
          <p className=" text-text-shadow font-bold pt-2">Tiffany smith </p>
          <article className="pt-8 flex items-center gap-2 text-text-shadow font-bold">
            <AiOutlineClockCircle className="  text-2xl" />
            <span className=" font-bold">47hrs</span>
          </article>
        </section>
      </section>
      <section className="pt-16 text-center">
        <button className="border-2 border-black mx-auto w-32 font-bold  bg-marine-custom rounded-lg text-sm px-5 py-2.5 mb-2">
          View All
        </button>
      </section>
    </main>
  );
};

export default Courses;
