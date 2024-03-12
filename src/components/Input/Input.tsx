import React from "react";
import styles from "./Input.module.css";

type TInput = {
  name: string;
  onChange?: (evt: any) => void;
  value?: string | never;
  type?: string;
  placeholder?: string;
};

/**
 *
 * @name Input
 */
const Input = ({
  name,
  onChange,
  value,
  type = "number",
  placeholder = "Insert your value here"
}: TInput) => {
  return (
    <>
      <label htmlFor={name} className={styles.inp}>
        <input
          type={type}
          id={name}
          onChange={onChange}
          value={value}
          placeholder="&nbsp;"
        />
        <span className={styles.label}>{placeholder}</span>
        <span className={styles["focus-bg"]}></span>
      </label>
    </>
  );
};

export default Input;
