import { Request, Response } from "express"
import { Task } from "../type"
import { createToDoTask, deleteTask, getTaskById, retrieveToDoTask, updateOneTask } from "./todo.model"


export const getToDoCtrl = async(req:Request, res:Response) => {
    const toDoTasks =  await retrieveToDoTask()
    console.log(toDoTasks)
    res.json(toDoTasks)
}

export const postTaskToDoCtrl = async (req:Request<{}>, res:Response) => {
  
    const Task:Task = {
        title:req.body.title,
        column:req.body.column,
        id: req.body.id ,
        date:req.body.date
    }
  
    await createToDoTask(Task)
   res.json(Task)
}

export const getTaskByIdCtrl = async(req:Request, res:Response) => {
    const {id} = req.params
    const taskByID =  await getTaskById(id)
    if(taskByID !== null){
        res.json(taskByID)
    }else{
        res.sendStatus(404)
    }
}

export const deleteTaskCtrl = async(req:Request, res:Response) => {
    const {id} = req.params
    const DelSingleTask =  await deleteTask(id)

    if(DelSingleTask.deletedCount === 1){
        res.json(DelSingleTask)
    }else{
        res.sendStatus(404)
    }
}

export const updateTaskCtrl = async(req:Request, res:Response) => {
    const {id} = req.params
    const titleNew = {
        title:req.body.title
    }
    const updatedTask = await updateOneTask(id,titleNew)
    res.json(updatedTask)
}