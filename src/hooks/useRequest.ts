import { useState, useEffect, useRef, useCallback } from "react";

import { useDebounce } from "./useDebounce";

/**
 *
 * @name useRequest
 *
 * @description
 * Set the value after waiting for a number of ms
 *
 * @param callback {Function} The callback to invoke when the debounced value is ready
 *
 */
export const useRequest = ({
  callback
}: {
  callback?: () => Promise<void>;
}) => {
  const [query, setValue] = useState<string>("");
  const [results, setResults] = useState<any>({});
  const [isLoading, setLoading] = useState<boolean>(false);
  const acr = useRef<AbortController>();
  const queryRef = useRef(null);

  const debouncedValue = useDebounce<string>(query);
  const controller = new AbortController();

  const valid = query.length > 0 && query !== "" && Number(query) > 0;
  const synced = debouncedValue === query && valid;

  acr.current = controller;

  const handle = useCallback(async () => {
    try {
      setResults([]);
      setLoading(true);
      const data = await callback();
      acr.current = null;
      setLoading(false);
      setResults(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const abort = () => {
    acr.current.abort();
  };

  useEffect(() => {
    if (synced) handle();
    return abort();
  }, [synced, handle]);

  useEffect(() => {
    if (query && valid) {
      queryRef.current = setTimeout(() => {
        setLoading(true);
      }, 300);
      12;
    }
    return () => clearTimeout(queryRef.current);
  }, [query, valid]);

  return {
    isLoading,
    results,
    debouncedValue,
    setValue,
    query,
    synced: synced
  };
};
