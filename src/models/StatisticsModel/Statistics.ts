import { Url } from "../UrlModel/Url.ts";
import { DataTypes, Deferrable } from "sequelize";
import { sequelizeInstance } from "../../db/sequelizeInstance.ts";

export const Statistics = sequelizeInstance.define('statistics',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        urlId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Url,
                key: 'id',
                deferrable: Deferrable.INITIALLY_IMMEDIATE(),
            }
        },
        ip: {
            type: DataTypes.STRING,
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