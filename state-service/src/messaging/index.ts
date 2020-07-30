import {PubSub} from '@google-cloud/pubsub'

const pubSubClient = new PubSub()

export const userTopic = pubSubClient.topic('projects/focal-legacy-279818/topics/user-service')
