import React from 'react'
import styles from './Library.module.scss'
import LibraryCard from './LibraryCard';

export default function Library() {
    const movies = [
        {
            meta: "Past & Current Seasons",
            title: "TV Shows",
            image_url:
                "/ckllond4i0i9w1u7ghnu91j1b-bobsburgers-category-tile-294x450-1x.jpg",
        },
        {
            meta: "New & Classic",
            title: "Movies",
            image_url:
                "/cklms7f221g6z1u6ye8eurm1e-unitedstatesvsbillieholiday-category-tile-294x450-1x-1.jpg",
        },
        {
            meta: "Groundbreaking",
            title: "Hulu Originals",
            image_url:
                "/ckllpbyhp0pww1ua273ct30sb-solaropposites-category-tile-294x450-1x-1.jpg",
        },
        {
            meta: "Add-on",
            title: "Premiums",
            image_url:
                "/ckoku2z5l8wsx1u6rmw1cl695-ww84-category-poster-tile-294x450-2x-1.jpg",
        },
    ];
    return (
        <div className={`${styles["library"]}`}>
            <div className={`${styles["library__header"]}`}>
                <div
                    className={`text--sucess ${styles["library__header__meta"]}`}
                >
                    Included in all plans
                </div>
                <div className={`${styles["library__header__title"]}`}>
                    All The TV You Love
                </div>
                <div className={`${styles["library__header__text"]}`}>
                    Stream full seasons of exclusive series, current-season
                    episodes, hit movies, Hulu Originals, kids shows, and more.
                </div>
            </div>

            <div className={`${styles["library__content"]}`}>
                {
                    movies.map((item) => {
                        return (
                            <div className={`${styles['col-3']} ${styles['col-sm-12']}`}>
                                <LibraryCard meta={item.meta} title={item.title} image_url={item.image_url}></LibraryCard>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
