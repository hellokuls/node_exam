var express = require("express")

let app = express();

app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send('Hello World')
})


app.post('/index', (req, res) => {
    console.log(req.body)
    res.send('请求成功！')
})

app.listen(3001, function () {
    console.log('服务器已启动')
})


