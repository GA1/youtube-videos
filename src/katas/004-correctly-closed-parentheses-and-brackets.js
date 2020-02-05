// check if given parentheses/brackets expression is correctly closed
// examples:
// areCorrectlyClosed('()()()') returns true
// areCorrectlyClosed('()[]()') returns true
// areCorrectlyClosed('(())') returns true
// areCorrectlyClosed('([])') returns true
// areCorrectlyClosed('[()]') returns true
// areCorrectlyClosed('[(])') returns false
// areCorrectlyClosed(')()(())') returns  false

const { Stack } = require('./002-stack')

function areCorrectlyClosed(s) {
  function getOpeningCharacter(closingCharacter) {
    if (closingCharacter === ')') return '('
    if (closingCharacter === ']') return '['
  }

  const chars = s.split('')
  const stack = new Stack()
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i]
    if (c === '(' || c === '[') {
      stack.push(c)
    } else {
      if (stack.isEmpty()) {
        return false
      }
      if (stack.peek() === getOpeningCharacter(c)) {
        stack.pop()
      }
    }
  }
  return stack.isEmpty()
}

module.exports.areCorrectlyClosed = areCorrectlyClosed
