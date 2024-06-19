/**
 * @param {Function} fn
 * @return {Object}
 */

Array.prototype.groupBy = function(fn) {
    res = {}
    for (let i of this) {
        if (!(fn(i) in res)) {
            res[fn(i)] = []
            // console.log(res)
            res[fn(i)].push(i)
        } else {
            res[fn(i)].push(i)
        }
    }
    return res
};


[1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
