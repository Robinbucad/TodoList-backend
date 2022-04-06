import { Request, Response } from "express"
import { Task } from "../type"
import { createToDoTask, retrieveToDoTask } from "./todo.model"

export const getToDoCtrl = async(req:Request, res:Response) => {
    const toDoTasks =  await retrieveToDoTask()
    console.log(toDoTasks)
    res.json(toDoTasks)
}

export const postTaskToDoCtrl = async (req:Request<{}>, res:Response) => {
  
    const Task:Task = {
        title:req.body.title,
        column:req.body.column
    }
  
    await createToDoTask(Task)
   res.json(Task)
}