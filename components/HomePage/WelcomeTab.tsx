import React from 'react'
import styles from './WelcomeTab.module.scss'

export default function WelcomeTab() {
    return (
        <div className={`${styles["welcome-tab"]}`}>
            <div className={`${styles["welcome-tab__container"]}`}>
                <div className={`${styles["welcome-tab__container__nav"]}`}>
                    <button
                        className={`${styles["welcome-tab__container__nav__link"]} ${styles["welcome-tab__container__nav__link--active"]}`}
                    >
                        Live sport
                    </button>
                    <button
                        className={`${styles["welcome-tab__container__nav__link"]}`}
                    >
                        Breaking news
                    </button>
                    <button
                        className={`${styles["welcome-tab__container__nav__link"]}`}
                    >
                        Biggest events
                    </button>
                </div>
                <div className={`${styles["welcome-tab__container__content"]}`}>
                    <div
                        className={`${styles["welcome-tab__container__content__title"]}`}
                    >
                        Live Sports
                    </div>
                    <div
                        className={`${styles["welcome-tab__container__content__description"]}`}
                    >
                        Catch your games at home or on the go. Stream live games
                        from major college and pro leagues including the NCAA®,
                        NBA, NHL, NFL, and more.
                    </div>
                    <div
                        className={`${styles["welcome-tab__container__content__logo"]}`}
                    >
                        <div
                            className={`${styles["welcome-tab__container__content__logo__wall"]}`}
                        >
                            <img src="/cbs-sports-network-logo.png" alt="" />
                        </div>
                        <div
                            className={`${styles["welcome-tab__container__content__logo__wall"]}`}
                        >
                            <img src="/espn-network-logo.png" alt="" />
                        </div>
                        <div
                            className={`${styles["welcome-tab__container__content__logo__wall"]}`}
                        >
                            <img src="/nbcsn-network-logo.svg" alt="" />
                        </div>
                        <div
                            className={`${styles["welcome-tab__container__content__logo__wall"]}`}
                        >
                            <img src="/golf-network-logo.png" alt="" />
                        </div>
                    </div>
                    <p
                        className={`${styles["welcome-tab__container__content__disclaimer"]}`}
                    >
                        Live TV plan required. Regional restrictions, blackouts
                        and additional terms apply. <a href="#">See details</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
