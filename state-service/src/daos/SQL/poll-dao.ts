import { PoolClient } from "pg";
import { connectionPool } from ".";
import {pollDTOtoPollConverter} from '../../utils/pollDTO-to-Poll-converter'
import {Poll} from '../../models/Poll'

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