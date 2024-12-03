import { config } from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getHOME, patchHOME, postHOME, } from "./controllers/home.js"
import {getToDo, createToDo} from "./controllers/todo.js"
import mongoose from "mongoose";
const app = express()

config()

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.route("/").get(getHOME).post(postHOME).patch(patchHOME);

app.route("/todo").get(getToDo).post(createToDo);

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});