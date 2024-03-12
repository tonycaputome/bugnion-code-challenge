import React, { ChangeEvent } from "react";
import { Input } from "../Input";
import styles from "./ExchangeForm.module.css";

type TExchangeForm = {
  onClick?: () => void;
  handleChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

/**
 * @name ExchangeForm
 *
 * @description
 * ...
 * @param {Function} onClick onClick handler
 */
const ExchangeForm = ({ onClick, ...rest }: TExchangeForm) => {
  const { handleChange, value } = rest;
  return (
    <div className={styles.form}>
      <Input onChange={handleChange} value={value} name="exchange-form-input" />
    </div>
  );
};

export default ExchangeForm;
