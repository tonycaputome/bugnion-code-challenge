import { useState, useEffect, useRef } from "react";
import { DEBOUNCE_TIMEOUT } from "../config";

/**
 *
 * @name useDebounce
 *
 * @description
 * Set the value after waiting for a number of ms
 *
 * @param value {T} The value
 * @param ms {number} Number of millisecond to wait to set the debounced value
 *
 */
export const useDebounce = <T>(
  value: T | any,
  ms: number = DEBOUNCE_TIMEOUT
): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setDebouncedValue(value);
    }, ms);

    return () => {
      clearTimeout(ref.current);
    };
  }, [value, ms]);

  return debouncedValue;
};
