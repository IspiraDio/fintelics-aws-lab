const express = require('express'),
    bodyParser = require('body-parser');
const {aws,s3} = require('./config/config');


const s3upload = require('./s3-upload/s3-multer');


const app = express();

app.use(bodyParser.json());

app.use('/s3upload',s3upload)

app.listen(3000, function () {
    console.log('app listening on port 3000!');
});

