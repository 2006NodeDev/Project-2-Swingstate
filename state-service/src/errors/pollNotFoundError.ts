// State doesn't exist.

import { HttpError } from "./httpError";

export class PollNotFoundError extends HttpError{
    constructor(){
        super(404, 'Poll Does Not Exist')
    }
}