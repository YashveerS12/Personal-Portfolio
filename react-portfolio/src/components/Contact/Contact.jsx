import React from "react";
import { getImageUrl } from "../../utils";
import styles from"./Contact.module.css";

export const Contact=()=>{
    return(
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>
                    Contact
                </h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("emailIcon.png")} alt="Email Icon"/>
                    <a href="mailto:yashveersingh9897@gmail.com">yashveersingh9897@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("linkedinIcon.png")} alt="Linkedin Icon"/>
                    <a href="www.linkedin.com/in/yashveer-singh-086119281">linkedin.com/in/yashveer-singh-086119281</a>
                </li>
                <li className={styles.link}> 
                    <img src={getImageUrl("githubIcon.png")} alt="Github Icon"/>
                    <a href="https://github.com/YashveerS12">github.com/YashveerS12</a>
                </li>
            </ul>
        </footer>
    )
}