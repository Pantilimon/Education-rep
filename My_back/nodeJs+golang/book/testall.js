let promiseAll = async function(functions) {
    let res = [];
    let f = async function(i) {
        // Вызываем каждую функцию и ждем ее выполнения
        let data = await functions[i]();
        res[i] = data; // невыполненый промис
    };
  
    // Выполняем все функции параллельно
    for (let i = 0; i < functions.length; i++) {
        await f(i); // Ждем выполнения каждой функции перед переходом к следующей
    }
  
    // теперь у нас есть массив промисов res


    // Дожидаемся завершения асинхронных операций перед возвратом результата
    let F = async function(i) {
        try {
            // Вызываем каждую функцию и ждем ее выполнения
            let data = await functions[i]();
            res[i] = data;
        } catch (err) {
            // Если возникла ошибка, сохраняем ее в массив результатов
            res[i] = err;
        }
    };
  
    await new Promise((resolve, reject) => {
        // Если результат - это массив, вызываем resolve
        if (Array.isArray(res)) {
            setTimeout(resolve, 0);
        } else {
            // Если результат - ошибка, вызываем reject
            setTimeout(reject, 0);
        }
    });
  
    return res;
  };
  