import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','',{
    host: 'Localhost',
    dialect: 'mysql'
});

export default db;