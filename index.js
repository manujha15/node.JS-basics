const http=require('http');
const fs=require('fs');
const express=require('express');
const url=require('url');

const app=express();
app.get("/", (req, res)=>{
    return res.send("hello home page")
})
app.get("/about", (req, res)=>{
    return res.send("hello home page")
})
function myhandler(req, res){}

const myServer=http.createServer((app) => {

});
myServer.listen(8000,()=>console.log("server start"));