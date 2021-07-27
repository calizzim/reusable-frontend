import { CurrencyLettersPipe } from './currency-letters.pipe';

describe('CurrencyLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
