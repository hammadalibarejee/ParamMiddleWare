import fs from 'fs';


modules.exports = getUser= (req,res)=>{
    const user=fs.readFile('./../data/user.json');
    res.status(200).send(user);
}

modules.exports = postUser= (req,res)=>{
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
 

modules.exports = tUser,postUser;

// const deleteUser= (req,res)=>{

// }



