import { DataTypes } from "sequelize";
import { Statistics } from "../StatisticsModel/Statistics.ts";
import { sequelizeInstance } from "../../db/sequelizeInstance.ts";

export const Url = sequelizeInstance.define('urls',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        originalUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiresAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: true
        },
        shortUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        tableName: 'urls', timestamps: false
    }
)