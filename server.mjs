import express from 'express';
// import fs from 'fs';
// import router from './routes/userRoutes.mjs';
const port =3000 || process.env.port;

const app=express();
app.use(express.json());

// const router= express.Router();
app.use('/users',router);

// const getUser= (req,res)=>{
//     const user=fs.readFile('./../data/user.json');
//     res.status(200).send(user);
// }
// const postUser= (req,res)=>{
//     if(!req.body.id || !req.body.name || !req.body.email || !req.body.address){
//         res.status(400).send('invalid data');
//     }
//     else {
//         const newUser= fs.writeFile('./../data/user.json');
//         res.status(200).json({
//             status :"success",
//             data:newUser
//         })

//     }
// }

// const router=express.Router();

router
    .route('/')
    .get(getUser)
    .post(postUser);



app.listen(port,()=>{
    console.log(`The application is listening on http://localhost:${port}`);
})



