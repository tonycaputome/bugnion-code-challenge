import { ChangeEvent, useCallback } from "react";
import { useRequest } from "./hooks";
import { getExchangeRate, rate } from "./utils";

import { ExchangeForm } from "./components/ExchangeForm";
import { Container } from "./components/Container";
import { DisplayRate } from "./components/DisplayRate";
import { Header } from "./components/Header";

export default function App() {
  const { setValue, query, results, synced, isLoading } = useRequest({
    callback: () => getExchangeRate()
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <Container>
      <Header title="Exchange rate calculator" loading={isLoading} />
      <ExchangeForm handleChange={handleChange} value={query} />
      {!isLoading && synced && (
        <DisplayRate currency={"$"} rate={rate(query, results.dataSets)} />
      )}
    </Container>
  );
}
