import express from "express";
import cors from "cors";
import ItemRoute from "./routes/ItemRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ItemRoute);

app.listen(5000, ()=> console.log('Server up and running...'));