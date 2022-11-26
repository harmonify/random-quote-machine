import { LOCAL_QUOTES } from "../../config";

export class LocalStrategy {
  constructor(quotes) {
    this.quotes = quotes;
  }

  async getRandomQuote() {
    const quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    return {
      origin: null,
      content: quote.content,
      author: quote.author,
    };
  }
}

export const localStrategy = Object.freeze(new LocalStrategy(LOCAL_QUOTES));
