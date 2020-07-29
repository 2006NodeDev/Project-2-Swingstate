import {Poll} from '../models/Poll'
import {getAllPolls } from '../daos/SQL/poll-dao'

export async function getAllPollsService(): Promise<Poll[]>{
    return await getAllPolls()
    
}