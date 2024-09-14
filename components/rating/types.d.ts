import { DetailedHTMLProps, HTMLAttributes } from "react";


declare global {
    interface Rating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        isEditable?: boolean;
        rating: number;
        setRating?: (rating: number) => void;
    }
}