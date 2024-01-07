const express=require("express");
const app=express();
const dotenv=require("dotenv");
const connectDB=require('./config/connectDB');
const path=require('path');
dotenv.config();

connectDB();
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})
// app.get('/',(req,res)=>{
//     // res.send('<h1>jai shree ganesh</h1>')
//     res.status(200).send({
//         "success":true,
//         "message":"completed"
//     })
// })
app.use('/api/v1/test',require('./routes/userRoutes'));
app.use('/api/v1/trans',require('./routes/transactionRoutes'));
const port=80||process.env.PORT;
app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})