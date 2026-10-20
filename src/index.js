import express from "express"



const app=express();

app.get("/",(req,res)=>{
    res.send("Are madharchod");
})


app.listen(3000,()=>{
    console.log("Server is runnin on port 3000");
})