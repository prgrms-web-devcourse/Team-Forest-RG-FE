import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

interface CarouselProps {
  data: {
    id: string | number;
    component: React.ReactNode;
  }[];
  options?: any;
}

const Carousel = ({ data = [], options = {} }: CarouselProps) => {
  return (
    <Swiper {...options}>
      {data.map(({ id, component }) => (
        <SwiperSlide key={id}>{component}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
