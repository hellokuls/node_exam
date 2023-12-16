var events = require("events")

// 事件触发与事件监听器功能的封装
var eventEmitter = new events.EventEmitter();


var connectHandler = function connected() {
    console.log("连接成功")

    eventEmitter.emit('data_recevied')
}



eventEmitter.on('connection', connectHandler);

// 移除监听
// eventEmitter.removeListener('connection', connectHandler)


eventEmitter.on('data_recevied', function () {
    console.log('数据接收成功')
})


eventEmitter.emit('connection')

console.log("程序执行完成")