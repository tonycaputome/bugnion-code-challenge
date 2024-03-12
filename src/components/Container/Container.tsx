import React from "react";
import { PropsWithChildren } from "react";

import styles from "./Container.module.css";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
