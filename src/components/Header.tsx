import { useState } from "react";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.png";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <main className=" mx-auto fixed top-0 right-0 w-full z-10 md:static md:bg-transparent ">
      <section className="flex justify-between items-center  md:bg-transparent  backdrop-blur-sm bg-black/90   p-4">
        <section className=" bg-red-custom md:bg-slate-300 border-2 border-black p-2 rounded-lg">
          <img src={logo} />
        </section>
        <nav className="hidden md:flex items-center gap-4 ">
          <ul className="flex gap-8">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#teachers">Teachers</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleShowNavbar}
          className=" bg-brandPurple-400 rounded-lg text-gray-900 md:hidden lg:hidden "
        >
          <span className="sr-only">menu</span>
          <RiMenuLine className=" text-2xl p-2 box-content text-red-custom" />
        </button>
      </section>

      <section className={`${showNavbar ? "block" : "hidden"} lg:hidden `}>
        <section className="ease-in-out transition-all duration-300  backdrop-blur-sm bg-black/90 text-white fixed z-40 top-0 right-0 h-full w-64 min-h-full border-2 border-black">
          <button onClick={handleShowNavbar} className=" text-red-custom">
            <span className="sr-only">close</span>
            <RiCloseFill className=" text-2xl p-2 box-content" />
          </button>
          <ul className=" w-full  h-full flex flex-col items-center pt-10">
            <li className="h-20 text-4xl hover:text-red-custom">
              <a href="#hero" onClick={handleShowNavbar}>
                Home
              </a>
            </li>
            <li className="h-20 text-4xl  hover:text-red-custom">
              <a href="#teachers" onClick={handleShowNavbar}>
                Teachers
              </a>
            </li>
            <li className="h-20 text-4xl  hover:text-red-custom">
              <a href="#categories" onClick={handleShowNavbar}>
                Categories
              </a>
            </li>
            <li className="h-20 text-4xl  hover:text-red-custom">
              <a href="#courses" onClick={handleShowNavbar}>
                Courses
              </a>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Header;
