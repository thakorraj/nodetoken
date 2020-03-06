const express=require('express');
var fs=require('fs');
var path=require('path');
var task=require('./data/task');
const app=express();

app.get('/about',(req,res)=> res.sendFile(path.join(__dirname,'public',"about.html"),(err,content) =>{
    if(err) throw err;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(content);
}));

app.get('/dinos',(req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'});
// res.end(JSON.stringify(task));
res.send(task);
});

app.get('/:name',(req,res)=> res.send("Hello from Express from "+req.params.name));
const PORT = 5000;

app.listen(PORT,() => console.log(`Server running port ${PORT}`));