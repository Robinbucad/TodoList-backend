import { Collection, Db, MongoClient } from "mongodb"
import { Status, Task, Title } from "../type"
import * as dotenv from 'dotenv';
dotenv.config();

const URI_MONGO_DB = process.env.URI_MONGO_DB
export const client = new MongoClient(URI_MONGO_DB)
const DATABASE_NAME = 'todolist'
const COLLECTION_NAME = 'todo'



export const retrieveToDoTask = async()=> {
    try{
        await client.connect()
        const db:Db = client.db(DATABASE_NAME)
        const todoCol:Collection<Task> = db.collection(COLLECTION_NAME)
        
        const tasks = todoCol.find({},{}).toArray()
        return tasks ?? undefined
    }catch(err){
        console.error('Retrieve To Do task error', err)
    }
}

export const createToDoTask = async (task:Task) => {
    try{
        await client.connect()
        const db:Db = client.db(DATABASE_NAME)
        const todoCol:Collection<Task> = db.collection(COLLECTION_NAME)

        await todoCol.insertOne(task)

    }catch(err){
        console.error('Create task to do error', err)
    }
}

export const getTaskById = async(id:string) => {
    try{    
        await client.connect()
        const db:Db = client.db(DATABASE_NAME)
        const taskCol:Collection<Task> = db.collection(COLLECTION_NAME)
        const query = {
            id: Number(id)
        }    
       console.log(query)
        return taskCol.findOne(query,{})
    
    }catch(err){
        console.error("Get task by ID error", err)
    }
}

export const deleteTask = async(id:string) => {
    try{    
        await client.connect()
        const db:Db = client.db(DATABASE_NAME)
        const taskCol:Collection<Task> = db.collection(COLLECTION_NAME)

        const query = {
            id: Number(id)
        }
        return taskCol.deleteOne(query)

    }catch(err){
        console.error("Delete task error:", err)
    }
}

export const updateOneTask = async(id:string, title:Title) => {
    try{
        await client.connect()
        const db:Db = client.db(DATABASE_NAME)
        const taskCol:Collection<Task> = db.collection(COLLECTION_NAME)
        const query = {
            id: Number(id)
        }
        
        const taskTitle = await taskCol.updateOne(query, {$set:title})
        return taskTitle
    }catch(err){
        console.error("Error on edit the task", err)
    }
}

export const updateStatusTask = async(id:string, status:Status) => {
    try{
        await client.connect()
        const db:Db = client.db(DATABASE_NAME)
        const taskCol:Collection<Task> = db.collection(COLLECTION_NAME)
        const query = {
            id:Number(id)
        }

        const taskStatus = await taskCol.updateOne(query, {$set:status})
        return taskStatus
    }catch(err){
        console.error("Can not change status", err)
    }
}