import { ReactNode } from "react";

declare global {
    type Colors = "ghost" | "red" | "green" | "gray" | "primary";

    interface Tag {
        size: "small" | "large";
        color?: Colors;
        href?: string;
        children: ReactNode;
    }
}