import React from "react";
import styles from "./LoadingIndicator.module.css";

export const LoadingIndicator: React.FC<{}> = () => {
  return <div role="progressbar" className={styles.loader} />;
};
