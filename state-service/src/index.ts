import express, { Request, Response } from 'express'
import { reimbursementRouter } from './routers/reimbursement-router'
import { loggingMiddleware } from './middleware/logging-middleware'
import { sessionMiddleware } from './middleware/session-middleware'
import { corsFilter } from './middleware/cors-filter'
// import { userTopic } from './messaging/index'
import './event-listeners/new-state'
import './event-listeners/updated-reimbursement'
import { stateRouter } from './routers/state-router'
import { pollingRouter } from './routers/polling-router'

//console.log(userTopic);

const app = express()

app.use(express.json({ limit: '50mb' }))

app.use(loggingMiddleware)
app.use(corsFilter)
app.use(sessionMiddleware)

app.use('/states', stateRouter)
app.use('/reimbursements', reimbursementRouter)
app.use('/polls', pollingRouter)

app.get('/health', (req: Request, res: Response) => {
    res.sendStatus(200)
})

app.use((err, req, res, next) => {

    if (err.statusCode) {

        res.status(err.statusCode).send(err.message)
    } else {

        console.log(err)

        res.status(500).send('Oops, Something went wrong')
    }
})

app.listen(2020, () => {
    console.log('Server Has Started');

})