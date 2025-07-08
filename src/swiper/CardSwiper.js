import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

const members = [
  {
    name: "Minwoo Kim",
    role: "Leader",
    task: "Algorithm",
    img: "images/profile1.jpg",
    comment: "사투리 분석 알고리즘 개발을 맡은 니깡내깡팀의 팀장 김민우입니다.",
  },
  {
    name: "Jaewook Park",
    role: "Member",
    task: "Backend",
    img: "images/profile2.jpg",
    comment: "저는 니깡내깡팀에서 백앤드를 맡은  팀원 박재욱입니다.",
  },
  {
    name: "Minsu Kim",
    role: "Member",
    task: "Frontend",
    img: "images/profile3.jpg",
    comment:
      "저는 니깡내깡에서 디자인 및 프론트엔드를 맡은 팀원 김민수라고합니다.",
  },
  {
    name: "Hyeongmin Shin",
    role: "Member",
    task: "Data Collection",
    img: "/images/profile4.jpg",
    comment: "저는 니깡내깡팀에서 데이터수집를 맡은  팀원 신형민입니다.",
  },
];

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
        {members.map((index) => (
          <SwiperSlide
            key={index}
            className="  flex items-center justify-center text-4xl font-bold rounded-xl border-3"
          >
            <div className="flex h-full p-4 gap-5">
              <div className="w-[80%] h-full overflow-hidden">
                <img src={index.img} alt="profile" className="rounded-2xl" />
              </div>
              <div className="w-full h-full flex flex-col gap-4 p-4">
                <span className="text-6xl">{index.name}</span>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl">Role : {index.role}</span>
                  <span className="text-4xl">Task : {index.task}</span>
                </div>
                <img
                  src="images/deulogo.png"
                  alt="deulogo"
                  className="absolute h-auto w-1/3 top-[18%] right-44 opacity-10"
                />
                <div className="pt-32">
                  <h4>안녕하세요</h4>
                  {index.comment}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
