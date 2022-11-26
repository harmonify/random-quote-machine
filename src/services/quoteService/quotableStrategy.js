import { QUOTE_API_URL } from "../../config";

export class QuotableStrategy {
  constructor(url) {
    this.url = url;
  }

  async getRandomQuote() {
    const response = await fetch(this.url);
    const data = await response.json();
    return {
      origin: this.url,
      content: data.content,
      author: data.author,
    };
  }
}

export const quotableStrategy = Object.freeze(new QuotableStrategy(QUOTE_API_URL.QUOTABLE));
