import React from "react";

import styles from "./DisplayRate.module.css";

type TDisplayRate = {
  currency?: string;
  rate: string | number;
};

/**
 * @name DisplayRate
 *
 * @description
 * ...
 * @param {string} currency
 * @param {string} rate
 */
const DisplayRate = ({ currency, rate }: TDisplayRate) => (
  <div className={styles["display-rate"]}>
    {rate && (
      <span>
        {currency}
        {rate}
      </span>
    )}
  </div>
);

export default DisplayRate;
