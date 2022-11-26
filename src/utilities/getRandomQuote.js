import { URL } from "../config";

export async function getRandomQuote() {
  const response = await fetch(URL.GET_RANDOM_QUOTE);
  const data = await response.json();

  return data;
}
