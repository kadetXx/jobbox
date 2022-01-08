import React from "react";
import styles from "./logo.module.scss";
import Image from "next/image";

interface LogoProps {
  width?: string;
  height?: string;
  type?: "default" | "blue";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = "253",
  height = "56",
  type = "default",
  className,
}) => {
  return (
    <div className={`${styles.logo} ${className}`}>
      <Image
        src={type === "blue" ? "/svg/logo-blue.svg" : "/svg/logo.svg"}
        width={width}
        height={height}
        layout={!width ? "fill" : "intrinsic"}
      />
    </div>
  );
};

export default Logo;
