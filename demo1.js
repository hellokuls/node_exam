var http = require("http")
var fs = require("fs")
var path = require("path")
var express = require("express");
const querystring = require("querystring")
let urlObj = require("url");
var server = http.createServer()

server.listen(8080, function () {
    console.log('正在运行中....')
})

server.on('request', function (request, response) {
    let url = request.url;
    let method = request.method;
    // 第二个参数为 true，返回的对象当中会解析出 query 参数
    const obj = urlObj.parse(url, true)
    // console.log(obj)
    // console.log(request.headers);s
    console.log(url);
    console.log(method);

    if (method == 'GET' && obj.pathname == '/index'){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

        fs.readFile(path.join(__dirname, './index.html'),'utf-8', (err, data) =>{
            if (err) return console.log('读取失败...');
            response.end(data);
        });

    }else {
        response.writeHead(404, {'content-type': 'text/plain;charset=utf-8', 'aaa':'dddddd'})
    }
});

server.on('request', function (request, response) {
    let str = ""

    request.on('data', chunk =>{
        str += chunk;
    })

    request.on('end', () =>{
        console.log(str);
        let obj = querystring.parse(str);
        console.log(obj);
        response.end('post')
    });
});

console.log("Server running at port 8080")