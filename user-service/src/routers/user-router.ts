import express, { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'
import { updateOneUser, deleteUser, newStateSubscription, deleteSub, getUserThresholds } from '../daos/SQL/user-dao'
// import { authenticationMiddleware } from '../middleware/authentication-middleware'
// import { authorizationMiddleware } from '../middleware/authorization-middleware'
import { saveOneUserService, getUserByIDService, getAllUsersService, getAdditionalUserInfoService } from '../services/user-service'
import { AdditionalUserInfo } from '../models/AdditonalUserInfo'

export const userRouter = express.Router()

// userRouter.use(authenticationMiddleware)

// Get All Users

userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  
    try {
        let allUsers = await getAllUsersService()
        res.json(allUsers)
    } catch (e) {
        next(e)
    }
})

//Get Users by id
userRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {

    let { id } = req.params

    if (isNaN(+id)) {
        res.status(400).send('Id must be a number')
    } else {
        try {
            let user = await getUserByIDService(+id)
            res.json(user)
        } catch (e) {
            next(e)
        }
    }
})
userRouter.get('/additional-user-info/:userId', async (req: Request, res: Response, next: NextFunction) =>{
    let {userId} = req.params
    if (isNaN(+userId)) {
        res.status(400).send('Id must be a number')
    } else {
        try {
            let user:AdditionalUserInfo[] = await getAdditionalUserInfoService(+userId)
            res.json(user)
        } catch (e) {
            next(e)
        }
    }
})

// Save a New User
userRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {

    let { username, password, email, homeState, userImage } = req.body

    if ((username = String && username) && (password = String && password) && (email = String && email)) {

        let newUser: User = {
            user_id: 0,
            username,
            password,
            email,
            homeState,
            userImage,
            role: 'User'
        }

        try {
            let savedUser = await saveOneUserService(newUser)
            res.json(savedUser)
        } catch (e) {
            next(e)
        }
    } else if ((!username)) {
        res.status(400).send("You must include a username.")
    } else if ((!password)) {
        res.status(400).send("You must include a password.")
    } else if ((!email)) {
        res.status(400).send("You must include an email.")
    }
})

// Update a User
userRouter.patch('/', async (req: Request, res: Response, next: NextFunction) => {

    let { user_id, username, password, email, homeState, userImage, role } = req.body

    if ((user_id = Number && user_id)) {
        let updatedUser: User = {
            user_id,
            username,
            password,
            email,
            homeState,
            userImage,
            role
        }
        updatedUser.email = email || undefined
        updatedUser.username = username || undefined
        updatedUser.password = password || undefined
        updatedUser.user_id = user_id || undefined
        // updatedUser.role = role || undefined

        try {
            await updateOneUser(updatedUser)

            res.send('You have succesfully upd ated this user')
        }

        catch (e) {
            next(e)
        }
    } else if ((!user_id)) {
        res.status(400).send("You must include a userId number for the user you wish to update.")
    }
})

// Delete a User
userRouter.delete('/', async (req: Request, res: Response, next: NextFunction) => {

    let { user_id } = req.body

    if ((user_id = Number && user_id)) {

        let deletedUser: User = {

            username: '',
            password: '',
            user_id,
            email: '',
            homeState: '',
            userImage: '',
            role: ''
        }

        try {
            await deleteUser(deletedUser)

            res.send('You have succesfully deleted this user')

        } catch (e) {
            next(e)
        }
    } else if ((!user_id)) {
        res.status(400).send("You must include a userId number for the user you wish to delete.")
    }
})

// Save a New Subscription
userRouter.post('/additional-user-info/subscription', async (req: Request, res: Response, next: NextFunction) => {

    let { userId, stateId, updateFrequency, pollingThreshold } = req.body

    if ((userId = Number && userId) && (stateId = Number && stateId) && (updateFrequency = Number && updateFrequency) && (pollingThreshold = Number && pollingThreshold)) {

        let newSub: AdditionalUserInfo = {
            userId,
            stateId,
            updateFrequency,
            pollingThreshold,  
        }

        try {
            let savedUser = await newStateSubscription(newSub)
            res.json(savedUser)
        } catch (e) {
            next(e)
        }
    } else if ((!userId)) {
        res.status(400).send("You must include a userId.")
    } else if ((!stateId)) {
        res.status(400).send("You must include a stateId.")
    } else if ((!updateFrequency)) {
        res.status(400).send("You must include an update frequency.")
    }else if ((!pollingThreshold)) {
        res.status(400).send("You must include a polling threshold.")
    }
})

// Delete a subscription
userRouter.delete('/additional-user-info/subscription', async (req: Request, res: Response, next: NextFunction) => {

    let { userId, stateId } = req.body

    if ((userId = Number && userId) && (stateId = Number && stateId)) {

        let deletedSub: AdditionalUserInfo = {

            userId,
            stateId,
            updateFrequency: 0,
            pollingThreshold: 0,
        }

        try {
            await deleteSub(deletedSub)

            res.send('You have succesfully deleted this subscription')

        } catch (e) {
            next(e)
        }
    } else if ((!stateId)) {
        res.status(400).send("You must include a stateId number for the subscription you wish to unsubscribe from.")
    }else if ((!userId)) {
        res.status(400).send("You must include a userId number for the subscription you wish to unsubscribe from.")
    }
})
userRouter.get('/user-thresholds/:stateId', async (req:Request, res:Response, next:NextFunction) =>{
    let {stateId} = req.params

    
    try{
    let userAndAdditionalInfo = await getUserThresholds(+stateId)
    res.json(userAndAdditionalInfo)
    }catch(e){
        next(e)
    }
})

