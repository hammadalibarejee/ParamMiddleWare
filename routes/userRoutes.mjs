import express from "express";
import controller from './../RoutingController/controller.mjs';

getUser= (req,res)=>{
    const user=fs.readFile('./../data/user.json');
    res.status(200).send(user);
}
postUser= (req,res)=>{
    if(!req.body.id || !req.body.name || !req.body.email || !req.body.address){
        res.status(400).send('invalid data');
    }
    else {
        const newUser= fs.writeFile('./../data/user.json');
        res.status(200).json({
            status :"success",
            data:newUser
        })

    }
}

const router=express.Router();

router
    .route('/')
    .get(getUser)
    .post(postUser);


module.exports= router;    