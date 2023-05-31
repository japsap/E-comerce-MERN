import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Data } from "../../Constants/Data";
const SwiperHeader = () => {

  SwiperCore.use([Autoplay]);

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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {Data.swiperShoes.map(shoe => (
          <SwiperSlide key={shoe.id}>
            <img src={shoe.image}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHeader;
