"use client";

import { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./rating.module.css";
import RatingIcon from "./rating.svg";


export const Rating: FC<Rating> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isEditable = false,
    rating,
    setRating,
}) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((_, i) => (
            <RatingIcon
                className={cn({
                    [styles.filled]: i < currentRating,
                })}
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={() => handleClick(i + 1)}
            />
        ));

        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }

        constructRating(i);  
    };

    const handleClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        
        setRating(i);
    };

    useEffect(() => {
        constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    return (
        <div className={styles.container}>
            { ratingArray.map((r, i) => (
                <span
                    key={String(i)}
                    className={cn({
                        [styles.editable]: isEditable,
                    })}
                >
                    { r }
                </span>
            )) }
        </div>
    );
};