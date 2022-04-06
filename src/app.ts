import express from "express";

import cors from 'cors'
import toDoRoute from './toDo/todo.router'


const app = express();
const port = process.env.PORT || 4000;


app.use(express.json())

app.use(cors())



app.use('/toDo', toDoRoute)



app.listen(port,() => console.log(`Se ha iniciado en el puerto ${port}`))