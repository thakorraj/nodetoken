var http = require('http');
var fs=require('fs');
var path=require('path');
//let test=test1 => 'hello';
var task=require('./data/task');
const app = http.createServer((req,res)=>{

        if(req.url=='/')
        {
            res.write('Home Page.');
            res.end();
        }

        if(req.url=='/about')
        {
            fs.readFile(path.join(__dirname,'public',"about.html"),(err,content) =>{
                if(err) throw err;
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(content);
            });
        }

        if(req.url=='/api')
        {
            // let tasklist = [
            //     {
            //         name: 'task 1',
            //         desc: 'task 1 dec'
            //     },
            //     {
            //         name: 'task 2',
            //         desc: 'task 2 dec'
            //     },
            //     {
            //         name: 'task 3',
            //         desc: 'task 3 dec'
            //     }
            // ];
            res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify(task));
        }

      //  console.log('request');

});

const PORT = 5000;

app.listen(PORT,() => console.log(`Server running port ${PORT}`));

// app.listen(3000, console.log('Server is Ready'));