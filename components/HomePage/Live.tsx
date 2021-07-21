import React from 'react'
import styles from './Live.module.scss'
export default function Live() {
    return (
        <div className={`${styles["bg-dark-grey"]}`}>
            <div className={`${styles["live"]}`}>
                <div className={`${styles["live-container"]}`}>
                    <div className={`${styles["live__meta"]}`}>
                        HULLU + LIVE TV
                    </div>
                    <h2 className={`${styles["live__title"]}`}>
                        Live TV Makes It Better
                    </h2>
                    <h3 className={`${styles["live__text"]}`}>
                        Make the switch from cable. Get 75+ top channels with
                        your favorite live sports, news, and events - plus the
                        entire Hulu streaming library.
                    </h3>
                    <p className={`${styles["live__message"]}`}>
                        Live TV plan required. Regional restrictions, blackouts
                        and additional terms apply.{" "}
                        <a
                            href="#"
                            className={`${styles["live__message__link"]}`}
                        >
                            See details
                        </a>
                    </p>
                    <div className={`${styles["live__button__section"]}`}>
                        <button className={`${styles["live__button"]}`}>
                            View channels in you area →
                        </button>
                    </div>
                    <div>
                        <button className={`${styles["live__srcoll-down"]}`}>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
