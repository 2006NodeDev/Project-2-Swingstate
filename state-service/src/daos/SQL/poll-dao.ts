import { PoolClient } from "pg";
import { connectionPool } from ".";
import {pollDTOtoPollConverter} from '../../utils/pollDTO-to-Poll-converter'
import { Poll } from '../../models/Poll'
import {PollNotFoundError} from '../../errors/pollNotFoundError'


// Get all polls
export async function getAllPolls(): Promise<Poll[]>{
    let client : PoolClient
    try{
        client = await connectionPool.connect()
        let result = await client.query('select * from swingstate_state_service.polls p order by p."poll_date"')
        return result.rows.map(pollDTOtoPollConverter)
    }catch(e){
        console.log(e)
        throw new Error('An error occured while retrieving all polls')
    }finally{
        client && client.release()
    }
}

// Poll by Id
export async function getPollById(pollId:number): Promise<Poll>{
    let client : PoolClient
    try{
        client = await connectionPool.connect()
        let result = await client.query(`select * from swingstate_state_service.polls p where p.poll_id =${pollId} order by p.poll_date;`)
        let formattedResult
        [formattedResult] = result.rows
        return pollDTOtoPollConverter(formattedResult)
    }catch(e){
        console.log(e)
        throw new Error('An error occured while retrieving a poll by Id')
    }
}

// Update a Poll
export async function updateOnePoll(updatedPoll: Poll): Promise<Poll> {
    let client: PoolClient
    try {
        client = await connectionPool.connect()

        await client.query('BEGIN;')

        if (updatedPoll.pollName) {
            let results = await client.query(`update swingstate_state_service.polls set "poll_name" = $1 where "poll_id" = $2;`, [updatedPoll.pollName, updatedPoll.pollId])

            if (results.rowCount === 0) {
                throw new Error('Poll not found')
            }
        }

        if (updatedPoll.pollDate) {
            let results = await client.query(`update swingstate_state_service.polls set "poll_date" = $1 where "poll_id" = $2;`, [updatedPoll.pollDate, updatedPoll.pollId])

            if (results.rowCount === 0) {
                throw new Error('Poll not found')
            }
        }

        if (updatedPoll.democraticPercent) {
            let results = await client.query(`update swingstate_state_service.polls set "democratic_percent" = $1 where "poll_id" = $2;`, [updatedPoll.democraticPercent, updatedPoll.pollId])

            if (results.rowCount === 0) {
                throw new Error('Poll not found')
            }
        }

        if (updatedPoll.republicanPercent) {
            let results = await client.query(`update swingstate_state_service.polls set "republican_percent" = $1 where "poll_id" = $2;`, [updatedPoll.republicanPercent, updatedPoll.pollId])

            if (results.rowCount === 0) {
                throw new Error('Poll not found')
            }
        }

        if (updatedPoll.margin) {
            let results = await client.query(`update swingstate_state_service.polls set "margin" = $1 where "poll_id" = $2;`, [updatedPoll.margin, updatedPoll.pollId])

            if (results.rowCount === 0) {
                throw new Error('Poll not found')
            }
        }

        await client.query('COMMIT;')

        return updatedPoll

    } catch (e) {
        client && client.query('ROLLBACK;')

        if (e.message === 'Poll not found') {
            throw new PollNotFoundError()
        }
        console.log(e)
        throw new Error('Unhandled Error Occured')

    } finally {
        client && client.release();
    }
}

export async function addNewPoll(newPoll: Poll): Promise<Poll> {
    let client: PoolClient
    try{
        client = await connectionPool.connect()
        let newlyCreatedPoll = await client.query(`insert into swingstate_state_service.polls(poll_name , poll_date , democratic_percent , republican_percent, state_id, margin)
        values ('${ newPoll.pollName}', now(), ${newPoll.democraticPercent}, ${newPoll.republicanPercent}, ${newPoll.stateId}, ${newPoll.democraticPercent}-${newPoll.republicanPercent});`)

        newlyCreatedPoll = await client.query('select * from swingstate_state_service.polls order by poll_id desc limit 1;')

        let properlyFormattedPoll:Poll = pollDTOtoPollConverter(newlyCreatedPoll.rows[0])

        return properlyFormattedPoll

    }catch(e){

        console.log(e)

        throw(e)

    }finally{

        client && client.release()
        
    }

}