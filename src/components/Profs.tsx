import prof1 from "../assets/pr1.png";
import proft from "../assets/Ellipse.png";
import { AiFillStar, AiOutlineStar, AiOutlineUser } from "react-icons/ai";

const Profs = () => {
  return (
    <main
      className="flex flex-col items-center pt-32 justify-center text-center"
      id="teachers"
    >
      <h1 className="text-3xl font-bold md:text-5xl lg:text-5xl">
        Most Popular Teachers
      </h1>
      <section className=" flex flex-col md:flex-row w-full gap-4 pt-10">
        <section className="pt-10 md:w-1/2  flex items-center flex-col ">
          <img src={prof1} alt="" className="w-60" />
          <article className="flex items-center justify-center pt-4 pb-8">
            <AiFillStar className=" text-purple-800 text-5xl" />
            <section>
              <p className="text-xl font-bold">Thomas Newton</p>
              <span className="text-white">Personal Finances</span>
            </section>
          </article>
          <section className=" bg-skin-1 border-2 border-black p-4 rounded-md">
            <article className="flex justify-between items-center">
              <p className="font-bold">
                504k <span className=" text-text-shadow">Reviews</span>
              </p>
              <AiOutlineStar className=" bg-green-custom rounded-full" />
            </article>
            <article className="flex justify-between items-center pt-2">
              <p className="font-bold">
                610k <span className=" text-text-shadow">Total Students</span>
              </p>
              <AiOutlineUser className=" bg-green-custom rounded-full" />
            </article>
          </section>
        </section>
        <section className=" md:w-1/2">
          <article className=" hover:bg-change-back bg-skin-1 border-2 border-black p-4 rounded-md flex flex-col lg:flex-row lg:items-center lg:justify-between my-6">
            <section className="flex items-center justify-center gap-4">
              <img src={proft} alt="" />
              <article>
                <p>Andy Jhonson</p>
                <span>UX Designer</span>
              </article>
            </section>
            <section className="pt-4 lg:pt-0">
              <article className="flex justify-between items-center">
                <p className="font-bold">
                  504k <span className=" text-text-shadow">Reviews</span>
                </p>
                <AiOutlineStar className=" bg-green-custom rounded-full" />
              </article>
              <article className="flex justify-between items-center pt-2">
                <p className="font-bold">
                  610k <span className=" text-text-shadow">Total Students</span>
                </p>
                <AiOutlineUser className=" bg-green-custom rounded-full" />
              </article>
            </section>
          </article>
          <article className="hover:bg-change-back bg-skin-1 border-2 border-black p-4 rounded-md flex flex-col lg:flex-row lg:items-center lg:justify-between my-6">
            <section className="flex items-center justify-center gap-4">
              <img src={proft} alt="" />
              <article>
                <p>Andy Jhonson</p>
                <span>UX Designer</span>
              </article>
            </section>
            <section className="pt-4 lg:pt-0">
              <article className="flex justify-between items-center">
                <p className="font-bold">
                  504k <span className=" text-text-shadow">Reviews</span>
                </p>
                <AiOutlineStar className=" bg-green-custom rounded-full" />
              </article>
              <article className="flex justify-between items-center pt-2">
                <p className="font-bold">
                  610k <span className=" text-text-shadow">Total Students</span>
                </p>
                <AiOutlineUser className=" bg-green-custom rounded-full" />
              </article>
            </section>
          </article>
          <article className="hover:bg-change-back bg-skin-1 border-2 border-black p-4 rounded-md flex flex-col lg:flex-row lg:items-center lg:justify-between my-6">
            <section className="flex items-center justify-center gap-4">
              <img src={proft} alt="" />
              <article>
                <p>Andy Jhonson</p>
                <span>UX Designer</span>
              </article>
            </section>
            <section className="pt-4 lg:pt-0">
              <article className="flex justify-between items-center">
                <p className="font-bold">
                  504k <span className=" text-text-shadow">Reviews</span>
                </p>
                <AiOutlineStar className=" bg-green-custom rounded-full" />
              </article>
              <article className="flex justify-between items-center pt-2">
                <p className="font-bold">
                  610k <span className=" text-text-shadow">Total Students</span>
                </p>
                <AiOutlineUser className=" bg-green-custom rounded-full" />
              </article>
            </section>
          </article>
          <article className="hover:bg-change-back bg-skin-1 border-2 border-black p-4 rounded-md flex flex-col lg:flex-row lg:items-center lg:justify-between my-6">
            <section className="flex items-center justify-center gap-4">
              <img src={proft} alt="" />
              <article>
                <p>Andy Jhonson</p>
                <span>UX Designer</span>
              </article>
            </section>
            <section className="pt-4 lg:pt-0">
              <article className="flex justify-between items-center">
                <p className="font-bold">
                  504k <span className=" text-text-shadow">Reviews</span>
                </p>
                <AiOutlineStar className=" bg-green-custom rounded-full" />
              </article>
              <article className="flex justify-between items-center pt-2">
                <p className="font-bold">
                  610k <span className=" text-text-shadow">Total Students</span>
                </p>
                <AiOutlineUser className=" bg-green-custom rounded-full" />
              </article>
            </section>
          </article>
          <article className="hover:bg-change-back bg-skin-1 border-2 border-black p-4 rounded-md flex flex-col lg:flex-row lg:items-center lg:justify-between my-6">
            <section className="flex items-center justify-center gap-4">
              <img src={proft} alt="" />
              <article>
                <p>Andy Jhonson</p>
                <span>UX Designer</span>
              </article>
            </section>
            <section className="pt-4 lg:pt-0">
              <article className="flex justify-between items-center">
                <p className="font-bold">
                  504k <span className=" text-text-shadow">Reviews</span>
                </p>
                <AiOutlineStar className=" bg-green-custom rounded-full" />
              </article>
              <article className="flex justify-between items-center pt-2">
                <p className="font-bold">
                  610k <span className=" text-text-shadow">Total Students</span>
                </p>
                <AiOutlineUser className=" bg-green-custom rounded-full" />
              </article>
            </section>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Profs;
