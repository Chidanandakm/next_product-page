import { useState } from "react";
import Image from "next/image";
import image1 from "./assests/image1.png";
import image2 from "./assests/image2.png";
import image3 from "./assests/image3.png";
import image4 from "./assests/image4.png";
import image from "./assests/image.png";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const arr = [
  {
    id: 1,
    image: image,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image1,
  },
];

const ImageSlider = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Swiper
        slidesPerView={"2"}
        centeredSlides={true}
        navigation={true}
        loop={true}
        loopFillGroupWithBlank={true}
        spaceBetween={5}
        pagination={false}
        modules={[Navigation]}
        className="mySwiper"
      >
        {arr.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="box">
              <Image src={item.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
