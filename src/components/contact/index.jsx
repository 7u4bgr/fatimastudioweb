import React from "react";
import styles from "./index.module.css";
const Contact = () => {
  return (
    <div className={styles.background}>
      <div className={styles.controlSide}>
        <div className={styles.leftSide}>
          <h2>Change the Way You Do Business, For the Better</h2>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.topRight}>
            <p>
              Let’s enhance your business potential with seamless workflows,
              efficient processes and tools, a stronger brand presence, and all-
              around more operational clarity. And when we do, we’ll elevate
              your impact.
            </p>
            <h2>Are you ready?</h2>
          </div>
          <form className={styles.inputs}>
            <input placeholder="Your name*" type="text" name="name" required />
            <input
              placeholder="Your email*"
              type="email"
              name="email"
              required
            />
            <input
              placeholder="How did you hear about me?*"
              type="text"
              name="source"
              required
            />
            <input
              placeholder="Your location*"
              type="text"
              name="location"
              required
            />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">
              SUBMIT <span>></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
