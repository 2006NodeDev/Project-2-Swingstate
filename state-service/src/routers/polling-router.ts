import express, { Request, Response, NextFunction } from 'express'
import { getAllPollsService, getPollByIdService } from '../services/poll-service'
import { Poll } from '../models/Poll'
import { updateOnePoll, addNewPoll } from '../daos/SQL/poll-dao'
<<<<<<< HEAD
//import { findUsersForStateID } from '../utils/retrieve-user-thersholds'
=======
import { userServiceGetThresholdByStateId } from '../remote/user-service/get-thresholds-by-state-id'
import { UserAndPollingThreshold } from '../models/UserAndPollingThreshold'
import { userAndThresholdDTOConverter } from '../utils/userAndThresholdDTO-to-userAndThreshold'
>>>>>>> 0ddaf39e1732048b1796fc1755c6e022b910da74
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
//add a new poll
pollingRouter.post('/new-poll', async (req:Request, res:Response) =>{
    let { pollId, pollDate, pollName, democraticPercent, republicanPercent, stateId, margin } = req.body

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
<<<<<<< HEAD
            
            let newPoll:Poll = await addNewPoll(updatedPoll)


            //let userPollingThresholds = await findUsersForStateID(newPoll.stateId)
            //The commented function above is designed to retrieve the users that care about the state this poll takes place in
            //compare the margin for each user, and determine if this the difference between this poll's margin and previous poll is large enough to trigger an alert
            //return (or console.log) the list of users that need to be alerted via pubsub)
            res.json(newPoll)
        }

=======
            //places the poll into our postgreSQL database
            let newPoll:Poll = await addNewPoll(updatedPoll)
            //querryies the user service for the thresholds and users associated with the state the poll is from
            let userPollingThresholds:[] = await userServiceGetThresholdByStateId(newPoll.stateId)
            //reformats the SQL information into a more js-readable format
            let reformattedThresholds:UserAndPollingThreshold[] = userPollingThresholds.map(userAndThresholdDTOConverter)
            //checks to see if the margin of the poll exceeds the threshold set by the user
            for(let threshold of reformattedThresholds){
                if(threshold.pollingThreshold <= newPoll.margin){
                    //to laura- this is where you can build your pubsub function- you can access the userId and their email through the 'threshold' object
                    console.log(`Send a pubSub querry for the user with the following userId: ${threshold.userId} and email: ${threshold.email}`)
                }
            }
            res.json(newPoll)
        }

>>>>>>> 0ddaf39e1732048b1796fc1755c6e022b910da74
        catch (e) {
            console.log(e)
        }
})
