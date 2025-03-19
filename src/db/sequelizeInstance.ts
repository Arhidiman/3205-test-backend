import { dbConfig } from './config.ts'
import { Sequelize } from 'sequelize';


const { database, user, password} = dbConfig

export const sequelizeInstance = new Sequelize(database, user, password, {
    host: 'postgres',
    dialect: 'postgres',
})
