
const express = require('express');
const router = express.Router();
const utils = require("../utils");
const db=require('../db');
const jwt=require('jsonwebtoken');
const config=require('../config');
const multer = require("multer");
const upload = multer({ dest: "images",filename:(req,file,cb)=>{
    cb(null,`${Date.now()}--${file.originalname}`);
} });

router.post('/signup',(request,response)=>{
    const {name,email,mobile,password}=request.body;
    const query='insert into user(name,email,mobile,password) values(?,?,?,?)';
    db.query(query,[name,email,mobile,password],(error,result)=>{
        response.send(utils.createResult(error, result))
    })
});

router.post('/signin',(request,response)=>{
    const {email,password}=request.body;
    const query='select * from user where email=? and password=?';
    db.query(query,[email,password],(error,users)=>{
        if (error) {
            response.send(utils.createResult(error))
        }
        else if (users.length == 0) {
            response.send(utils.createErrorResult("user does not exist"))
        }
        else {
            const {name, email, id} = users[0];
            const token = jwt.sign({id, name, email}, config.key);
            response.send(utils.createSuccessResult({
                id,
                name,
                email,
                token,
            }));

        }
    })
});

router.post('/addtocart',upload.single("image"),(request,response)=>{
    const Id=request.user.id;
    const filename = request.file.filename;
    const {title,description,price,quantity}=request.body;
    const query='insert into addtocart(title,description,userId,price,image,quantity) values(?,?,?,?,?,?)';
    db.query(query,[title,description,Id,price,filename,quantity],(error,result)=>{
    response.send(utils.createResult(error, result));
    })
});

// router.post('/productimg',upload.single("image"),(request,response)=>{
//     const Id=request.user.id;
//     const filename = request.file.filename;
//     const query='insert into addtocart(userId,image) values(?,?)';
//     db.query(query,[Id,filename],(error,result)=>{
//     response.send(utils.createResult(error, result));
//     })
// });

router.get('/addtocart',(request,response)=>{
    
    const Id=request.user.id;
    const query='select * from addtocart where userId=?';
    db.query(query,[Id],(error,result)=>{
        response.send(utils.createResult(error, result));
    })
});

router.get('/address',(request,response)=>{
    const Id=request.user.id;
    const query='select address from user where id=?';
    db.query(query,[Id],(error,result)=>{
        response.send(utils.createResult(error, result[0]));
    })
});

router.get('/profile',(request,response)=>{
    const Id=request.user.id;
    const query='select name,email,address,password from user where id=?';
    db.query(query,[Id],(error,result)=>{
        response.send(utils.createResult(error, result[0]));
    })
});

router.put('/editAddress',(request,response)=>{
    const Id=request.user.id;
    const {address}=request.body;
    const query='update user set address=? where id=?';
    db.query(query,[address,Id],(error,result)=>{
        response.send(utils.createResult(error, result));
    });
});

router.put('/changePassword',(request,response)=>{
    const Id=request.user.id;
    const {password}=request.body;
    const query='update user set password=? where id=?';
    db.query(query,[password,Id],(error,result)=>{
        response.send(utils.createResult(error, result));
    });
});

router.put('/editProfile',(request,response)=>{
    const Id=request.user.id;
    const {name,email,address}=request.body;
    const query='update user set name=?,email=?,address=? where id=?';
    db.query(query,[name,email,address,Id],(error,result)=>{
        response.send(utils.createResult(error, result));
     });

});

module.exports=router;