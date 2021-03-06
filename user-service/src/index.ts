import express, { Request, Response, NextFunction } from 'express'
import { userRouter} from './routers/user-router'
import { getUserByUsernameAndPassword } from './daos/SQL/user-dao'
import { AuthenticationError } from './errors/authenticationError'
import { loggingMiddleware } from './middleware/logging-middleware'
//import { sessionMiddleware } from './middleware/session-middleware'
import { corsFilter } from './middleware/cors-filter'
// import { userTopic } from './messaging/index'
import './event-listeners/new-user'
import { JWTVerifyMiddleware } from './middleware/jwt-verify-middleware'
import jwt from 'jsonwebtoken'
import { logger, errorLogger } from './utils/loggers'

// logger.debug(userTopic);

const app = express()

app.use(express.json({limit:'50mb'}))

app.use(loggingMiddleware)
app.use(corsFilter)
app.use(JWTVerifyMiddleware)

app.use('/users', userRouter)

app.get('/health', (req:Request,res:Response)=>{
    res.sendStatus(200)
})

app.post('/login', async (req:Request, res:Response, next:NextFunction)=>{
    
    let username = req.body.username
    let password = req.body.password
    
    if(!username || !password){
        throw new AuthenticationError()
    } else {
        try{
            let user = await getUserByUsernameAndPassword(username, password)
            let token = jwt.sign(user, process.env['SECRET'], {expiresIn: '1h'}) //THE SECRET should be in an env var
            res.header('Authorization', `Bearer ${token}`)
            res.json(user)
        }catch(e){
            next(e)
        }
    }
})

app.use((err, req, res, next) => {

    if (err.statusCode) {
        
        res.status(err.statusCode).send(err.message)
    } else {
       
        logger.error(err)
        errorLogger.error(err)
        
        res.status(500).send('Oops, Something went wrong')
    }
})

app.listen(2020, () => {
    logger.info('Server Has Started');
    
})

//Uncaught Errors write out a fatal log, then close the program
process.on('uncaughtException', err => {
    logger.fatal(`Uncaught Exception: ${err.message} ${err.stack}`)
    errorLogger.fatal(`Uncaught Exception: ${err.message} ${err.stack}`)
    process.exit(1)
})