import { ReactNode } from "react";

declare global {
    interface HTag {
        tag: "h1" | "h2" | "h3";
        children: ReactNode;
    }
}