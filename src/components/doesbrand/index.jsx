import React from "react";
import styles from "./index.module.css";
const DoesBrand = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.leftSide}>
          <h1>
            If your service and your look don't match the business you want to
            be, it's costing you time, money, and impact.
          </h1>
          <div className={styles.serviceClose}>
            <h2>ⓧ You're living with an outdated logo and website</h2>
            <h2>
              ⓧ Your team is overloaded by repetitive, highly manual tasks
            </h2>
            <h2>
              ⓧ You’re unsure of why people choose your competitors over you
            </h2>
            <h2>
              ⓧ Your customer service experience leaves a lot to be desired
            </h2>
            <h2>
              ⓧ Your internal systems — or lack of systems — are working against
              you
            </h2>
          </div>
          <h2>
            Luckily, all of these things are fixable – and I'm here to help.
          </h2>
        </div>
        <div className={styles.rightSide}>
          <h2>How Does Your Brand Experience Measure Up?</h2>
        </div>
      </div>
    </div>
  );
};

export default DoesBrand;
