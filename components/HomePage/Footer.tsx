import React from 'react'
import style from './Footer.module.scss'

export default function Footer() {
    return (
        <div className={`${style["footer"]}`}>
            <div className={`${style["footer__container"]}`}>
                <div className={`${style["row"]} ${style["footer-menu"]}`}>
                    <div
                        className={`${style["col-md-8"]} ${style["browse__link__serction"]}`}
                    >
                        <div className={`${style["footer__container__title"]}`}>
                            Browse
                        </div>
                        <div className={`${style["row"]}`}>
                            <div className={`${style["col-md-3"]}`}>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Streaming Library
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Lives TV
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Live News
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Live Sports
                                </a>
                            </div>
                            <div className={`${style["col-md-3"]}`}>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    TV Shows
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Movie
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Originals
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Networks
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Kids
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    FX on Hulu
                                </a>
                            </div>
                            <div className={`${style["col-md-3"]}`}>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    HBO Max
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Cinemax
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Showtime
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    STARZ
                                </a>
                            </div>
                            <div className={`${style["col-md-3"]}`}>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Hulu, Disney+, and ESPN+
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Disney bundle with Hulu(No Ads)
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Disney bundle with hulu + Live TV
                                </a>
                                <a
                                    href="#"
                                    className={`${style["footer-link"]}`}
                                >
                                    Student Discount
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`${style["col-md-2"]}`}>
                        <div className={`${style["footer__container__title"]}`}>
                            Help
                        </div>
                        <div>
                            <a href="#" className={`${style["footer-link"]}`}>
                                Account & Billing
                            </a>
                            <a href="#" className={`${style["footer-link"]}`}>
                                Plans & Pricing
                            </a>
                            <a href="#" className={`${style["footer-link"]}`}>
                                Supported devices
                            </a>
                            <a href="#" className={`${style["footer-link"]}`}>
                                Accecibility
                            </a>
                        </div>
                    </div>
                    <div className={`${style["col-md-2"]}`}>
                        <div className={`${style["footer__container__title"]}`}>
                            About us
                        </div>
                        <div>
                            <a href="#" className={`${style["footer-link"]}`}>
                                Press
                            </a>
                            <a href="#" className={`${style["footer-link"]}`}>
                                Jobs
                            </a>
                            <a href="#" className={`${style["footer-link"]}`}>
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${style["footer__social-link"]}`}>
                    <a
                        href="#"
                        className={`${style["footer__social-link__icon"]}`}
                    >
                        <img src="/facebook.svg" alt="" />
                    </a>
                    <a
                        href="#"
                        className={`${style["footer__social-link__icon"]}`}
                    >
                        <img src="/twitter.svg" alt="" />
                    </a>
                    <a
                        href="#"
                        className={`${style["footer__social-link__icon"]}`}
                    >
                        <img src="/youtube.svg" alt="" />
                    </a>
                    <a
                        href="#"
                        className={`${style["footer__social-link__icon"]}`}
                    >
                        <img src="/instagram.svg" alt="" />
                    </a>
                </div>

                <div className={`${style["footer__legal-link"]}`}>
                    <span>© 2021 Hulu, LLC</span>
                    <a href="#" className={`${style["footer-link"]}`}>
                        About Ads
                    </a>
                    <a href="#" className={`${style["footer-link"]}`}>
                        Terms of Use
                    </a>
                    <a href="#" className={`${style["footer-link"]}`}>
                        Privacy Policy
                    </a>
                    <a href="#" className={`${style["footer-link"]}`}>
                        Do Not Sell My Personal Information
                    </a>
                    <a href="#" className={`${style["footer-link"]}`}>
                        Your California Privacy Rights
                    </a>
                    <a href="#" className={`${style["footer-link"]}`}>
                        TV Parental Guidelines
                    </a>
                    <a href="#" className={`${style["footer-link"]}`}>
                        Sitemap
                    </a>
                </div>
            </div>
        </div>
    );
}
