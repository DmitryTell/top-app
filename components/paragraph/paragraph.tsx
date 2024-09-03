import { FC } from "react";
import cn from "classnames";

import styles from "./paragraph.module.css";

export const Paragraph: FC<Paragraph> = ({ size, children }) => {
    return (
        <p className={ cn(styles.paragraph, {
            [styles.small]: size === "sm",
            [styles.middle]: size === "mid",
            [styles.large]: size === "lg",
        }) }>
            { children }
        </p>
    );
};