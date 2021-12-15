import express from 'express';
import router from './routes/userRoutes.mjs'
const port =3000 || process.env.port;

const app=express();
app.use(express.json());

app.use('/users',router);

app.listen(port,()=>{
    console.log(`The application is listening on http://localhost:${port}`);
})



