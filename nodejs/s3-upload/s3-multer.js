const {s3,s3bucket} = require('../config/config')
const express = require('express')
const router = express.Router();
const multer = require('multer');
const multerS3 = require('multer-s3');

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

router.post('/upload',function (req, res) {
    const multerUpload = multer({
        storage: multerS3({
          s3: s3,
          key: function (req, file, cb) {
            cb(null, Date.now().toString())
          }
        })
      }).array('file', 1);

    multerUpload(req, res, function (err) {
        if (err) {
            res.send('multerUpload Error:' + err);
          }else{
              res.send("Success")
          }
    })
})

module.exports = router