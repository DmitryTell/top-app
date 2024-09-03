import { ReactNode } from "react";

declare global {
    interface Paragraph {
        size: "sm" | "mid" | "lg";
        children: ReactNode;
    }
}