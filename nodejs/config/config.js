const path = require('path');
const configVar = require('dotenv').config({ path: path.join(__dirname, '/.env') });
const aws = require('aws-sdk');


aws.config.update({
    // Your SECRET ACCESS KEY from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
    secretAccessKey: configVar.parsed.AWS_SECRET_ACCESS_KEY,
    // Not working key, Your ACCESS KEY ID from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
    accessKeyId: configVar.parsed.AWS_ACCESS_KEY_ID,
    region: configVar.parsed.AWS_REGION // region of your bucket
});

const s3 = new aws.S3();

module.exports={
    aws,
    s3,
    s3bucket:configVar.parsed.S3_BUCKET

}