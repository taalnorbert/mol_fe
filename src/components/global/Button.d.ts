import type React from "react";
import type { ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    className?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
