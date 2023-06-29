const express = require('express');
const router = express.Router();
const utils = require("../utils");
const db=require('../db');
const multer = require("multer");
const upload = multer({ dest: "images",filename:(req,file,cb)=>{
    cb(null,`${Date.now()}--${file.originalname}`);
} });

router.post('/insecticides',upload.single("image"),(request,response)=>{
    const filename = request.file.filename;

    if (!filename || filename.length == 0) {
        response.send("your image uploading did not work, please try again");

    }else{
        const {title,description,price}=request.body;
        const query='insert into insecticides(title,description,price,image) values(?,?,?,?)';
        db.query(query,[title,description,price,filename],(error,result)=>{
            response.send(utils.createResult(error, result))
        })
    }
    
});
router.get("/insecticides", (request,response) => {
    const query = `select id,title,description,price,image from insecticides`;
    db.query(query, [], (error, users) => {
        if (error) {
            response.send(utils.createErrorResult(error))
        } else if (users.length == 0) {
            response.send(utils.createErrorResult("error while sending your profile"))
        } else {
            response.send(utils.createSuccessResult(users));
        }
    })
});


module.exports=router;