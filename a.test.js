describe('a', () => {
  it('b should be mocked properly', () => {
    const a = require('./a');
    expect(a()).toEqual('mocked b');
  })
});