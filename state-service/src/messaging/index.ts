import {PubSub} from '@google-cloud/pubsub'

const pubSubClient = new PubSub();
const pubSubClient2 = new PubSub();
const userTopicPath = 'projects/focal-legacy-279818/topics/user-service';  //check to see if we are using this
const pollTopicPath = 'projects/project2-285706/topics/pollToUserTopic';  //replace with correct address upon deployment

export const userTopic = pubSubClient.topic(userTopicPath);
export const pollTopic = pubSubClient2.topic(pollTopicPath);
/*export const pollTopic2 = getPollTopic();

async function getPollTopic(){
    let [topics] = await pubSubClient2.getTopics();
    return topics.find((topic)=>{
        return topic.name === pollTopicPath;
    })
}*/
