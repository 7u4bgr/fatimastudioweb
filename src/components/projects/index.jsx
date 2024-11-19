import React, { useMemo } from "react";
import styles from "./index.module.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjectOne1 from "../../assets/images/projekt1.png"
import ProjectOne2 from "../../assets/images/projekt2.png"
import ProjectOne3 from "../../assets/images/projekt3.png"
import ProjectOne4 from "../../assets/images/projekt4.png"
import ProjectOne5 from "../../assets/images/projekt5.png"
import ProjectOne6 from "../../assets/images/projekt6.png"
import ProjectOne7 from "../../assets/images/projekt7.png"
const Projects = () => {
  const data = useMemo(() => [
    {
      id: 1,
      image: `${ProjectOne1}`,
      title: "Where it began — Packing boxes",
      country: "VastraTech • Logistics Coordinator (2008 - 2010)",
    },
    {
      id: 2,
      image: `${ProjectOne2}`,
      title: "Youthful Learning + Growth",
      country: "VastraTech • Procurement & Logistics Manager (2010 - 2014)",
    },
    {
      id: 3,
      image: `${ProjectOne3}`,
      title: "MY first taste of Entrepreneurship",
      country: "Think Africa • Founder & Director (2014 - 2015)",
    },
    {
      id: 4,
      image: `${ProjectOne4}`,
      title: "Working with designers — loving design",
      country: "Design Partnership • Traffic Manager (2016 - 2017)",
    },

    {
      id: 6,
      image: `${ProjectOne6}`,
      title: "New company expansion — Back to ops",
      country: "FYBOTECH • Operations Manager (2017 - 2018)",
    },
    {
      id: 7,
      image: `${ProjectOne7}`,
      title: "Going solo — working with startups",
      country: "WellFit Lifestyle • Founder (2016 - 2017)",
    },
  ]);
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <Swiper
          modules={[Autoplay]}
          className={styles.price}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          breakpoints={{
            0: {
              spaceBetween: 24,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 24,
              slidesPerView: 2,
            },
            992: {
              spaceBetween: 50,
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.border}>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <h3>{item.country}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
