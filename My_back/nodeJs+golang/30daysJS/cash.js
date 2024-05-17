/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cash = {}
    if (!(fn in cash)) {
        cash[fn] = {}
    }
    let key
    return function(...args) {
        args.sort((a, b) => a - b)
        key = args.toString()
        if (cash[fn][key] === undefined) {
            cash[fn][key] = fn(...args)
        }
        return cash[fn][key]
    }
}
