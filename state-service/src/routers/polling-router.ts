import express, { Request, Response} from 'express'
import {getAllPollsService,getPollByIdService } from '../services/poll-service'
export const pollingRouter = express.Router()

pollingRouter.get('/', async(req:Request, res:Response) => {
    let allPolls = await getAllPollsService()
    res.json(allPolls)
})
pollingRouter.get('/:pollId', async(req:Request, res:Response) =>{
    let { pollId } = req.params

    if (isNaN(+pollId)) {
        res.status(400).send('Poll Id must be a number')
    } else {
        try {
            let poll = await getPollByIdService(+pollId)
            res.json(poll)
        } catch (e) {
            console.log(e)
        }
    }
})

