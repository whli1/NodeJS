/*
Node中的核心模块：http 创建编写服务器
 */

//1、加载http核心模块
const http = require('http');

//2、使用  http.createServer() 方法创建一个 web 服务器
const server = http.createServer()

//3、用来提供服务：发送请求 接受请求 处理请求 反馈(发送响应)

    //注册request请求事件，当接收到客户端的请求时，自动触发 request 请求事件，然后知新规调函数
server.on('request', (request, response) => {
    console.log(`收到客户端的请求,请求路径是${request.url}`);
    response.write('hello');
    //必须要有end
    response.end();
})

//4、绑定端口号，启动服务器
server.listen(3000,()=>{
    console.log('服务器启动成功，可以通过http://127.0.0.1:3000/进行访问');
});


