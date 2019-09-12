import { ReversePipe } from './reverse.pipe';

describe('Pipe: ReversePipe', () => {
  it('should reverse the inputs', () => {
    let revPipe = new ReversePipe();
    expect(revPipe.transform('hello')).toEqual('olleh');
  });
});
