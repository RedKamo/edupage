import Categories from "../components/Categories";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Profs from "../components/Profs";

const Layout = () => {
  return (
    <main className="font-freeSans max-w-[1180px] mx-auto px-4">
      <Header />
      <Hero />
      <Profs />
      <Categories />
      <Courses />
      <Footer />
    </main>
  );
};

export default Layout;
