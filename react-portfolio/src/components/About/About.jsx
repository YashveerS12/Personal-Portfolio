import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About=()=>{
    return( <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("IMG_2865.png")}
            alt="Me sitting with a laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building responsive and optimized sites.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("serverIcon.png")} alt="Server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                           I have experience developing fast and optimised back-end systems and APIs.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Problem Solver</h3>
                        <p>
                        Experienced problem solver adept at delivering efficient solutions through strategic analysis and creative thinking.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
};