import React from "react";
import UHCLIcon from '/assets/history/UHCL.png';
import AUIcon from "/assets/history/AU.png";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>EDUCATION</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={UHCLIcon} alt="UHCL icon" className={styles.Img}/>
            <div className={styles.aboutItemText}>
              <h3 className={styles.indent}>University of Houston Clearlake</h3>
              <p className={styles.indent}>
                Master of Science in Computer Science – 3.89 CGPA
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={AUIcon} alt="AU icon" className={styles.Img}/>
            <div className={styles.aboutItemText}>
            <h3 className={styles.indent}>Anurag Group of Institutions</h3>
            <p className={styles.indent}>
            Bachelor of Science in Information Technology – 3.95 GPA
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
