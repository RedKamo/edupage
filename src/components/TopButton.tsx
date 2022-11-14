import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const TopButton = () => {
  const [visible, setVisible] = useState<Boolean>(false);

  const handleButton = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleButton);

  return (
    <main>
      <button className=" fixed bottom-10 h-10 z-90   right-4 bg-marine-custom rounded-full ">
        <FaArrowCircleUp
          className="text-4xl p-2"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </button>
    </main>
  );
};

export default TopButton;
