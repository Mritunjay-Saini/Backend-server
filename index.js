import express from "express";
import cors from "cors";
const app=express()
 app.use(cors({
    origin:"https://frontend-client-iota-eight.vercel.app/",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
 }))
 


app.get("/",(req,res)=>{
    res.send("heelo")

})
app.get("/:color",(req,res)=>{
    res.send(req.params.color)

    });

app.listen(5000,()=>{
    console.log("server on")
})