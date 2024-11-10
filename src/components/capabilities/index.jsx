import React from "react";
import styles from "./index.module.css";
const Capabilities = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.leftSide}>
          <h2>CAPABILITIES</h2>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightOne}>
            <h2>Brand Strategy</h2>
            <hr />
            <h2>Brand Identity Design</h2>
            <hr />
            <h2>Copywriting & Key Messaging</h2>
            <hr />
            <h2>Web: Webflow, Squarespace, Wix</h2>
            <hr />
            <h2>Art Direction</h2>
            <hr />
            <h2>Domains & Hosting</h2>
            <hr />
          </div>
          <div className={styles.rightTwo}>
            <h2>Website Design</h2>
            <hr />
            <h2>E-commerce</h2>
            <hr />
            <h2>Social Media Strategy</h2>
            <hr />
            <h2>Photoshoot Art Direction</h2>
            <hr />
            <h2>Creative Direction</h2>
            <hr />
            <h2>Print + Digital Collateral</h2>
            <hr />
          </div>
          <div className={styles.rightThree}>
            <h2>Content Creation</h2>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
