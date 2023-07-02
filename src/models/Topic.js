import sequelize  from '../database/database_connect.js';
import { DataTypes } from "sequelize"

const topic = sequelize.define('topics',{
    id_topic: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
},{
    timestamps: false
})

export default topic;