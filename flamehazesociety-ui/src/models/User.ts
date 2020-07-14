export interface User {
    userId: number 
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    role: Role
}
  
export interface Role {
    roleId: number 
    role: string
  }