const http = require('http')

//Импортируем обработчик маршрутов (это функция)
const routeHandler = require('./modules/main') 

//Создаем сервер
const server = http.createServer(routeHandler)


//Запуск сервера на порту 3000
const Port = 3000
server.listen(Port, () => {
    console.log(`Слушаем 127.0.0.1:${Port}`)
})