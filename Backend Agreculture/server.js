const express=require("express");
const cors=require("cors");
const morgan=require("morgan");
const config=require("./config");
const jwt=require("jsonwebtoken");

const app=express();

app.use(cors("*"));
app.use(express.static('images'));
app.use(express.json());
app.use(morgan("combined"));

app.use((req,res,next)=>{
    if(req.url=='/user/signup' || req.url=='/user/signin' || req.url=='/type/insecticides'){
        next()
    }else{
        const token=req.headers['x-token'];
        if(!token){
            res.send("token missing")
        }else{
            try{
                const user=jwt.verify(token,config.key)
                req.user=user;
                next();
            }catch(ex){
                res.send(ex)
            }
        }
        
    }
})


const userRouter=require('./Routes/user');
const typeRouter=require('./Routes/types');
const biddingRouter=require('./Routes/bidding');


app.use('/user',userRouter);
app.use('/type',typeRouter);
app.use('/bidding',biddingRouter);

app.listen(4500,()=>{
    console.log(`Server started`);
})