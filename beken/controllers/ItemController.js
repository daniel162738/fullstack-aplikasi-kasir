import Item from "../models/ItemModel.js";

export const getItems = async(req, res) =>{
    try {
        const response = await Item.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getItemById = async(req, res) =>{
    try {
        const response = await Item.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createItem = async(req, res) =>{
    try {
        await Item.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateItem = async(req, res) =>{
    try {
        await Item.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteItem = async(req, res) =>{
    try {
        await Item.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}