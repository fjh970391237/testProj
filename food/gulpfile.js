// 引入 gulp
var gulp = require('gulp');
 
// 引入组件
var htmlmin = require('gulp-htmlmin'), //html压缩
    fileinclude  = require('gulp-file-include');//html 合并
    minifycss = require('gulp-clean-css'),//css压缩
    //jshint = require('gulp-jshint'),//js检测
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify');//提示信息  
 
 var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
// 压缩html
gulp.task('html', function() {
    return gulp.src('../html/*.html')  
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/'))  //好吧，摸不透，瞎试
    .pipe(notify({ message: 'html task ok' }));
});
/*文件合并并压缩*/
gulp.task('htmlinclude', function() {
    // 适配src中所有文件夹下的所有html，排除src下的include文件夹中html  
    return gulp.src(['src/**/*.html','!src/include/**.html'] ,{ base:'src/html/' })//,{ base:'.' }
        .pipe(fileinclude({//这个配置，base，表示从哪里生成路径。表示根路径 。{ base:'.' }刚才生成的就是src/html/*.html。没有这个配置，生成路径是从**/*.html来生成{ base:'src/html/' }
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/'))  
    .pipe(notify({ message: 'html yasuo task ok' }));
});
//合并html （拼接） //@@include('include/header.html')
gulp.task('fileinclude', function() {
    // 适配src中所有文件夹下的所有html，排除src下的include文件夹中html  
    gulp.src(['src/**/*.html','!src/include/**.html'] ,{ base:'src/html/' })//,{ base:'.' }
        .pipe(fileinclude({//这个配置，base，表示从哪里生成路径。表示根路径 。{ base:'.' }刚才生成的就是src/html/*.html。没有这个配置，生成路径是从**/*.html来生成{ base:'src/html/' }
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist/'));
});

// 合并、压缩、重命名css   
gulp.task('css', function() {
    return gulp.src('src/css/**/*.css')
    //.pipe(concat('main.css'))//concat 合并代码
    //.pipe(gulp.dest('dist/css'))//把现有的文件丢到  dist文件夹
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())//css 压缩
    .pipe(gulp.dest('dist/css/'))
    .pipe(notify({ message: 'css task ok' }));
});

// images,fonts文件位置   
gulp.task('copyFile', function() {
    return gulp.src(['src/images/**','src/fonts/**'],{ base:'src/' })
    .pipe(gulp.dest('dist/'));
});
 
// 检查js
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
    .pipe(jshint())//js检测
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'lint task ok' }));
});

// 合并、压缩js文件
gulp.task('js', function() {
    gulp.src('src/js/**/*.js')
    //.pipe(concat('all.js'))//concat 合并代码，多个文件合并成一个 all.js  文件
    //.pipe(gulp.dest('dist/js'))//把现有的文件丢到  dest文件夹
    .pipe(rename({ suffix: '.min' }))//rename 重命名  为后缀
    .pipe(uglify())//压缩js文件
    .pipe(gulp.dest('dist/js/'))//处理好的文件存放路径
    .pipe(notify({ message: 'js task ok' }));//在cmd中出现一个提示，message 定义的内容就是提示的信息
});

// 默认任务
gulp.task('default', function(){
    //gulp.run('img', 'css', 'lint', 'js', 'html');
    gulp.run( 'css', 'js', 'html', 'fileinclude','copyFile');
 
    // 监听html文件变化  src文件夹下的html文件变化,包括头部和尾部
    // gulp.watch('src/**/*.html', function(){
    //     gulp.run('fileinclude');
    // });
  
    // 监听html文件变化
    gulp.watch('src/html/*.html', function(){
        gulp.run('htmlinclude');
    });
  
    // Watch .css files
    gulp.watch('src/css/*.css', ['css']);
  
    // Watch .js files
    gulp.watch('src/js/*.js', ['lint', 'js']);
  
    // Watch image files
    //gulp.watch('src/images/*', ['img']);
 
});