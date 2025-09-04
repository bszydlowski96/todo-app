import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant; // default: "primary"
  size?: ButtonSize; // default: "md"
  disabled?: boolean; // default: false
}

/**
 * <Button>
 * - type="button" zawsze
 * - aria-disabled gdy disabled
 * - blokuje kliknięcie gdy disabled
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      onClick,
      variant = "primary",
      size = "md",
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.();
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-disabled={disabled || undefined}
        data-variant={variant}
        data-size={size}
        className={cn(
          styles.root,
          styles[variant],
          styles[size],
          { [styles.isDisabled]: disabled },
          className
        )}
        disabled={disabled}
        onClick={handleClick}
        {...rest}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";
