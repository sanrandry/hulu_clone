import React from "react";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <div>
            <div className={styles.hero}>
                <header>
                    <nav className={styles.nav}>
                        <button className={`${styles["nav__login-btn"]}`}>
                            Log In
                        </button>
                    </nav>
                </header>
                <div className={`${styles.content}`}>
                    <h4 className={`text--sucess ${styles["try-text"]}`}>Try up to one month free</h4>
                    <img
                        src="/Hulu_Logo-01_newgreen.png"
                        alt=""
                        className={`${styles.logo}`}
                    />
                    <div className={`${styles["content__text-1"]}`}>
                        Watch thousands of TV shows and movies.
                    </div>
                    <div className={`${styles["content__text-2"]}`}>
                        HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as
                        add-ons.
                    </div>
                    <div>
                        <button className={`btn ${styles["btn__action"]}`}>
                            Start your free trial
                        </button>
                    </div>
                    <div className={`${styles["legal-text"]}`}>
                        Free trial for new & eligible returning subscribers
                        only.
                    </div>
                </div>
            </div>
        </div>
    );
}
