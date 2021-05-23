import React from "react";
import styles from "./logo.module.scss";
import Image from "next/image";

interface LogoProps {
  width?: string;
  height?: string;
}

const Logo: React.FC<LogoProps> = ({ width = "253", height = "56" }) => {
  return (
    <div className={styles.logo}>
      <Image src="/svg/logo.svg" width={width} height={height} />
    </div>
  );
};

export default Logo;
