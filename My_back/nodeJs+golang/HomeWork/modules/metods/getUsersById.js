const data = require('../../sql-data')

const getUsersById = async function (req, res) {
    const id = parseInt(req.url.split('/')[2])
    const user = await data.getUsersById(id)

    if (user) {
        res.writeHead(200)
        res.end(JSON.stringify(user))
    } else {
        res.writeHead(404)
        res.end(JSON.stringify({message: 'User not found'}))
    }
}
module.exports = getUsersById