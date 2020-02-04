// check if given parentheses and brackets expression is correctly closed
// examples:
// areCorrectlyClosed('()()[]') returns true
// areCorrectlyClosed('(())') returns true
// areCorrectlyClosed('[()]') returns true
// areCorrectlyClosed('([])') returns true
// areCorrectlyClosed(')[](())') returns  false

const {stack} = require('./stack')

function areCorrectlyClosed(s) {
  const chars = s.split('')
  let numberOfOpeningParentheses = 0,
    numberOfClosingParentheses = 0
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i]
    if (c === '(') {
      numberOfOpeningParentheses++
    } else {
      numberOfClosingParentheses++
      if (numberOfOpeningParentheses < numberOfClosingParentheses) {
        return false
      }
    }
  }
  return numberOfOpeningParentheses === numberOfClosingParentheses
}

module.exports.areCorrectlyClosed = areCorrectlyClosed
