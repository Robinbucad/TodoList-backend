import {app} from '../app'
import request from 'supertest'
import {client} from './todo.model'
import { Task, Res, Title, Status} from '../type'



describe("Testing de tasks", () => {
    it("Should return 200 on create a task", async():Promise<void> => {
        const taskToSend:Task = {
            title:'Test',
            status:'Pending',
            id:1,
            date:'# Created on 5/3/2022/ at 18:57:41',
            column:'To do'
        }

        const res = await request(app).post('/toDo').send(taskToSend)
        expect<Res>(res.status).toBe(200)
    })

    it("Should return 200 on get the tasks", async():Promise<void> => {
        const res = await request(app).get('/toDo').send()
        expect<Res>(res.status).toBe(200)
    })


    it("Should return 200 on get task by ID", async():Promise<void> => {
        const res = await request(app).get('/toDo/1').send()
        expect<Res>(res.status).toBe(200)
    })
    
    it("Should return 404 on get !exist task", async():Promise<void> => {
        const res = await request(app).get('/toDo/100').send()
        expect<Res>(res.status).toBe(404)
    })

    it("Should return 200 on delete task", async():Promise<void> => {
        const res = await request(app).delete('/toDo/1').send()
        expect<Res>(res.status).toBe(200)
    })

    it("Should return 404 on delete task", async():Promise<void> => {
        const res = await request(app).delete('/toDo/100').send()
        expect<Res>(res.status).toBe(404)
    })

   it("Should return 200 on patch title", async():Promise<void> => {
    const patchTitle:Title = {title:'Hola testing'}
    const res = await request(app).patch('/toDo/1').send(patchTitle)
    expect<Res>(res.status).toBe(200)
   })

   it("Should return 200 on patch task status", async():Promise<void> => {
    const patchTask:Status = { status: 'Done', column:'Done'}

    const res = await request(app).patch('/toDo/status/1').send(patchTask)
    expect<Res>(res.status).toBe(200)
   })

    afterAll(() => {
         client.close()
    })
  
} )