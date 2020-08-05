//import { Response } from "express";


export async function findUsersForStateID(stateId:number) {
    
    const http = require('http');

    http.get(`http://localhost:80/users/`, async (resp) => {
    console.log('got here!')
    // A chunk of data has been recieved.
    //onsole.log(resp.)
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    console.log(data)
    console.log(JSON.parse(data))
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
    
    
}


