import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Item = db.define('items', {
    barang: DataTypes.STRING,
    kode: DataTypes.INTEGER,
    harga: DataTypes.INTEGER
}, {
    freezeTableName:true
});

export default Item;

(async()=>{
    await db.sync();
})();