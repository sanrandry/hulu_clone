import React from "react";
import styles from "./Ribon.module.scss";

export default function Ribon() {
    return (
        <section className={`${styles.ribon}`}>
            <div className={`${styles["ribon__image-section"]}`}>
                <img
                    className={`${styles["ribon__image-section__img"]}`}
                    src="/ckdthb9le0phf19ym5bdn91yq-dplus-logo-0-1-2.png"
                    alt=""
                />
            </div>
            <div className={`${styles["ribon__detail"]}`}>
                <div className={`text--sucess ${styles["ribon__detail__bundle"]}`}>
                    Bundle with any hulu plan & save
                </div>
                <div className={`${styles["ribon__detail__info"]}`}>
                    Get Hulu, Disney+, and ESPN+.
                </div>
                <div>
                    <a href="#" className={`${styles["ribon__detail__link"]}`}>
                        Details
                    </a>
                </div>
            </div>
            <div className={`${styles["ribon__button-section"]}`}>
                <div>
                    <button
                        className={`btn ${styles["ribon__button-section__button"]}`}
                    >
                        Get bundle
                    </button>
                </div>
                <div>
                    <a
                        href="#"
                        className={`${styles["ribon__button-section__link"]}`}
                    >
                        Terms apply
                    </a>
                </div>
            </div>
        </section>
    );
}
