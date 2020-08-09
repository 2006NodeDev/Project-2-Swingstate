import {PubSub} from '@google-cloud/pubsub'

const pubSubClient = new PubSub()

export const pollTopic = pubSubClient.topic('poll-service')

export const pollServiceSubscription = pubSubClient.subscription('user-thresholds-polls')
