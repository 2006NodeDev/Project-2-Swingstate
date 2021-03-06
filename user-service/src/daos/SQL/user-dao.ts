import { PoolClient } from "pg"
import { connectionPool } from "."
import { User } from "../../models/User"
import { AdditionalUserInfo } from "../../models/AdditonalUserInfo"
import { UserDTOtoUserConvertor } from "../../utils/UserDTO-to-User-converter"
import { userInfoDTOToUserInfo } from "../../utils/AdditionalInfoDTO-to-AdditionalInfo"
import { UserNotFoundError } from "../../errors/userNotFoundError"
import { AuthenticationError } from "../../errors/authenticationError"
import { InvalidEntryError } from "../../errors/InvalidEntryError"
import { logger, errorLogger } from "../../utils/loggers"


// Get All Users
export async function getAllUsers(): Promise<User[]> {
    
    let client: PoolClient
    try {
        client = await connectionPool.connect() 
     
        let results = await client.query(`select u."user_id", u."username" , u."password" , u."email" , u."home_state", u."user_image", u."role" from swingstate_user_service.users u;`)

        return results.rows.map(UserDTOtoUserConvertor)

    } catch (e) {
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Unhandled Error Occured')

    } finally {
        client && client.release()
    }
}

// Get users by Id
export async function getUserById(id: number):Promise<User> {
    let client: PoolClient
    try {
      
        client = await connectionPool.connect()
      
        let results = await client.query(`select u."user_id", u."username" , u."password" , u."email" , u."home_state", u."user_image", u."role" from swingstate_user_service.users u where u."user_id" = $1;`,[id])

        if(results.rowCount === 0){
            throw new Error('User Not Found')
        }
        return UserDTOtoUserConvertor(results.rows[0])

    } catch (e) {
        if(e.message === 'User Not Found'){
            throw new UserNotFoundError()
        }
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Unhandled Error Occured')

    } finally { 
        client && client.release()
    }
}
 

//Find Users by Username and Password for Login
export async function getUserByUsernameAndPassword(username:string, password:string):Promise<User>{
    let client: PoolClient
    try {
        client = await connectionPool.connect()

        let results = await client.query(`select u."user_id", u."username" , u."password" , u."email" , u."home_state", u."user_image", u."role" from swingstate_user_service.users u where u."username" = $1 and u."password" = $2;`,[username, password])
      
        if(results.rowCount === 0){
            throw new Error('User Not Found')
        }
        return UserDTOtoUserConvertor(results.rows[0])

    } catch (e) {
        if(e.message === 'User Not Found'){
            throw new AuthenticationError()
        }
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Unhandled Error Occured')

    } finally {
        client && client.release()
    }
}


//Submit a New User
export async function saveOneUser(newUser:User):Promise<User>{
    let client:PoolClient
    try{
        client = await connectionPool.connect()

        await client.query('BEGIN;')

        let results = await client.query(`insert into swingstate_user_service.users ("username","password","email","home_state","user_image","role")
        values($1,$2,$3,$4,$5,$6) returning "user_id";`, [newUser.username, newUser.password, newUser.email, newUser.homeState, newUser.userImage, newUser.role])
        
        newUser.user_id = results.rows[0].user_id  

        await client.query('COMMIT;')

        if (results.rowCount === 0) {
            throw new Error('Not Submitted')
        } else {
            return newUser
        }

    }catch(e){
        client && client.query('ROLLBACK;')
        if(e.message === 'Not Submitted'){
            throw new InvalidEntryError()
        }
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Unhandled Error Occured')

    }finally{
        client && client.release();
    }
}

// Update a User
export async function updateOneUser(updatedUser:User):Promise<User>{
    let client:PoolClient
    try{
        client = await connectionPool.connect()
        
        await client.query('BEGIN;')
    
        if (updatedUser.username) {
            let results = await client.query(`update swingstate_user_service.users set "username" = $1 where "user_id" = $2;`, [updatedUser.username, updatedUser.user_id])

           if(results.rowCount === 0){
                throw new Error('User not found')
            }
        }

        if (updatedUser.password) {
            let results = await client.query(`update swingstate_user_service.users set "password" = $1 where "user_id" = $2;`, [updatedUser.password, updatedUser.user_id])

            if(results.rowCount === 0){
                throw new Error('User not found')
            }
        }

        if (updatedUser.email) {
            let results = await client.query(`update swingstate_user_service.users set "email" = $1 where "user_id" = $2;`, [updatedUser.email, updatedUser.user_id])

            if(results.rowCount === 0){
                throw new Error('User not found')
            }
        }

        if (updatedUser.homeState) {
            let results = await client.query(`update swingstate_user_service.users set "home_state" = $1 where "user_id" = $2;`, [updatedUser.homeState, updatedUser.user_id])

           if(results.rowCount === 0){
                throw new Error('User not found')
            }
        }

        if (updatedUser.userImage) {
            let results = await client.query(`update swingstate_user_service.users set "user_image" = $1 where "user_id" = $2;`, [updatedUser.userImage, updatedUser.user_id])

           if(results.rowCount === 0){
                throw new Error('User not found')
            }
        }

        // if (updatedUser.role) {
        //     let results = await client.query(``, [updatedUser.role, updatedUser.user_id])

        //     if(results.rowCount === 0) {
        //         throw new Error('User not found')
        //     }
        // }
    
        await client.query('COMMIT;')

        return updatedUser
    
    }catch(e){
        client && client.query('ROLLBACK;')
        
        if (e.message === 'User not found') {
            throw new UserNotFoundError()
        }
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Unhandled Error Occured')

    }finally{
        client && client.release();
    }
}

// Delete a User
export async function deleteUser(deletedUser:User):Promise<User>{
    let client:PoolClient
    try{
        client = await connectionPool.connect()
      
        let results = await client.query(`delete from swingstate_user_service.users where "user_id" = $1`, [deletedUser.user_id])

        if(results.rowCount === 0){
            throw new Error('User not found')
        }
        return deletedUser

    }catch(e){
        if (e.message === 'User not found') {
            throw new UserNotFoundError()
        }
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Unhandled Error Occured')

    }finally{
        client && client.release();
    }
}

//get additional user info- their selected states, and info about their
//polling preferences
export async function getAdditionalInfoById(userId: number):Promise<AdditionalUserInfo[]>{
    let client:PoolClient
    try{
        client = await connectionPool.connect()
        let additionalInfo = await client.query(`select b."state_id", b."update_frequency", b."polling_threshold" from swingstate_user_service.user_state_bridge b where b.user_id = ${userId};`)
        let reformattedInfo:AdditionalUserInfo[] = additionalInfo.rows.map((userInfoDTOToUserInfo))
        //logger.debug(reformattedInfo)
        return reformattedInfo
    }catch(e){
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Error with getting Additional Info using User Id')
    }finally{
        client && client.release()
    }
}

//Submit a New State Subscription
export async function newStateSubscription(newSub:AdditionalUserInfo):Promise<AdditionalUserInfo>{
    let client:PoolClient
    try{
        client = await connectionPool.connect()

        await client.query('BEGIN;')

        let results = await client.query(`insert into swingstate_user_service.user_state_bridge ("user_id","state_id","update_frequency","polling_threshold")
        values($1,$2,$3,$4);`, [newSub.userId, newSub.stateId, newSub.updateFrequency, newSub.pollingThreshold])  

        await client.query('COMMIT;')

        if (results.rowCount === 0) {
            throw new Error('Not Submitted')
        } else {
            return newSub
        }

    }catch(e){
        client && client.query('ROLLBACK;')
        if(e.message === 'Not Submitted'){
            throw new InvalidEntryError()
        }
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Unhandled Error Occured')

    }finally{
        client && client.release();
    }
}

// Delete a Subscription
export async function deleteSub(deletedSub:AdditionalUserInfo):Promise<AdditionalUserInfo>{
    let client:PoolClient
    try{
        client = await connectionPool.connect()
      
        let results = await client.query(`delete from swingstate_user_service.user_state_bridge where "state_id" = $1 and "user_id" = $2`, [deletedSub.stateId, deletedSub.userId])

        if(results.rowCount === 0){
            throw new Error('User not found')
        }
        return deletedSub

    }catch(e){
        if (e.message === 'User not found') {
            throw new UserNotFoundError()
        }
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Unhandled Error Occured')

    }finally{
        client && client.release();
    }
}

export async function getUserThresholds(stateId: number) {
    let client:PoolClient
    try{
        client = await connectionPool.connect()

        let userAndAdditionalInfo = await client.query(`select b."polling_threshold", u."user_id", u."email" from swingstate_user_service.user_state_bridge b left join swingstate_user_service.users u on u."user_id"=b."user_id" where "state_id"=${stateId};`)
        let reformattedInfo = []
        reformattedInfo = userAndAdditionalInfo.rows
        return reformattedInfo

    }catch(e){
        logger.error(e)
        errorLogger.error(e)
        throw new Error('Error with getting user+additional info by state id')
    }
}