"use client";

import { useState } from "react";
import { Rating } from "./rating";


export const RatingEditable = () => {
    const [rating, setRating] = useState<number>(0);

    return <Rating rating={rating} isEditable setRating={setRating} />;
};