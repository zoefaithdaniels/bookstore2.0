//require("addition.js");
// 
// const http = require('http');
// //port
// const port = parseInt(process.env.port)
// || 4000;


//web server
//  http.createServer( (req, res)=>{
//         const currUrl = req.url;
//         console.log('Url: ', currUrl, '\nMethod: ', req.method);
//         res.writeHead(200, {'Content-type': 'text/html'});
//         switch(currUrl) {
//             case '/':
//                 res.end('You are home');
//             break
//             case '/about':
//                 res.end('About me page');
//             break
//             case '/data':
//                 res.end('Page data');
//             break
//             default:
//                 res.end('Page / content was not found');
//         }
//     }).listen(port, ()=>{
//         console.log(`Server is running at port ${port}`);
//     })
const express = require('express');
const port = parseInt(process.env.port) || 4000;
//Express app
const app = express();
//Router
const route = express.Router();

app.use(
    route
)
//home or /
route.get('/',(req,res)=>{
    res.status(200).send("WELL DONE!!");
})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
    })
