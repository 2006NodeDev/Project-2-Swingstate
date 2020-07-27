export class ReimbursementDTO{
  reimbursement_id: number
  author: number
  amount: number
  dateSubmitted: Date
  dateResolved: Date
  description: string
  resolver: number
  status: number
  type: number
  email: string
}