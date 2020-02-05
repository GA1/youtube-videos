const { areCorrectlyClosed } = require('./003-correctly-closed-parentheses')

describe('areCorrectlyClosed', () => {
  it('returns true for an empty string', () => {
    expect(areCorrectlyClosed('')).toEqual(true)
  })

  it('returns false for ( expression', () => {
    expect(areCorrectlyClosed('(')).toEqual(false)
  })

  it('returns false for (( expression', () => {
    expect(areCorrectlyClosed('((')).toEqual(false)
  })

  it('returns false for )( expression', () => {
    expect(areCorrectlyClosed(')(')).toEqual(false)
  })

  it('returns false for )()(()) expression', () => {
    expect(areCorrectlyClosed(')()(())')).toEqual(false)
  })

  it('returns true for ()(()) expression', () => {
    expect(areCorrectlyClosed('()(())')).toEqual(true)
  })
})
