var compactObject = function(obj) {
    let keys = []

    if (Array.isArray(obj)) {   //Заполняем массив ключей, чтобы была возможность независимо от типа данных
        for (let k = 0; k < obj.length; k++) {
            keys.push(k.toString());
        }
    } else if (typeof obj == 'object') {
        keys = Object.keys(obj)
    }

    let i = 0
    let len = keys.length   
    while (i < len) {                                             // Здеси и в следующем условии удаялем "плохой" элемент
        if (!Boolean(obj[keys[i]]) && Array.isArray(obj)) {
            obj.splice(i, 1)
            len -= 1
        }
        else if (!Boolean(obj[keys[i]])) {
            delete obj[keys[i]]
            i++
        }
        else if (typeof obj[keys[i]] == 'object' ) {        //Если элемент - это массив или объект, рекурсивно применяем к нему функцию
            compactObject(obj[keys[i]])
            i++
        }
        else {                 //Если обычный объект - просто пропускаем его
            i++
        }
        }
    return obj
    }