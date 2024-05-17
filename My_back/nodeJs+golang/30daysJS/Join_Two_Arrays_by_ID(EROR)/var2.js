var join = function(arr1, arr2) {
    let f = function(o1, o2) {    //правильно объеденяет два объекта 
        for (let key in o2) {
            o1[key] = o2[key]
        }
        return o1
    }
    let tot = new Map()
    let keys = []
    for (let i of arr1.concat(arr2)) {
        if (!(keys.includes(i.id))) {
            keys.push(i.id)
            tot.set(i.id, i)
        }
        else {
            tot.set(i.id, f(tot.get(i.id), i))
        }
    }
    let res = []
    // function quickSort(arr) {
    // if (arr.length <= 1) {
    //     return arr;
    // }

    // const pivot = arr[Math.floor(arr.length / 2)];
    // const less = [];
    // const greater = [];

    // for (const element of arr) {
    //     if (element < pivot) {
    //     less.push(element);
    //     } else if (element > pivot) {
    //     greater.push(element);
    //     }
    // }

    // return [...quickSort(less), pivot, ...quickSort(greater)];
    // }

    // for (let i of quickSort(keys)) {
    //     res.push(tot.get(i))
    // }
    for (let i of keys.sort((a, b) => a - b)) {
        res.push(tot.get(i))
    }
    return res
}