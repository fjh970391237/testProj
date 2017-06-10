// ���� gulp
var gulp = require('gulp');
 
// �������
var htmlmin = require('gulp-htmlmin'), //htmlѹ��
    fileinclude  = require('gulp-file-include');//html �ϲ�
    minifycss = require('gulp-clean-css'),//cssѹ��
    //jshint = require('gulp-jshint'),//js���
    uglify = require('gulp-uglify'),//jsѹ��
    concat = require('gulp-concat'),//�ļ��ϲ�
    rename = require('gulp-rename'),//�ļ�����
    notify = require('gulp-notify');//��ʾ��Ϣ  
 
 var options = {
        removeComments: true,//���HTMLע��
        collapseWhitespace: true,//ѹ��HTML
        collapseBooleanAttributes: true,//ʡ�Բ������Ե�ֵ <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//ɾ�����пո�������ֵ <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//ɾ��<script>��type="text/javascript"
        removeStyleLinkTypeAttributes: true,//ɾ��<style>��<link>��type="text/css"
        minifyJS: true,//ѹ��ҳ��JS
        minifyCSS: true//ѹ��ҳ��CSS
    };
// ѹ��html
gulp.task('html', function() {
    return gulp.src('../html/*.html')  
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/'))  //�ðɣ�����͸��Ϲ��
    .pipe(notify({ message: 'html task ok' }));
});
/*�ļ��ϲ���ѹ��*/
gulp.task('htmlinclude', function() {
    // ����src�������ļ����µ�����html���ų�src�µ�include�ļ�����html  
    return gulp.src(['src/**/*.html','!src/include/**.html'] ,{ base:'src/html/' })//,{ base:'.' }
        .pipe(fileinclude({//������ã�base����ʾ����������·������ʾ��·�� ��{ base:'.' }�ղ����ɵľ���src/html/*.html��û��������ã�����·���Ǵ�**/*.html������{ base:'src/html/' }
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/'))  
    .pipe(notify({ message: 'html yasuo task ok' }));
});
//�ϲ�html ��ƴ�ӣ� //@@include('include/header.html')
gulp.task('fileinclude', function() {
    // ����src�������ļ����µ�����html���ų�src�µ�include�ļ�����html  
    gulp.src(['src/**/*.html','!src/include/**.html'] ,{ base:'src/html/' })//,{ base:'.' }
        .pipe(fileinclude({//������ã�base����ʾ����������·������ʾ��·�� ��{ base:'.' }�ղ����ɵľ���src/html/*.html��û��������ã�����·���Ǵ�**/*.html������{ base:'src/html/' }
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist/'));
});

// �ϲ���ѹ����������css   
gulp.task('css', function() {
    return gulp.src('src/css/**/*.css')
    //.pipe(concat('main.css'))//concat �ϲ�����
    //.pipe(gulp.dest('dist/css'))//�����е��ļ�����  dist�ļ���
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())//css ѹ��
    .pipe(gulp.dest('dist/css/'))
    .pipe(notify({ message: 'css task ok' }));
});

// images,fonts�ļ�λ��   
gulp.task('copyFile', function() {
    return gulp.src(['src/images/**','src/fonts/**'],{ base:'src/' })
    .pipe(gulp.dest('dist/'));
});
 
// ���js
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
    .pipe(jshint())//js���
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'lint task ok' }));
});

// �ϲ���ѹ��js�ļ�
gulp.task('js', function() {
    gulp.src('src/js/**/*.js')
    //.pipe(concat('all.js'))//concat �ϲ����룬����ļ��ϲ���һ�� all.js  �ļ�
    //.pipe(gulp.dest('dist/js'))//�����е��ļ�����  dest�ļ���
    .pipe(rename({ suffix: '.min' }))//rename ������  Ϊ��׺
    .pipe(uglify())//ѹ��js�ļ�
    .pipe(gulp.dest('dist/js/'))//�����õ��ļ����·��
    .pipe(notify({ message: 'js task ok' }));//��cmd�г���һ����ʾ��message ��������ݾ�����ʾ����Ϣ
});

// Ĭ������
gulp.task('default', function(){
    //gulp.run('img', 'css', 'lint', 'js', 'html');
    gulp.run( 'css', 'js', 'html', 'fileinclude','copyFile');
 
    // ����html�ļ��仯  src�ļ����µ�html�ļ��仯,����ͷ����β��
    // gulp.watch('src/**/*.html', function(){
    //     gulp.run('fileinclude');
    // });
  
    // ����html�ļ��仯
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