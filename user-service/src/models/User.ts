export class User {
  userId: number 
  username: string
  password: string
  firstName: string
  lastName: string
  email: string
  role: Role
  image?: string
}

export class Role {
  roleId: number 
  role: string
}