import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const client = sequelize.define('clients',{
    id_client: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

},{
    timestamps: false
})

export default client;