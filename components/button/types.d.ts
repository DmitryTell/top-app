import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

declare global {
    interface Button extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
        appearance: "primary" | "ghost";
        children: ReactNode;
        arrow?: "right" | "down" | "none";
    }
}