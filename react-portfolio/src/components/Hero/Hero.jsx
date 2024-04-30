import React from "react";
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";

export const Hero=()=>{
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi I'm Yashveer</h1>
                <p className={styles.description}>
                    Hi I'm Yashveer Singh and I'm a full-stack developer with 1 year of experience using React and NodeJS. Reach out if you like to learn more!
                </p>
                <a href="mailto:yashveersingh9897@gmail.com" className={styles.contactBtn} >Contact Me</a>
            </div>
            <img src={getImageUrl("final.png")} alt="Hero img of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
};