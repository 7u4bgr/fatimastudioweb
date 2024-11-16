import React from "react";
import styles from "./index.module.css";
import TrustPhoto from "../../assets/images/Container.png";
import ProjectPhoto from '../../assets/images/image.png'
const Trustly = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.leftSide}>
          <img src={TrustPhoto} alt="" />
          <p>
            Truslty™ is a brand transformation studio specializing in brand
            refreshes. We help service-based small business owners build a
            standout brand image — one they can be proud of. In addition, we
            offer reliable design services, as well as hosting and domain sales,
            to support their digital presence.
          </p>
        </div>
        <div className={styles.rightSide}>
                <img src={ProjectPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trustly;
