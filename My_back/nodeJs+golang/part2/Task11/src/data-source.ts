import { DataSource } from "typeorm"
import * as path from "path"
import {User} from "./User"
// import { Users } from "./db"

const databasePath = path.join(__dirname, '..', "db.sqlite")

export const PostgresDataSource = new DataSource({
    type: "sqlite",
    database: databasePath,
    synchronize: true,
    entities: [
        User
    ],
})

export const initDataBase = async () => {
    await PostgresDataSource.initialize()
        console.log("Data Source has been initialized!")   
}

initDataBase().catch((error: Error) => {
    console.log("Database connections error: ", error)
})





