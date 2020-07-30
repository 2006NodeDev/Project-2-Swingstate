import express, { Request, Response, NextFunction } from 'express'
import { getAllPollsService, getPollByIdService } from '../services/poll-service'
import { Poll } from '../models/Poll'
import { updateOnePoll } from '../daos/SQL/poll-dao'
export const pollingRouter = express.Router()

pollingRouter.get('/', async (req: Request, res: Response) => {
    let allPolls = await getAllPollsService()
    res.json(allPolls)
})

pollingRouter.get('/:pollId', async (req: Request, res: Response) => {
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

// Update a Poll
pollingRouter.patch('/', async (req: Request, res: Response, next: NextFunction) => {

    let { pollId, pollDate, pollName, democraticPercent, republicanPercent, stateId, margin } = req.body

    if ((pollId = Number && pollId)) {
        let updatedPoll: Poll = {
            pollId,
            pollName,
            pollDate,
            democraticPercent,
            republicanPercent,
            stateId,
            margin,
        }
        updatedPoll.pollName = pollName || undefined
        updatedPoll.pollDate = pollDate || undefined
        updatedPoll.democraticPercent = democraticPercent || undefined
        updatedPoll.republicanPercent = republicanPercent || undefined
        updatedPoll.stateId = stateId || undefined
        updatedPoll.margin = margin || undefined

        try {
            await updateOnePoll(updatedPoll)

            res.send('You have succesfully updated this poll')
        }

        catch (e) {
            next(e)
        }
    } else if ((!stateId)) {
        res.status(400).send("You must include a pollId number for the poll you wish to update.")
    }
})

