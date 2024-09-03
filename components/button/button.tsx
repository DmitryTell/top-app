import { FC } from "react";
import cn from "classnames";

import styles from "./button.module.css";
import ArrowIcon from "./arrow.svg";

export const Button: FC<Button> = ({
    appearance,
    children,
    className,
    arrow = "none",
    ...props
}) => {
    return (
        <button
            className={ cn(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost",
            }) }
            { ...props }
        >
            { children }
            { arrow !== "none" && (
                <span className={ cn(styles.arrow, {
                    [styles.down]: arrow === "down",
                    [styles.right]: arrow === "right",
                }) }>
                    <ArrowIcon />
                </span>
            ) }
        </button>
    );
};