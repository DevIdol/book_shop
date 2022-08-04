import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import one from "../../../assets/one.jpeg";
import two from "../../../assets/two.jpeg";
import three from "../../../assets/three.jpeg";
import four from "../../../assets/four.jpeg";
import styles from './HeaderImg.module.css';
import "swiper/css/autoplay";

function createSlide(img) {
  return (
    <SwiperSlide>
      <img className={styles.headerImg}  src={img} alt="" />
    </SwiperSlide>
  );
}

const AutoSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
    >
      {createSlide(one)}
      {createSlide(two)}
      {createSlide(three)}
      {createSlide(four)}
    </Swiper>
  );
};
export default AutoSwiper;
