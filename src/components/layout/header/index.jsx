import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import ImzaPhoto from "../../../assets/images/SVG.png";
import FatimaPp from "../../../assets/images/668f4236fa60301a6de3209c_JamieWindell-1.webp.png";
import VectorText from "../../../assets/images/Vector.png";
import BehancePhoto from "../../../assets/images/image 11.png";
import LinkedinPhotoo from "../../../assets/images/Img.png";
const Header = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  });
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.designSuccess}>
          <h1>Design Success, One Project at a Time</h1>
          <p>
            Hi, I’m Fatima Bashirli, Your go-to Branding Consultant for
            elevating your brand perception. Let's design the experience you
            want to see tomorrow.  
          </p>
          <img src={ImzaPhoto} alt="" />
        </div>
        <div className={styles.controlTwoSide}>
          <div className={styles.twoSide}>
            <h1>EST.2002</h1>
            <p>Currently live in</p>
            <h2>Azerbaijan</h2>
          </div>
          <div className={styles.twoSideImage}>
            <img src={FatimaPp} alt="" />
          </div>
        </div>
        <div className={styles.controlThreeSide}>
          <div className={styles.threeSide}>
            <img src={VectorText} alt="" />
            <h2>Designer</h2>
          </div>
          <div className={styles.clockThreeSide}>
            <h1>49.1579° N 121.9515° W</h1>
            <h2>{time.toLocaleTimeString()}</h2>
          </div>
        </div>
        <div className={styles.menuSide}>
          <h2>MENU +</h2>
          <img src={BehancePhoto} alt="" />
          <img src={LinkedinPhotoo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
