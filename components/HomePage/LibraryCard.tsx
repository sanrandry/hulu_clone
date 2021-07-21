import React from "react";
import styles from "./LibraryCard.module.scss";
interface LibraryCardPros {
    meta: string;
    title: string;
    image_url: string;
}
export default function LibraryCard(props: LibraryCardPros) {
    return (
        <div
            className={`${styles["card"]}`}
            style={{ backgroundImage: `url(${props.image_url})` }}
        >
            <div className={`${styles["hoverlay"]}`}>
                <div className={`${styles["card__body"]}`}>
                    <div className={`${styles["card__body__meta"]}`}>
                        {props.meta}
                    </div>
                    <div className={`${styles["card__body__title"]}`}>
                        {props.title}
                    </div>
                </div>
            </div>
        </div>
    );
}
