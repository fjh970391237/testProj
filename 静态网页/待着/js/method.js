$(function() {

// 导航部分
	var navTop=$('.theme ul').offset().top;
	$(window).scroll(function(event) {
		if($(window).scrollTop()>navTop){
			$('.twoNav').stop().fadeIn(300);

		}else{
			$('.twoNav').stop().fadeOut(300);
			
		}

	});



// 搜索框部分
		
	var myText=$('.searchArea input');


	myText.focus(function(event) {
		

		if(myText.val()=='Search'){
			myText.val('');
			myText.css('color','#000');
		};
	
	});

	myText.blur(function(){
		if(myText.val()==''){
			myText.val('Search');
			myText.css('color','#ccc');

		};
	});

	$('.sechBtn').click(function(event) {
		if(myText.val()=='Search'){
			alert('请输入您要搜索的内容');
		};
	});
 

// 热门主题部分
	$('.theme li a em').show();
	
	$('.theme li a').hover(function() {
		$(this).children('em').stop().fadeOut(700)
	}, function() {
		$(this).children('em').stop().fadeIn(700)
	});

// 热门待法部分图片轮播
	var aImg=$('.imgList li');
	var timer;
	var num=0;

	// 自定义循环函数
	var fn=function(){
		aImg.eq(num).stop().fadeOut(1000);
		$('.wenZi li').eq(num).stop().fadeOut(1000)

		num++;
		if(num>3){
			num=0;
		};
		aImg.eq(num).stop().fadeIn(1000);
		$('.btnList li').eq(num).addClass('current').siblings().removeClass('current');
		$('.wenZi li').eq(num).stop().fadeIn(1000)

	}
	// 圆点点击事件

	$('.btnList li').click(function(event) {

		var i=$(this).index();
		aImg.eq(i).stop().fadeIn(1000).siblings().fadeOut(1000);
		$(this).addClass('current').siblings().removeClass('current');
		$('.wenZi li').eq(i).stop().fadeIn(1000).siblings().fadeOut(1000);
		
		num=i;

	});
	
	// 定时器循环
	timer=setInterval(fn,3000);

	// hover时图片停止，离开继续循环
	aImg.hover(function() {

		clearInterval(timer);

	}, function() {
		
		clearInterval(timer);
		timer=setInterval(fn,3000);
		
	});



});