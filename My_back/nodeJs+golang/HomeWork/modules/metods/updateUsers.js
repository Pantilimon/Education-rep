const data = require('../../sql-data')


const updateUsers = async function (req, res) {
    const id = parseInt(req.url.split('/')[2])
    let body = ''

    req.on('data', chunk => {
        body += chunk
    })

    req.on('end', async function() {
        const parsedBody = new URLSearchParams(body)
        const updatedData = {}
        parsedBody.forEach((value, key) => {
            updatedData[key] = key ==='age' ? parseInt(value) : value
        })

        updatedUser = data.updateUsers(id, updatedData)

        if (await updatedUser) {
            res.writeHead(200)
            res.end(JSON.stringify(updatedUser))
        } else {
            res.writeHead(404)
            res.end(JSON.stringify({message: 'User nor found'}))
        }
        
    })
}


module.exports = updateUsers