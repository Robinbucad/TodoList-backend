import express from 'express'
import { getToDoCtrl,postTaskToDoCtrl } from './todo.controller'

const router = express.Router()

router.route('/')  
        .get(getToDoCtrl)
        .post(postTaskToDoCtrl)

export default router