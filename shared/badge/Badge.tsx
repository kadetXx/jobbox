import React from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  type: string;
  title: string;
  customClasses?: string;
}

const Badge = ({ type, title, customClasses }: BadgeProps) => {
  const getBadgeClass = (type: string) => {
    switch (type) {
      case "secondary":
        return `${styles.badge} ${customClasses} bg-secondary bd-secondary white`;
      case "secondary-outline":
        return `${styles.badge} ${customClasses} bg-transparent bd-secondary secondary`;
      case "primary":
        return `${styles.badge} ${customClasses} bg-primary bd-primary white`;
      case "primary-outline":
        return `${styles.badge} ${customClasses} bg-transparent bd-primary primary`;
      default:
        return "";
    }
  };

  return <span className={getBadgeClass(type)}>{title}</span>;
};

export default Badge;
