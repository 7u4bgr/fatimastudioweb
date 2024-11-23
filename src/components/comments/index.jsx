import React from "react";
import styles from "./index.module.css";
import AuthPhoto from "../../assets/images/commentphoto.png";
import { StarIcon } from "../../icons";
const CommentsPages = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.leftSide}>
          <div className={styles.textHeader}>
            <p>
              “I've worked with Fatya on a couple of occasions now and he is one
              of the most authentically helpful people I've worked with. He took
              the time to really understand and clarify my situation and offered
              genuine, deep and tactical advice. Highly recommend working with
              Fatya if you want real, actionable insights and a positive,
              motivational person to drive you.”
            </p>
          </div>
          <div className={styles.textAuth}>
            <img src={AuthPhoto} alt="" />
            <h2>Chef Adrian M.</h2>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.icons}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <div className={styles.iconsText}>
            <h2>
              A Few Kinds Words From Colleagues and Clients I Have Worked With
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsPages;
