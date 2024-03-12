// val * data.dataSets[0].series["0:0:0:0:0"].observations[0][0]

import { DataSet } from "../types";

export function rate(
  amount: string,
  dataSet: DataSet,
  key: string = "0:0:0:0:0"
) {
  if (dataSet) {
    const value = +amount;
    const len = Object.entries(dataSet[0].series[key].observations).length - 1;
    const last = dataSet[0].series[key].observations[len];

    /* return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD"
    }).format(value * last[0]); */

    return (Math.round(value * last[0] * 100) / 100).toFixed(2);
  }
  return +amount;
}
