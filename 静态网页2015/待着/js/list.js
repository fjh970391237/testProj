$(function() {
	
// 初始化
	$('.main-left ul li:odd,.right-bd ul li:last,.banner ul li.nav05').css('margin-right', '0');


// 导航部分
	var navTop=$('.main').offset().top;
	$(window).scroll(function(event) {
		if($(window).scrollTop()>navTop){
			$('.twoNav').stop().fadeIn(300);

		}else{
			$('.twoNav').stop().fadeOut(300);
		}

	});








});