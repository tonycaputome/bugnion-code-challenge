import React from "react";

import styles from "./Header.module.css";

type THeaderProps = {
  title: string;
  loading?: boolean;
};
/**
 * @name Header
 *
 * @description
 * ...
 * @param {string} title The heade title
 * @param {boolean} loading Show ot not the loading message
 */
const Header = ({ title, loading }: THeaderProps) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      {loading && <b>loading...</b>}
    </div>
  );
};

export default Header;
