import { VarToStringPipe } from './var-to-string.pipe';

describe('VarToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new VarToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
