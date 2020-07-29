import express, { Request, Response, NextFunction } from 'express'
import {getAllPollsService} from '../services/poll-service'

export const pollingRouter = express.Router()

pollingRouter.get('/allPolls', async(req:Request, res:Response, next:NextFunction) => {
    let allPolls = await getAllPollsService()
    res.json(allPolls)
})