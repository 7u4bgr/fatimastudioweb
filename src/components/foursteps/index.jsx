import React, { useMemo } from "react";
import styles from "./index.module.css";
const FourSteps = () => {
  const data = useMemo(() => [
    {
      id: "1. Assess Your Needs",
      bio: "We start by observing  and understanding your business andperforming a gapanalysis.",
    },
    {
      id: "2. Design a Strategy",
      bio: "Crafting a customplan that addressesyour specificpain points is ournext step.",
    },
    {
      id: "3. Implement & Adjust",
      bio: "We work together toimplement thestrategy, adjusting asneeded for optimal results.",
    },
    {
      id: "4. Ongoing Support",
      bio: "As you improve your business and closethe gaps, I'll be thereand ready for continuous support.",
    },
  ]);
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.headerControl}>
          <h2>Four Steps to Improved Efficiency</h2>
        </div>
        <div className={styles.mappingInfo}>
          {data.map((item, index) => (
            <div key={index} className={styles.controlMap}>
              <h1>{item.id}</h1>
              <h2>{item.bio}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourSteps;
