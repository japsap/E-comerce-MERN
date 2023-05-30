import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import shoe1 from "../../Assets/Images/firstShoe.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const SwiperHeader = () => {
  return (
    <div className="headerSwiper">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className="mySwiper"
        zoom={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={shoe1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shoe1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={shoe1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shoe1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHeader;
