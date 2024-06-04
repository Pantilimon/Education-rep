const data = require('../../sql-data')

const listUsers = async function (req, res) {
    res.writeHead(200)
    res.end(JSON.stringify(await data.getUsers()))
}


module.exports = listUsers