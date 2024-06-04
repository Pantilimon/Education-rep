const sqlite3 = require('sqlite3').verbose()
const bd = new sqlite3.Database('firstdatabase.db')

bd.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
)`)

module.exports = {
    async addUser(user) {
        const lastID = await new Promise((resolve, reject) => {
            bd.run(`INSERT INTO users (name, age) VALUES (?, ?)`,
                [user.name, user.age],
                function(err) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(this.lastID)
                    }
                })
        })
        return { id: lastID, ...user }
    },
    async deleteUsers(id) {
        const result = await new Promise((resolve, reject) => {
            bd.run('DELETE FROM users WHERE id = ?', [id], function(err) {
                if (err) {
                    reject(err)
                } else {
                    resolve(this.changes)
                }
            })
        })
        return result > 0
    },
    async getUsersById(id) {
        const user = await new Promise((resolve, reject) => {
            bd.get(`SELECT * FROM users WHERE id = ?`, [id], function(err, row) {
                if (err) {
                    reject(err)
                } else {
                    resolve(row)
                }
            })
        })
        return user
    },
    async getUsers() {
        const users = await new Promise((resolve, reject) => {
            bd.all(`SELECT * FROM users`, [], function(err, rows) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
        return users
    },
    async updateUsers(id, user) {
        const change = await new Promise((resolve, reject) => {
            bd.run(`UPDATE users SET name = ?, age = ? WHERE id = ?`,
                [user.name, user.age, id],
                function(err) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(this.changes)
                    }
                })
        })
        if (change === 0) {
            return null
        } else {
            return true
        }
    },
}