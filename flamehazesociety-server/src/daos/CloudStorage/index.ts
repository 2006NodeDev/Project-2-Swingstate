import {Storage} from '@google-cloud/storage'

export const bucketName = 'flamehazesociety-project-1'

export const bucketBaseUrl = `https://storage.googleapis.com/${bucketName}`

export const imageBucket = new Storage().bucket(bucketName)