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
        throw new Error('Unhandeled error occured')
    }finally{
        client && client.release()
    }
}