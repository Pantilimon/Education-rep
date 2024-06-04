const url  = require('url')

// Импортируем обработчик маршрутов по методам (это функция)
const usersRoters = require('./metods/usersRoters')


//Фкнции для обработки запросов (идет на экспорт в server.js)
const routeHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true) //req.url - строка(адрес)
    const path = parsedUrl.pathname

    res.setHeader('Content-type', 'application/json') //Установка заголовка

    if (path === '/users' || path.startsWith('/users/')) {
        usersRoters(req, res)
    } else {
        res.setHeader('Content-Type', 'application/json')        
        res.writeHead(404)
        res.end(JSON.stringify({message: 'Rout not found'}))
    }
}
 module.exports = routeHandler;