// import { imageBucket } from ".";
// import { logger, errorLogger } from "../../utils/loggers";
// export async function saveProfilePicture(contentType:string, imageBase64Data:string, fileName:string){
//     try{
//         let newImage = imageBucket.file(fileName)
//         logger.debug(newImage);
//         await newImage.save(Buffer.from(imageBase64Data, 'base64'), {
//             metadata:{
//                 contentType
//             }
//         })
//         logger.debug(`${fileName} was saved to storage bucket`)
//     } catch(e){
//         errorLogger.error(e);
//         logger.error(e)
//         throw e  
//     }
// }
//# sourceMappingURL=user-images.js.map