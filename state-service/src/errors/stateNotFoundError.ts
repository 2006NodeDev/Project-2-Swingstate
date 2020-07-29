// State doesn't exist.

import { HttpError } from "./httpError";

export class StateNotFoundError extends HttpError{
    constructor(){
        super(404, 'State Does Not Exist')
    }
}