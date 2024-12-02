import express from "express"
import { getHOME, patchHOME, postHOME, } from "./controllers/home.js"
import {getToDo, createToDo} from "./controllers/todo.js"
const app = express()


app.route("/").get(getHOME).post(postHOME).patch(patchHOME);

app.route("/todo").get(getToDo).post(createToDo);

app.listen(3200, () => {
    console.log("server is running on http://localhost:3200")
}) 