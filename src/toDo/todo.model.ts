import { MongoClient } from "mongodb"
import { Task } from "../type"
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