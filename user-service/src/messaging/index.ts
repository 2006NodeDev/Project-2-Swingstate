import {PubSub} from '@google-cloud/pubsub'

const pubSubClient = new PubSub()

export const userTopic = pubSubClient.topic('projects/focal-legacy-279818/topics/user-service')

export const reimbursementTopic = pubSubClient.topic('projects/focal-legacy-279818/topics/reimbursement-service')