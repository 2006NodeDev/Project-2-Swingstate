//import { Response } from "express";

import { logger, errorLogger } from "./loggers";


export async function findUsersForStateID(stateId:number) {
    
    const http = require('http');

    http.get(`http://localhost:80/users/`, async (resp) => {
    //logger.debug('got here!')

    // A chunk of data has been recieved.
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    //logger.debug(data)
    //logger.debug(JSON.parse(data))

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        logger.debug(JSON.parse(data).explanation);
    });

    }).on("error", (err) => {
        logger.error("Error: " + err.message);
        errorLogger.error(err);
    });
    
    
}