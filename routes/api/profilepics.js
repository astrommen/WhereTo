const keys = require("../../config/keys");
const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const ProfilePic = require("../../models/profilepic")
const multer = require("multer");
var AWS = require("aws-sdk");

// Multer ships with storage engines DiskStorage and MemoryStorage
// And Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

// get all pics route "/api/profilePics"
router.route("/").get((req, res, next) => {
    ProfilePic.find(
        {},
        null,
        {
            sort: { createAt: 1 }
        },
        (err, pics) => {
            if (err) {
                return next(err);
            }
            res.status(200).send(pics);
        }
    );
});

// Route to get a single existing GO data (needed for the Edit functionality)
router.route("/:id").get((req, res, next) => {
    ProfilePic.findById(req.params.id, (err, go) => {
      if (err) {
        return next(err);
      }
      res.json(go);
    });
});

// Route to upload the pic
// In upload.single("file") - the name inside the single-quote is the name of the field that is goin gto be uploaded.
router.post("/upload", upload.single("file"), function(req, res){
    const file = req.file;
    console.log("this is file",file);
    const s3FileURL = keys.AWS_Uploaded_File_URL_LINK;

    let s3bucket = new AWS.S3({
        accessKeyId: keys.AWS_ACCESS_KEY_ID,
        secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
        region: keys.AWS_REGION
    });

    //Where you want to store your file
    //TODO add user name to file name to make unique
    var params = {
        Bucket: keys.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read"
    };

    s3bucket.upload(params, function(err, data) {

        if (err) {

        res.status(500).json({ error: true, Message: err });

        } 
        else {

            res.send({ data });

            var newFileUploaded = {

                // description: req.body.description,
                fileLink: s3FileURL + file.originalname,
                s3_key: params.Key
            };

            var profilepic = new ProfilePic(newFileUploaded);

            profilepic.save(function(error, newFile) {

                if (error) {
                    
                    throw error;

                }
            });
        }
    });
});


// Route to edit existing record's description field
// Here, I am updating only the description in this mongo record. Hence using the "$set" parameter
router.route("/edit/:id").put((req, res, next) => {
    ProfilePic.findByIdAndUpdate(
      req.params.id,
      { $set: { description: Object.keys(req.body)[0] } },
      { new: true },
        (err, updateProfilePic) => {
            if (err) {
            return next(err);
            }
            res.status(200).send(updateProfilePic);
        }
    );
});

// Router to delete a DOCUMENT file
router.route("/:id").delete((req, res, next) => {
    ProfilePic.findByIdAndRemove(req.params.id, (err, result) => {
      if (err) {
        return next(err);
      }
      //Now Delete the file from AWS-S3
      // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
      let s3bucket = new AWS.S3({
        accessKeyId: keys.AWS_ACCESS_KEY_ID,
        secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
        region: keys.AWS_REGION
      });
  
      let params = {
        Bucket: keys.AWS_BUCKET_NAME,
        Key: result.s3_key
      };
  
        s3bucket.deleteObject(params, (err, data) => {
            if (err) {
            console.log(err);
            } else {
                res.send({
                    status: "200",
                    responseType: "string",
                    response: "success"
                });
            }
        });
    });
});
  

module.exports = router;

// route to edit exisit