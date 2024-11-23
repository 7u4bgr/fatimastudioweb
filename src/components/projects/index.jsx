import React, { useMemo } from "react";
import styles from "./index.module.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjectOne1 from "../../assets/images/saytaz.jpg";
import ProjectOne2 from "../../assets/images/azerholiday.jpg";
import ProjectOne3 from "../../assets/images/skalioz.png";
import ProjectOne4 from "../../assets/images/onlineshop.png";
import ProjectOne5 from "../../assets/images/perfume.png";
import ProjectOne6 from "../../assets/images/binary.png";
import ProjectOne7 from "../../assets/images/interview.png";
import ProjectOne8 from "../../assets/images/shoppy.png";
import ProjectOne9 from "../../assets/images/rashadmirza.png";
import { Link } from "react-router-dom";
const Projects = () => {
  const data = useMemo(() => [
    {
      id: 1,
      link: "https://sayt.az/",
      image: `${ProjectOne1}`,
      title: "Ureb.com, Site.az, Sayt.az ",
      country: "Web Designer and Graphic Designer",
    },
    {
      id: 2,
      image: `${ProjectOne2}`,
      title: "Azeholidays.com",
      country: "Web Designer",
    },
    {
      id: 3,
      image: `${ProjectOne3}`,
      title: "FIZIOTERAPEVT YUSIF ZEYNALOV",
      country: "Web Designer",
    },
    {
      id: 4,
      image: `${ProjectOne4}`,
      title: "WHATSHOP ",
      country: "Mobile Designer",
    },
    {
      id: 5,
      image: `${ProjectOne5}`,
      title: "LAPARFUMEGALLERY.COM",
      country: "Web Designer",
    },

    {
      id: 6,
      image: `${ProjectOne6}`,
      title: "BINARYSCHOOL.AZ",
      country: "Graphic Designer",
    },
    {
      id: 7,
      image: `${ProjectOne7}`,
      title: "INTERVIEWER.AZ",
      country: "Graphic Designer and Web Designer",
    },
    {
      id: 8,
      image: `${ProjectOne8}`,
      title: "SHOPPY.AZ",
      country: "Graphic Designer and Web Designer",
    },
    {
      id: 9,
      image: `${ProjectOne9}`,
      title: "RASHADMIRZA.COM",
      country: "Web Designer",
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
                <Link target="_blank" to={item.link}>
                  <img src={item.image} alt="" />
                  <h2>{item.title}</h2>
                  <h3>{item.country}</h3>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
