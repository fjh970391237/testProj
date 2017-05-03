# vue_gulp #

## 项目介绍
本项目是一个简易项目，利用gulp整合vue,生成压缩的html的简单demo：

## 使用说明

- 本项目使用包管理工具NPM，因此需要先把本项目所依赖的包下载下来：
```
$ npm install
```

- 启动压缩合并
```
$ gulp html
```

- 然后会在vueDemo页面中生成压缩合并好的页面！

- 如果不需要压缩版页面，使用命令 $ gulp fileinclude


## 目录结构说明
```
├─vueDemo # 编译后生成的所有代码、资源（虽然只是简单的从源目录迁移过来）
└─gulpMng
         ├─node_modules # 利用npm管理的所有包及其依赖
         ├─gulpfile.js  # gulp配置
         ├─package.json # npm的配置文件
         └─src # 当前项目的源码
              ├─include # 需要合并的头尾文件
              ├─html    # 处理的各个页面
                 ├─aa   # 业务模块
                 └─xx.html # 具体页面
    
├─xx.html # 其它测试页面
└─vuestrap # vue组件文件
```

