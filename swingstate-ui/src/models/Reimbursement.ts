export class Reimbursement {
    reimbursementId: number
    author: number
    amount: number
    dateSubmitted: Date
    dateResolved: string
    description: string
    resolver: number
    status: number
  type: number
  email: string
  }
  
  export class ReimbursementStatus {
    statusId: number
    status: string
  }
  
  export class ReimbursementType {
    typeId: number
    type: string 
  }