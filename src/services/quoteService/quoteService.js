import { dummyJsonStrategy } from "./dummyJsonStrategy";
import { localStrategy } from "./localStrategy";
import { quotableStrategy } from "./quotableStrategy";

export class QuoteService {
  constructor(strategies) {
    this.strategies = strategies;
  }

  async getRandomQuote() {
    for (const strategy of this.strategies) {
      try {
        const quote = await strategy.getRandomQuote();
        console.info(quote);
        return quote;
      } catch (error) {
        console.error(error);
      }
    }
    throw new Error("Unexpected error. Failed to get quote.");
  }
}

const STRATEGIES = [quotableStrategy, dummyJsonStrategy, localStrategy];

export const quoteService = Object.freeze(new QuoteService(STRATEGIES));
