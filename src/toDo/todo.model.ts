import { MongoClient } from "mongodb"
import { Status, Task, Title } from "../type"
import * as dotenv from 'dotenv';
dotenv.config();
const pass = process.env.MPASS

const URI = `mongodb+srv://robin:${pass}@discord.3po3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const client = new MongoClient(URI)
const DATABASE_NAME = 'todolist'
const COLLECTION_NAME = 'todo'



export const retrieveToDoTask = async()=> {
    try{
        await client.connect()
        const db = client.db(DATABASE_NAME)
        const todoCol = db.collection(COLLECTION_NAME)
        
        const tasks = todoCol.find({},{}).toArray()
        return tasks ?? undefined
    }catch(err){
        console.error('Retrieve To Do task error', err)
    }
}

export const createToDoTask = async (task:Task) => {
    try{
        await client.connect()
        const db = client.db(DATABASE_NAME)
        const todoCol = db.collection(COLLECTION_NAME)

        await todoCol.insertOne(task)

    }catch(err){
        console.error('Create task to do error', err)
    }
}

export const getTaskById = async(id:string) => {
    try{    
        await client.connect()
        const db = client.db(DATABASE_NAME)
        const taskCol = db.collection(COLLECTION_NAME)
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
        const db = client.db(DATABASE_NAME)
        const taskCol = db.collection(COLLECTION_NAME)

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
        const db = client.db(DATABASE_NAME)
        const taskCol = db.collection(COLLECTION_NAME)
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
        const db = client.db(DATABASE_NAME)
        const taskCol = db.collection(COLLECTION_NAME)
        const query = {
            id:Number(id)
        }

        const taskStatus = await taskCol.updateOne(query, {$set:status})
        return taskStatus
    }catch(err){
        console.error("Can not change status", err)
    }
}