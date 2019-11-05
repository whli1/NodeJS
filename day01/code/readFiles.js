/*
读取文件
浏览器中的JavaScript没有文件操作能力但是Node中的JavaScript有；
fs是 file-system 的简写，文件系统；
在Node中想要进行文件操作必须引入fs这个核心模块
fs提供了所有与文件操作相关的API
 */

//1.引入fs模块
var fs = require('fs');

//2、读取文件
fs.readFile('./hello.txt', (error, data) => {
    //文件中存的是二进制数据，转换为16进制，要将data转换为String类型的数据
    if(error){
        console.log('文件读取失败');
        return;
    }
    console.log(data.toString());
})

//3、文件写入
fs.writeFile('./文件操作.md',
    `读取文件浏览器中的JavaScript没有文件操作能力但是Node中的JavaScript有；fs是 file-system 的简写，文件系统；在Node中想要进行文件操作必须引入fs这个核心模块fs提供了所有与文件操作相关的API`,
    (error) => {
        if(error){
            console.log('文件写入失败');
            return;
        }
        console.log('文件写入成功');
    }
    );
