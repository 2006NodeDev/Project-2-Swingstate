import {PubSub} from '@google-cloud/pubsub'

const pubSubClient = new PubSub()

export const pollTopic = pubSubClient.topic('projects/focal-legacy-279818/topics/poll-service')

export const pollServiceSubscription = pubSubClient.subscription('projects/focal-legacy-279818/subscriptions/user-thresholds-polls')
