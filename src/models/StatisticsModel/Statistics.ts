import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../db/sequelizeInstance.ts";

export const Statistics = sequelizeInstance.define('statistics',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        tableName: 'statistics', timestamps: false
    }
)