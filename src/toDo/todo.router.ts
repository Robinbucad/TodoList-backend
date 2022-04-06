import express from 'express'
import { getTaskByIdCtrl, getToDoCtrl,postTaskToDoCtrl, deleteTaskCtrl,updateTaskCtrl } from './todo.controller'

const router = express.Router()

router.route('/')  
        .get(getToDoCtrl)
        .post(postTaskToDoCtrl)

router.route('/:id')
        .get(getTaskByIdCtrl)
        .delete(deleteTaskCtrl)
        .patch(updateTaskCtrl)

export default router