// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { recruitDummyData } from "./../util/recruitDummyData";

const Home_SliderBanner = () => {
  return (
    <div className="Home_SliderBanner">
      <Swiper
        className="Swiper_Banner"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 1000 }}
      >
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + recruitDummyData[0].Slider_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + recruitDummyData[1].Slider_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + recruitDummyData[2].Slider_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + recruitDummyData[3].Slider_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + recruitDummyData[4].Slider_img} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home_SliderBanner;
