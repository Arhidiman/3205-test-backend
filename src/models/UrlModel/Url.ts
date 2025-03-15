import { DataTypes } from "sequelize";
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
            allowNull: false,
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: true
        },
        shortenUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        tableName: 'urls', timestamps: false
    }
)