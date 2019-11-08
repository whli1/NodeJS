# Node.JS 

>node.js是什么
```
nodejs是JavaScript运行时的平台；既不是语言也不是框架
```

>node.js中的JavaScript
```
1、没有BOM和DOM
2、ECMAScript基本的JavaScript部分
3、在Node中为JavaScript提供了一些服务器级别的API
    例如：
        *文件操作能力
        *http的服务能力
```
>node.js的核心模块
```
引入方式：const fs = require('fs')

Node中为JavaScript提供了一些服务器级别的API,这些API绝大多数都被包装到一个具名的核心模块之中
例如:文件操作的fs核心模块，http服务构建的http模块，path路径操作模块，os操作系统信息模块等
```

####模块化
```
通过requier('./xxx')方法引入其他模块

Node中没有全局作用域，只有模块作用域
外部不能访问内部，内部也不能访问外部
```

>模块间的通信
```
1、require方法的两个作用
   *加载文件模块并执行里面的代码
   *拿到被加载文件中导出的接口对象
2.每个文件都提供一个空对象 exports
    *将每一个学要被外部访问的成员挂载到这个 exports对象上
    
```

####
