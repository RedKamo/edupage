import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../App.css";
import { EffectCoverflow, Pagination } from "swiper";

import slid from "../assets/slid.png";

const Slider = () => {
  return (
    <main className="pt-10  max-w-md mx-auto ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" bg-pink-custom border-2 border-black rounded-md">
          <img className="" src={slid} />
        </SwiperSlide>
        <SwiperSlide className="bg-marine-custom border-2 border-black rounded-md">
          <img className="" src={slid} />
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-custom border-2 border-black rounded-md">
          <img src={slid} />
        </SwiperSlide>
        <SwiperSlide className=" bg-green-custom border-2 border-black rounded-md">
          <img src={slid} />
        </SwiperSlide>
        <SwiperSlide className=" bg-purple-600 border-2 border-black rounded-md">
          <img src={slid} />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Slider;
