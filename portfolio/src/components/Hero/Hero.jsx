import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className = {styles.container}>
            <div className={styles.content}>
                <h1 className = {styles.title}>Hi, I'm Pratik</h1>
                <p className = {styles.description}>
                    I’m a second-year Computer Science student at UVA with a strong STEM background. 
                    I’m excited to bring my tech passion and hands-on experience into a new role!
                </p>
                <a href="mailto:pratikshr3stha@gmail.com" className = {styles.contactBtn}> Contact Me </a>
            </div>
            <img src = {getImageUrl("hero/pratik1.jpeg")} alt="Image of Pratik" className = {styles.heroImg} />
            <div className = {styles.topBlur} />
            <div className = {styles.bottomBlur} />
        </section>
    );
}