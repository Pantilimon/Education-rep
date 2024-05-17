/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let f = function(o1, o2) {    //правильно объеденяет два объекта 
        let com = {}
        for (let key in o1) {
            com[key] = o1[key]
        }
        for (let jey in o2) {
            com[jey] = o2[jey]
        }
        return com
    }
    let tot = new Map()
    let keys = []
    for (let i of arr1.concat(arr2)) {
        if (!keys.includes(i.id)) {
            keys.push(i.id)
            tot.set(i.id, i)
            // console.log(tot[1])
            console.log(tot)
            console.log(tot.get(i.id))
            console.log(i)
        }
        else {
            tot.set(i.id, f(tot.get(i.id), i))
            // console.log(`Слияние ${JSON.stringify(tot[i.id])} и ${JSON.stringify(i)} в ключ ${i.id}` )
            // tot[i.id] = f(tot[i.id], i)
            // console.log(tot)
            
        }
    }
    tot = Array.from(tot)
    res = []
    tot.sort((a, b)=>a[0]-b[0])
    for (let i of tot) {
    res.push(i[1])}
    // return res
    return 'пук среньк'

}

ar1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], 
ar2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]





arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]

// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
    // let f = function(o1, o2) {    //правильно объеденяет два объекта 
    //     let com = {}
    //     for (let key in o1) {
    //         com[key] = o1[key]
    //     }
    //     for (let key in o2) {
    //         com[key] = o2[key]
    //     }
    //     return com
    // }
console.log(join(arr1, arr2))
// console.log(arr1.concat(arr2))



// tot = join(arr1, arr2)
// for (let j in tot) {
//     console.log(j)
// }
// console.log(join(arr1, arr2) )