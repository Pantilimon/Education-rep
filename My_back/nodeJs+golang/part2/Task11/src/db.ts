// import { DataSource } from "typeorm"
import { PostgresDataSource } from "./data-source"
import { User } from "./User"

// const myDataSource = new DataSource("./data-source")
const userRepository = PostgresDataSource.getRepository(User)

class Users_metods {
    static getUsers = async () => {
        try {
            const users = await userRepository.find()
            return users
        } catch (error) {
            return null
        }
    }
    static getUserById = async (id: number) => {
        try {
            const user = await userRepository.findOneBy({id})
            return user
        } catch (error) {
            return null
        }
    }

    static createUser = async (user: {name: string, secondname: string}) => {
        const newUser = userRepository.create(user)
        await userRepository.save(newUser)
        return `${user.name} ${user.secondname}`
    }
    static deleteUser = async (id: number) => {
        try {
            const deleteduser = await userRepository.delete(id)
            return (deleteduser.affected ?? 0) > 0
        } catch (error) {
            return null
        }
    }
}

export { Users_metods }