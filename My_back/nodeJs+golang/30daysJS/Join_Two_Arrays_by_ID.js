var join = function(arr1, arr2) {
    let f = function(o1, o2) {    //правильно объеденяет два объекта 
        for (let key in o2) {
            o1[key] = o2[key]
        }
        return o1
    }
    let tot = {}
    for (let i of arr1.concat(arr2)) {
        if (!(i.id in tot)) {
            tot[i.id] = i
        }
        else {
            tot[i.id] = f(tot[i.id], i)
        }
    }
    let res = []
    for (let i of Object.keys(tot)) {
        res.push(tot[i])
    }
    return res
}
