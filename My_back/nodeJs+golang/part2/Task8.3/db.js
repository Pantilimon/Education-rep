const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db.sqlite')

db.run(`CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    secondname TEXT NOT NULL
)`)

class users {
    static getUsers(cb) {
        db.all('SELECT * FROM Users', cb)
    }
    static getUserById(id, cb) {
        db.get('SELECT * FROM Users WHERE id = ?', id, cb)
    }
    static createUser(data, cb) {
        db.run('INSERT INTO Users(name, secondname) VALUES(?, ?)', data.name, data.secondname, cb)
    }
    static deleteUser(id, cb) {
        if (!id) {return cb(new Error('Пожалуйста, введите id'))} 
        db.run('DELETE FROM Users WHERE id = ?', id, cb)
    }
}
module.exports = db
module.exports.users = users