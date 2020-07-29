import express, { Request, Response, NextFunction } from 'express'
import { State } from '../models/State'
import { getAllStatesService, getStateByIDService, saveOneStateService } from '../services/state-service'
import { updateOneState, deleteState } from '../daos/SQL/state-dao'

export const stateRouter = express.Router()

// Get All States
stateRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {

    try {
        let allStates = await getAllStatesService()
        res.json(allStates)
    } catch (e) {
        next(e)
    }
})

//Get States by id
stateRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {

    let { id } = req.params

    if (isNaN(+id)) {
        res.status(400).send('Id must be a number')
    } else {
        try {
            let state = await getStateByIDService(+id)
            res.json(state)
        } catch (e) {
            next(e)
        }
    }
})

// Save a New State
stateRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {

    let { stateName, democraticCandidate, republicanCandidate, registrationLink, votingLocation, stateImage } = req.body

    if ((stateName = String && stateName) && (democraticCandidate = String && democraticCandidate) && (republicanCandidate = String && republicanCandidate) && (registrationLink = String && registrationLink) && (votingLocation = String && votingLocation)) {

        let newState: State = {
            stateId: 0,
            stateName,
            democraticCandidate,
            republicanCandidate,
            registrationLink,
            votingLocation,
            stateImage
        }

        try {
            let savedState = await saveOneStateService(newState)
            res.json(savedState)
        } catch (e) {
            next(e)
        }
    } else if ((!stateName)) { //I like the comments at the end of these, but we should make them a little more relevant
        res.status(400).send("You must include a state name. This name must be unique, not that I think you are or anything.")
    } else if ((!democraticCandidate)) {
        res.status(400).send("You must include a Democratic candidate. Don't use sappy stuff, I'm judging you.")
    }
    else if ((!republicanCandidate)) {
        res.status(400).send("You must include a Republican candidate. Not that I mind calling you swine.")
    }
    else if ((!registrationLink)) {
        res.status(400).send("You must include a registration link. I need to know who to look up if you cross me.")
    }
    else if ((!votingLocation)) {
        res.status(400).send("You must include a voting location. Know your place.")
    }
})

// Update a State
stateRouter.patch('/', async (req: Request, res: Response, next: NextFunction) => {

    let { stateId, stateName, democraticCandidate, republicanCandidate, registrationLink, votingLocation, stateImage } = req.body

    if ((stateId = Number && stateId)) {
        let updatedState: State = {
            stateId,
            stateName,
            democraticCandidate,
            republicanCandidate,
            registrationLink,
            votingLocation,
            stateImage
        }
        updatedState.stateName = stateName || undefined
        updatedState.democraticCandidate = democraticCandidate || undefined
        updatedState.republicanCandidate = republicanCandidate || undefined
        updatedState.registrationLink = registrationLink || undefined
        updatedState.votingLocation = votingLocation || undefined
        updatedState.stateImage = stateImage || undefined

        try {
            await updateOneState(updatedState)

            res.send('You have succesfully updated this state')
        }

        catch (e) {
            next(e)
        }
    } else if ((!stateId)) {
        res.status(400).send("You must include a stateId number for the state you wish to update.")
    }
})

// Delete a State
stateRouter.delete('/', async (req: Request, res: Response, next: NextFunction) => {

    let { stateId } = req.body

    if ((stateId = Number && stateId)) {

        let deletedState: State = {
            stateId,
            stateName: '',
            democraticCandidate: '',
            republicanCandidate: '',
            registrationLink: '',
            votingLocation: ''
        }

        try {
            await deleteState(deletedState)

            res.send('You have succesfully deleted this state')

        } catch (e) {
            next(e)
        }
    } else if ((!stateId)) {
        res.status(400).send("You must include a stateId number for the state you wish to delete.")
    }
})