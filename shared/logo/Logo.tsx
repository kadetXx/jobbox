import React, { ReactElement } from "react";
import styles from "./logo.module.scss";
import Image from "next/image";
import { media } from "@/mock";

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
}): ReactElement => {
  const { shared } = media;

  return (
    <div className={`${styles.logo} ${className}`}>
      <Image
        src={type === "blue" ? shared.logoBlue : shared.logo}
        width={width && width}
        height={width && height}
        layout={!width ? "fill" : "intrinsic"}
        alt="jobbox logo"
      />
    </div>
  );
};

export default Logo;
