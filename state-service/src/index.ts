import express, { Request, Response } from 'express'
import { loggingMiddleware } from './middleware/logging-middleware'
import { corsFilter } from './middleware/cors-filter'
// import { userTopic } from './messaging/index'
import './event-listeners/new-state'
import { stateRouter } from './routers/state-router'
import { pollingRouter } from './routers/polling-router'
import { logger, errorLogger } from './utils/loggers'
//import { JWTVerifyMiddleware } from './middleware/jwt-verify-middleware'

//logger.info(userTopic);

const app = express()

app.use(express.json({ limit: '50mb' }))

app.use(loggingMiddleware)
app.use(corsFilter)
//app.use(JWTVerifyMiddleware)

app.use('/states', stateRouter)
app.use('/polls', pollingRouter)

app.get('/health', (req: Request, res: Response) => {
    res.sendStatus(200)
})

app.use((err, req, res, next) => {

    if (err.statusCode) {

        res.status(err.statusCode).send(err.message)
    } else {

        logger.error(err);
        errorLogger.error(err);

        res.status(500).send('Oops, Something went wrong')
    }
})

app.listen(2021, () => {
    logger.info('Server Has Started');

})

//Uncaught Errors write out a fatal log, then close the program
process.on('uncaughtException', err => {
    logger.fatal(`Uncaught Exception: ${err.message} ${err.stack}`)
    errorLogger.fatal(`Uncaught Exception: ${err.message} ${err.stack}`)
    process.exit(1)
})