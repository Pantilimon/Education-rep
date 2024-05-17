var join = function(arr1, arr2) {
    let f = function(o1, o2) {    //правильно объеденяет два объекта 
        let com = {}
        for (let key in o1) {
            com[key] = o1[key]
        }
        for (let key in o2) {
            com[key] = o2[key]
        }
        return com
    }
    let ids = function(lst) {     //создает массив id-ков
        q = []
        for (let i of lst) {
            q.push(i[Object.keys(i)[0]])
        }
        return q
    }
    let search = function(lst, id) {  //ищет в списке объектов объект с нужным индексом
        for (let j of lst) {
            if (j['id'] == id)
                return(j)
        }
    }
    let res = []
    let keys1 = ids(arr1)
    let keys2 = ids(arr2)
    let  s = ids(arr1.concat(arr2))   // Здесь и строчкой ниже создаем список индексов двух исходных массивов и сортируем его (он на самом деле множество)
    s = new Set(s.sort((a,b)=>a-b))
    for (id of s) {
        if ((keys1) && !(keys2.includes(id))) {
            res.push(search(arr1, id))
        }
        else if ((keys2.includes(id)) && !(keys1.includes(id))) {
            res.push(search(arr2, id))
        }
        else {
            res.push(f(search(arr1, id), search(arr2, id)))
        }
    }
    return res
    };