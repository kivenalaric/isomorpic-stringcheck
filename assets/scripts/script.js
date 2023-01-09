const firstString = document.querySelector('#firststring')
const secondString = document.querySelector('#secondstring')
const checkBtn = document.querySelector('#check')
const display = document.querySelector('#result')

checkBtn.addEventListener('click', () => {
  if (firstString.value === '' || firstString.value === '') {
    display.innerHTML = ('please input a string')
  } else {
    return (display.innerHTML = isomorphicStrings())
  }
})

function isomorphicStrings () {
  const map = new Map()
  const set = new Set()
  let string1 = firstString.value
  let string2 = secondString.value
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
  if (string1.length !== string2.length) {
    return (display.innerHTML = 'please input strings of the same length.\n' + 'can never be isomorphic')
  }

  for (let i = 0; i < string1.length; i++) {
    const char1 = string1.charAt(i)
    const char2 = string2.charAt(i)
    if (map.has(char1)) {
      if (map.get(char1) !== char2) {
        return 'false!! the strings are not isomorphic'
      }
    } else {
      if (set.has(char2)) {
        return false
      }
      map.set(char1, char2)
      set.add(char2)
    }
  }
  return 'true!! yes the strings are isomorphic'
}
