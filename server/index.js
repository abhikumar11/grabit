const express=require("express");
const connectDb = require("./config/db");
const app=express();
app.use(express.json());
connectDb()
app.listen(()=>{
    console.log(`listening on port ${process.env.PORT}`)
})