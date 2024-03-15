import express from "express";
import {
    getItems, 
    getItemById,
    createItem,
    updateItem,
    deleteItem
} from "../controllers/ItemController.js";

const router = express.Router();

router.get('/users', getItems);
router.get('/users/:id', getItemById);
router.post('/users', createItem);
router.patch('/users/:id', updateItem);
router.delete('/users/:id', deleteItem);

export default router;