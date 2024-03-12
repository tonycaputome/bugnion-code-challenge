import { API_URL, MIN_INTERVAL_DAYS } from "../config/index";
import { format, days } from "./dates";

/**
 * @name getExchangeRate
 *
 * @description
 * ...
 *
 * @param startPeriod
 * @param endPeriod
 * @param signal
 *
 * @returns
 * Response from API
 */
export const getExchangeRate = async (
  startPeriod?: Date,
  daysInterval: number = MIN_INTERVAL_DAYS
) => {
  // start is today less MIN_INTERVAL_DAYS days value
  const start = startPeriod ? startPeriod : new Date();
  const startDate = format(days(start, daysInterval, "subtract"));
  const endDate = format(start);
  const requestURL = `${API_URL}?startPeriod=${startDate}&endPeriod=${endDate}&format=jsondata`;

  try {
    const response = await (await fetch(requestURL)).json();
    return response;
  } catch (e) {
    throw new Error(`Error fetching the data: ${e}`);
  }
};
