import { stateAndPollingInfo } from "./StateAndPollingInfo";

export interface User {
  user_id: number
  username: string
  password: string
  email: string
  homeState?: string
  userImage?: string
  role: string
  stateAndPollingInfo?: stateAndPollingInfo
}