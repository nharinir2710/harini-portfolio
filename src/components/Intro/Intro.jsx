import React from "react";
import hariniImage from '/harini-portfolio/assets/Intro/Harini.png';
import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Harini Navari</h1>
        <h2 className={styles.title2}>Professional Summary</h2>
        <p className={styles.description}>
          <ul>
          <li>Experienced <strong>Software Developer</strong> with <strong>4+ years</strong> in Java development, RESTful API integration, and full-stack web development.</li>
          <li>Expertise in <strong>Java, Spring Boot, and ReactJS</strong>.</li>
          <li>Skilled in designing and implementing <strong>scalable backend solutions</strong> with Spring Boot, Hibernate, and microservices.</li>
          <li>Optimized database performance with <strong>MySQL, MS SQL Server, and PostgreSQL</strong>.</li>
          <li>Proficient in building dynamic and responsive front-end interfaces using <strong>JavaScript, HTML5, and CSS</strong>.</li>
          <li>Integrated front-end seamlessly with <strong>Java-based backend systems</strong>.</li>
          <li>Experienced in deploying and managing <strong>AWS cloud platforms</strong>.</li>
          <li>Utilized tools such as <strong>Docker, Kubernetes, and Jenkins</strong> for CI/CD automation.</li>
          <li>Adept in data processing and parsing using <strong>JSON, XML, and CSV</strong>.</li>
          <li>Strong knowledge of authentication and security protocols including <strong>JWT</strong>.</li>
          <li>Skilled in workflow automation with <strong>PowerShell scripting</strong>, improving efficiency.</li>
          <li>Proficient in testing tools like <strong>JUnit, Selenium, and Postman</strong> for quality assurance.</li>
          <li>Experienced in <strong>Agile methodologies</strong>, collaborating with teams to deliver scalable, user-focused solutions.</li>
        </ul>
        </p>
        {/*<a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>*/}
      </div>
      <img
         src={hariniImage} alt="Harini" 
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
