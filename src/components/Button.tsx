import { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "scondary" | "outline";
  isFullSize?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  isFullSize,
  children,
}) => {
  return (
    <div
      className={`btn cursor-pointer ${
        variant === "primary"
          ? "btn-primary"
          : variant === "scondary"
          ? "btn-secondary"
          : "btn-outline"
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
