module.exports = function reverse (n) {
   const arr = Array.from(String(Math.abs(n)))
   const res = arr.reverse().join('')
    return +res
}
