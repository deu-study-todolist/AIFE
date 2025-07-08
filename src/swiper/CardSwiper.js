import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

export default function CardSwiper() {
  return (
    <div className="w-full flex justify-center py-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        modules={[EffectCards, Mousewheel, EffectCoverflow]}
        loop={true}
        className="w-[900px] h-[500px]"
      >
        {[1, 2, 3, 4].map((index) => (
          <SwiperSlide
            key={index}
            className=" text-white flex items-center justify-center text-4xl font-bold rounded-xl border-4"
          >
            <div className="flex h-full p-4 gap-20">
              <div className="w-[75%] h-full bg-slate-50">12</div>
              <div className="w-full h-full">
                <h2>이름 : </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
