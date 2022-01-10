import React, { ReactElement } from "react";
import styles from "./Button.module.scss";

interface Props {
  type: "primary" | "primary-outline" | "secondary" | "secondary-outline";
  children: React.ReactNode;
  prefixIcon?: string;
  suffixIcon?: string;
  onClick: () => void;
  className?: string;
}

const Button = ({
  type,
  children,
  onClick,
  prefixIcon,
  suffixIcon,
  className,
}: Props): ReactElement => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className}`}
      data-type={type}
      data-prefix-icon={prefixIcon}
      data-suffiix-icon={suffixIcon}
    >
      {children}
    </button>
  );
};

export default Button;
