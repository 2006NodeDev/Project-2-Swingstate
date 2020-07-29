import {Poll} from '../models/Poll'
import {getAllPolls, getPollById } from '../daos/SQL/poll-dao'

export async function getAllPollsService(): Promise<Poll[]>{
    return await getAllPolls()
}

export async function getPollByIdService(pollId:number): Promise<Poll>{
    return await getPollById(pollId)
}