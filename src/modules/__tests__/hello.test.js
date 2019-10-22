import hello from '../hello'

describe('hello', () => {
  it('should render properly', () => {
    expect(hello({ name: 'wadus' })).toMatch(/wadus/)
  })
})
