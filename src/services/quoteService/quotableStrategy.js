import { QUOTE_API_URL } from "../../config";

export class QuotableStrategy {
  constructor(url) {
    this.url = url;
  }

  async getRandomQuote() {
    const response = await fetch(this.url);
    const data = await response.json();

    if (
      (response.status >= 400 && response.status <= 599) ||
      (data.statusCode >= 400 && data.statusCode <= 599)
    ) {
      throw new Error("Failed to fetch quotable quote");
    }

    return {
      origin: this.url,
      content: data.content,
      author: data.author,
    };
  }
}

export const quotableStrategy = Object.freeze(
  new QuotableStrategy(QUOTE_API_URL.QUOTABLE)
);
