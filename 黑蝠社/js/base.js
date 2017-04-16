$(function() {

	// 底部模态出口
	$('.close').click(function(){
		$('.zs').fadeOut(500);
	})


	// 联系我们部分焦点事件
	$('#text').focus(function(event) {
		if($('#text').val()=='我对贵品牌很感兴趣，请尽快回复我！'){

			$('#text').val('');
		}
	});
	$('#text').blur(function(event) {
		if($('#text').val()==''){

			$('#text').val('我对贵品牌很感兴趣，请尽快回复我！');
		}
	});


	
});