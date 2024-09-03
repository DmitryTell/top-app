import { FC } from "react";
import cn from "classnames";

import styles from "./tag.module.css";

export const Tag: FC<Tag> = ({
    size,
    color = "ghost",
    href,
    children,
}) => {
    return (
        <div className={ cn(styles.tag, {
            [styles.small]: size === "small",
            [styles.large]: size === "large",
            [styles.ghost]: color === "ghost",
            [styles.red]: color === "red",
            [styles.gray]: color === "gray",
            [styles.green]: color === "green",
            [styles.primary]: color === "primary",
        }) }>
            {
                href
                    ? <a href={ href }>{ children }</a>
                    : <>{ children }</>
            }
        </div>
    );
};