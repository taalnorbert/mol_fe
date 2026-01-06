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

const variantStyles: Record<ButtonVariant, { enabled: string; disabled: string }> = {
    primary: {
        enabled: "bg-primary text-white hover:bg-primary-hover active:scale-95 cursor-pointer",
        disabled: "bg-primary/50 text-white/70 cursor-not-allowed",
    },
    secondary: {
        enabled: "bg-btn-secondary-bg text-btn-secondary-text hover:bg-btn-secondary-bg-hover active:scale-95 cursor-pointer",
        disabled: "bg-btn-disabled-bg text-btn-disabled-text cursor-not-allowed",
    },
    ghost: {
        enabled: "bg-transparent text-primary hover:bg-primary/10 active:scale-95 cursor-pointer",
        disabled: "bg-transparent text-btn-disabled-text cursor-not-allowed",
    },
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    icon,
    iconPosition = "right",
    className = "",
}) => {
    const isDisabled = disabled || loading;
    const styles = variantStyles[variant];
    const sizeStyle = sizeStyles[size];

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={`
                rounded-lg font-medium transition-all duration-200
                flex items-center justify-center gap-2
                ${sizeStyle}
                ${isDisabled ? styles.disabled : styles.enabled}
                ${className}
            `}
        >
            {loading ? (
                <>
                    <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    {children}
                </>
            ) : (
                <>
                    {icon && iconPosition === "left" && icon}
                    {children}
                    {icon && iconPosition === "right" && icon}
                </>
            )}
        </button>
    );
};

export default Button;
