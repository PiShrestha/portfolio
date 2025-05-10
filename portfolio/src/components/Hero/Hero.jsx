import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className = {styles.container}>
            <div className={styles.content}>
                <h1 className = {styles.title}>Hi, I'm Pratik</h1>
                <p className = {styles.description}>
                I'm Pratik, a student, programmer, and aspiring mathematician pursuing a degree in Computer Science and Mathematics at the University of Virginia. 
                I enjoy building side projects and exploring a broad range of fields, including machine learning, algorithmic trading, cryptography, and pure mathematics.
                </p>
                <a href="mailto:pratikshr3stha@gmail.com" className = {styles.contactBtn}> Contact Me </a>
            </div>
            <img src = {getImageUrl("hero/pratik1.jpeg")} alt="Image of Pratik" className = {styles.heroImg} />
            <div className = {styles.topBlur} />
            <div className = {styles.bottomBlur} />
        </section>
    );
}