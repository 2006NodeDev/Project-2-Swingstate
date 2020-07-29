import { PoolClient } from "pg"
import { connectionPool } from "."
import { StateNotFoundError } from "../../errors/stateNotFoundError"
import { InvalidEntryError } from "../../errors/InvalidEntryError"
import { State } from "../../models/State"
import { StateDTOtoStateConvertor } from "../../utils/StateDTO-to-State-converter"

// Get All States
export async function getAllStates(): Promise<State[]> {

    let client: PoolClient
    try {
        client = await connectionPool.connect()

        let results = await client.query(`select s."state_id", s."stateName", s."democratic_candidate", s."republican_candidate", s."registration_link", s."voting_location", s."stateImage" from swingstate_state_service.states s order by s."state_id";`)
        return results.rows.map(StateDTOtoStateConvertor)

    } catch (e) {
        console.log(e)
        throw new Error('Unhandled Error Occured')

    } finally {
        client && client.release()
    }
}

// Get States by Id
export async function getStatesById(id: number): Promise<State> {
    let client: PoolClient
    try {

        client = await connectionPool.connect()

        let results = await client.query(`select s."state_id", s."stateName", s."democratic_candidate", s."republican_candidate", s."registration_link", s."voting_location", s."stateImage" from swingstate_state_service.states s where s."state_id" = $1;`,
            [id])

        if (results.rowCount === 0) {
            throw new Error('State Not Found')
        }
        return StateDTOtoStateConvertor(results.rows[0])

    } catch (e) {
        if (e.message === 'State Not Found') {
            throw new StateNotFoundError()
        }
        console.log(e)
        throw new Error('Unhandled Error Occured')

    } finally {
        client && client.release()
    }
}

//Submit a New State
export async function saveOneState(newState: State): Promise<State> {
    let client: PoolClient
    try {
        client = await connectionPool.connect()

        await client.query('BEGIN;')

        let results = await client.query(`insert into swingstate_state_service.states ("stateName", "democratic_candidate", "republican_candidate", "registration_link", "voting_location", "stateImage")
        values($1,$2,$3,$4,$5,$6) returning "state_id";`, [newState.stateName, newState.democraticCandidate, newState.republicanCandidate, newState.registrationLink, newState.votingLocation, newState.stateImage])

        newState.stateId = results.rows[0].state_id

        await client.query('COMMIT;')

        if (results.rowCount === 0) {
            throw new Error('Not Submitted')
        } else {
            return newState
        }

    } catch (e) {
        client && client.query('ROLLBACK;')
        if (e.message === 'Not Submitted') {
            throw new InvalidEntryError()
        }
        console.log(e)
        throw new Error('Unhandled Error Occured')

    } finally {
        client && client.release();
    }
}

// Update a State
export async function updateOneState(updatedState: State): Promise<State> {
    let client: PoolClient
    try {
        client = await connectionPool.connect()

        await client.query('BEGIN;')

        if (updatedState.stateName) {
            let results = await client.query(`update swingstate_state_service.states set "stateName" = $1 where "state_id" = $2;`, [updatedState.stateName, updatedState.stateId])

            if (results.rowCount === 0) {
                throw new Error('State not found')
            }
        }

        if (updatedState.democraticCandidate) {
            let results = await client.query(`update swingstate_state_service.states set "democratic_candidate" = $1 where "state_id" = $2;`, [updatedState.democraticCandidate, updatedState.stateId])

            if (results.rowCount === 0) {
                throw new Error('State not found')
            }
        }

        if (updatedState.republicanCandidate) {
            let results = await client.query(`update swingstate_state_service.states set "republican_candidate" = $1 where "state_id" = $2;`, [updatedState.republicanCandidate, updatedState.stateId])

            if (results.rowCount === 0) {
                throw new Error('State not found')
            }
        }

        if (updatedState.registrationLink) {
            let results = await client.query(`update swingstate_state_service.states set "registration_link" = $1 where "state_id" = $2;`, [updatedState.registrationLink, updatedState.stateId])

            if (results.rowCount === 0) {
                throw new Error('State not found')
            }
        }

        if (updatedState.votingLocation) {
            let results = await client.query(`update swingstate_state_service.states set "voting_location" = $1 where "state_id" = $2;`, [updatedState.votingLocation, updatedState.stateId])

            if (results.rowCount === 0) {
                throw new Error('State not found')
            }
        }

        if (updatedState.stateImage) {
            let results = await client.query(`update swingstate_state_service.states set "stateImage" = $1 where "state_id" = $2;`, [updatedState.stateImage, updatedState.stateId])

            if (results.rowCount === 0) {
                throw new Error('State not found')
            }
        }

        await client.query('COMMIT;')

        return updatedState

    } catch (e) {
        client && client.query('ROLLBACK;')

        if (e.message === 'State not found') {
            throw new StateNotFoundError()
        }
        console.log(e)
        throw new Error('Unhandled Error Occured')

    } finally {
        client && client.release();
    }
}

// Delete a State
export async function deleteState(deletedState: State): Promise<State> {
    let client: PoolClient
    try {
        client = await connectionPool.connect()

        let results = await client.query(`delete from swingstate_state_service.states where "state_id" = $1;`, [deletedState.stateId])

        if (results.rowCount === 0) {
            throw new Error('State not found')
        }
        return deletedState

    } catch (e) {
        if (e.message === 'State not found') {
            throw new StateNotFoundError()
        }
        console.log(e)
        throw new Error('Unhandled Error Occured')

    } finally {
        client && client.release();
    }
}