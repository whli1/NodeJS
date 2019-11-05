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
    /**
     *  response.write('hello');
     *  response.end();
     *  这种方式比较繁琐，推荐在end时直接返回响应数据
     *  response.end('hello world');
     */

    /**
     * 根据不同访问路径返回不同数据
     *
     */
    switch (request.url) {
        case '/':
            response.end('hello');
            break;
        case '/a':
            response.end('hello a');
            break;
        case '/login':
            response.end('hello login');
            break;
        case '/product':
            let product = [
                {
                    name: '苹果',
                    price: '4.5'
                },
                {
                    name: '香蕉',
                    price: '2.5'
                },
                {
                    name: '西瓜',
                    price: '0.5'
                }
            ];
        //    响应内容只能是二进制数据或者字符串，数组对象布尔值都不可用
            response.end(JSON.stringify(product));
        default:
            response.end('404 Not Found');
            break;
    }


})

//4、绑定端口号，启动服务器
server.listen(3000, () => {
    console.log('服务器启动成功，可以通过http://127.0.0.1:3000/进行访问');
});


