$(function() {

// 导航部分
// 
	var navTop=$('.experience').offset().top-100;
	$(window).scroll(function(event) {
		if($(window).scrollTop()>navTop){
			$('.twoNav').stop().fadeIn(300);
		}else{
			$('.twoNav').stop().fadeOut(300);
		}
	});


// banner图片轮播部分
	
	var num=0;
	var timer;

	var nextFn=function () {
		clearInterval(timer);
		$('.imgList li').eq(num).stop().fadeOut();
		$('.banner ol li').eq(num).fadeOut(200);
		num++;
		if(num>4){
			num=0;
		};
		
		$('.imgList li').eq(num).stop().fadeIn();
		$('.banner ol li').eq(num).stop().fadeIn();
		timer=setInterval(fn,4000);
			
	};
	
	var prevFn=function () {
		clearInterval(timer);

		$('.imgList li').eq(num).stop().fadeOut();
		$('.banner ol li').eq(num).fadeOut(200);
		num--;
		if(num<0){
			num=4;
		};
		
		$('.imgList li').eq(num).stop().fadeIn();
		$('.banner ol li').eq(num).stop().fadeIn();
		timer=setInterval(fn,4000);
	}
	var fn=function(){
		$('.imgList li').eq(num).stop().fadeOut();
		$('.banner ol li').eq(num).fadeOut(200);
		num++;
		if(num>4){
			num=0;
		};
		
		$('.imgList li').eq(num).stop().fadeIn();
		$('.banner ol li').eq(num).stop().fadeIn();
	}

	timer=setInterval(fn,4000);

	$('.next').click(nextFn);
	$('.prev').click(prevFn);

	$('.banner ol a').hover(function() {
		clearInterval(timer)
	}, function() {
		timer=setInterval(fn,4000);
	});

});