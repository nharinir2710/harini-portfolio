import React from "react";
import emailIcon from "/assets/contact/emailIcon.png";
import LIcon from "/assets/contact/linkedinIcon.png";
import GIcon from "/assets/contact/githubIcon.png";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        {/*<p>Feel free to reach out!</p>*/}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:nharinir2710@gmail.com">nharinir2710@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={LIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nharinir-fullstack/">linkedin.com/in/nharinir-fullstack</a>
        </li>
        <li className={styles.link}>
          <img src={GIcon} alt="Github icon" />
          <a href="https://www.github.com/myname">Github</a>
        </li>
      </ul>
    </footer>
  );
};
