const {
  areCorrectlyClosed,
} = require('./004-correctly-closed-parentheses-and-brackets')

describe('areCorrectlyClosed', () => {
  it('returns true for an empty string', () => {
    expect(areCorrectlyClosed('')).toEqual(true)
  })

  it('returns false for ( expression', () => {
    expect(areCorrectlyClosed('(')).toEqual(false)
  })

  it('returns true for [] expression', () => {
    expect(areCorrectlyClosed('[]')).toEqual(true)
  })

  it('returns false for ([)] expression', () => {
    expect(areCorrectlyClosed('([)]')).toEqual(false)
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

  it('returns true for ()[()]([]) expression', () => {
    expect(areCorrectlyClosed('()[()]([])')).toEqual(true)
  })
})
