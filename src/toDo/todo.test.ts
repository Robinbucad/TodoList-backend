import {app} from '../app'
import request from 'supertest'
import {client} from './todo.model'

describe("Testing de tasks", () => {
    it("Should return 200 on create a task", async() => {
       
        const res = await request(app).post('/toDo').send({
            title:'Test',
            status:'Pending',
            id:1,
            date:'# Created on 5/3/2022/ at 18:57:41',
            column:'To do'
        })
        expect(res.status).toBe(200)
    })

    it("Should return 200 on get the tasks", async() => {
        const res = await request(app).get('/toDo').send()
        expect(res.status).toBe(200)
    })


    it("Should return 200 on get task by ID", async() => {
        const res = await request(app).get('/toDo/1').send()
        expect(res.status).toBe(200)
    })
    
    it("Should return 404 on get !exist task", async() => {
        const res = await request(app).get('/toDo/100').send()
        expect(res.status).toBe(404)
    })

    it("Should return 200 on delete task", async() => {
        const res = await request(app).delete('/toDo/1').send()
        expect(res.status).toBe(200)
    })

    it("Should return 404 on delete task", async() => {
        const res = await request(app).delete('/toDo/100').send()
        expect(res.status).toBe(404)
    })

   it("Should return 200 on patch title", async() => {
    const res = await request(app).patch('/toDo/1').send({title:'Hola testing'})
    expect(res.status).toBe(200)
   })

   it("Should return 200 on patch task status", async() => {
    const res = await request(app).patch('/toDo/status/1').send({
        status:'Done',
        column:'Doone'
    })
    expect(res.status).toBe(200)
   })

    afterAll(() => {
         client.close()
    })
  
} )