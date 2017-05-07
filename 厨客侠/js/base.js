//如果要不同尺寸不同字号对应，需要到此段代码，否则，可以删除，不影响其他代码
//加载即执行，根据不同大小字体图片等做相应变化
var H = document.documentElement;
getSize();
function getSize(){
	// 获取屏幕宽度
	var screenWidth = H.clientWidth;
    if(screenWidth<=320)
    {
        H.style.fontSize = '33.933333px';
    }else if(screenWidth<=414)
    {
        H.style.fontSize = '40px'
    }else if(screenWidth>414)
    {
        H.style.fontSize = '45px'
    }

}
// 当窗口发生改变就会触发这个事件
window.onresize = function(){
	getSize();
}

//js 方法  从此处开始			
mui.init();

/*banner轮播*/
var bannerSlider = mui("#slider");
bannerSlider.slider({
  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
});


//附近查看条件（综合排行，距离最近，评分最高）			
// mui('#filterTerm').on('tap','a',function(){
// 	$('#filterTerm a').removeClass('active');
// 	$(this).addClass('active');
// });
			
/*获取附近举报弹窗点击的哪个按钮*/
function whichBtn(obj){
	//根据点击按钮，反推当前是哪个actionsheet
	for (parent = obj.parentNode; parent != document.body; parent = parent.parentNode) {
		if (parent.classList.contains('mui-popover-action')) {
			break;
		}
	}
	//关闭actionsheet
	mui('#' + parent.id).popover('toggle');
	return obj.innerHTML;//返回当前是哪个按钮，以此推断操作
}
		
//验证登录输入框不能为空
function logValid(){
	mui("#loginForm input").each(function() {
		//若当前input为空，则alert提醒 
		if(!this.value || this.value.trim() == "") {
		    var label = this.previousElementSibling;
		    mui.alert(label.innerText + "不允许为空");
		    check = false;
		    return false;
		}else{
			check = true;
		}
	}); //校验通过，继续执行业务逻辑 
	if(check){
	    mui.alert('验证通过!');
	    $('#logBtn').addClass('active');
	    return check;
	}
}

//倒计时函数
//参数一：time 为倒计时的时间；参数二：obj 为显示倒计时的元素
function countdown(time,obj) { 
    if (time == 0) { 
        obj.removeAttr("disabled");    
        obj.val("发送验证码"); 
        countdown = time; 
        return;
    } else { 
        obj.attr("disabled", true); 
        obj.val( time + "s"); 
        time--; 
    } 
	setTimeout(function() { 
	    countdown(time,obj)
   	},1000) 
}

//选择列表条目，选中加上类名 active，同时其他li 去掉active类名
// mui('.listCon').on('tap', 'li.mui-table-view-cell', function() {
// 	$(this).toggleClass('active').siblings('li').removeClass('active');
// })

//图片上传方法
function readFile(){ 
    var file = this.files[0]; //获取file对象
    //判断file的类型是不是图片类型。
    if(!/image\/\w+/.test(file.type)){ 
        alert("文件必须为图片！"); 
        return false; 
    } 
    
    var reader = new FileReader(); //声明一个FileReader实例
    reader.readAsDataURL(file); //调用readAsDataURL方法来读取选中的图像文件
    //最后在onload事件中，获取到成功读取的文件内容，并以插入一个img节点的方式显示选中的图片
    reader.onload = function(e){ 
    	var str='<li class="mui-table-view-cell mui-media mui-col-xs-4">'+
					'<img class="mui-media-object" src="'+this.result+'" alt=""/>'+
						'<span class="icon-del"></span>'+
					'</li>';
        $('.lastLi').before(str);
    } 
}