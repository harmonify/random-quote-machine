import { QUOTE_API_URL } from "../../config";
import { getRandomInt } from "../../utilities";

export class DummyJsonStrategy {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getRandomQuote() {
    const url = `${this.baseUrl}/${getRandomInt(1, 100)}`;
    const response = await fetch(url);
    const data = await response.json();

    if (response.status >= 400 && response.status <= 599) {
      throw new Error("Failed to fetch dummyjson quote");
    }

    return {
      origin: url,
      content: data.quote,
      author: data.author,
    };
  }
}

export const dummyJsonStrategy = Object.freeze(
  new DummyJsonStrategy(QUOTE_API_URL.DUMMY_JSON)
);
