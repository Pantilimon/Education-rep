let users = []
let currentId = 1

module.exports ={
    addUser: (user) => {
        user.id = currentId++
        users.push(user)
    },
    deleteUsers: (id) => {
        const userIndex = users.findIndex(u => u.id === id)
        if (userIndex !== -1 ) {
            users.splice(userIndex, 1)
            return true
        }
        return false 
    },
    getUsers: () => users,
    getUsersById: (id) => {users.find(u => u.id === id)},
    updateUsers: (id, updateData) => {
        const userIndex = users.findIndex(u => u.id === id)
        if (userIndex !== -1) {
            users[userIndex] = {...users[userIndex], ...updateData}
            return users[userIndex]
        }
        return null;
    },
}