import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" border-t-2 mt-20 border-black mx-auto flex flex-col   justify-between min-h-20 items-center px-10 py-6 text-slate-100">
      <p className="pb-2 w-52  text-center ">
        Developed with 💖 and ☕ by
        <span className="font-bold text-black"> Camilo Suarez.</span>
      </p>
      <section className="flex gap-4 pt-4">
        <a target="_blank" href="https://github.com/RedKamo">
          <AiFillGithub className=" text-3xl hover:text-black" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/camiloasuarez/">
          <AiFillLinkedin className=" text-3xl hover:text-sky-600" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
