const url  = require('url')

const listUsers = require('./listUsers')
const createUser = require('./createUser')
const getUsersById = require('./getUsersById')
const updateUsers = require('./updateUsers')
const deleteUsers = require('./deleteUsers')

const usersRoters = (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const method  = req.method
    const path = parsedUrl.pathname

    res.setHeader('Content-type', 'application/json')

    if (path === '/users' && method === 'GET') {
        listUsers(req, res)
    } else if (path === '/users' && method === 'POST') {
        createUser(req, res)
    } else if (path.startsWith('/users/') && method === 'GET') {
        getUsersById(req, res)
    } else if (path.startsWith('/users/') && method === 'PUT') {
        updateUsers(req, res)
    } else if (path.startsWith('/users/') && method === 'DELETE') {
        deleteUsers(req, res)
    } else {
        res.writeHead(404)
        res.end(JSON.stringify({message: 'Rout not found in users'}))
    }
}

module.exports = usersRoters