$(function() {

	// jq初始化
	$('li:last,.hot li:odd,.how li:last').css('margin-right','0');
	$('.hot li:eq(8),.hot li:last').css('margin-bottom','0');
	// search搜索
		var con=$('.search input')
		con.focus(function(){

			if(con.val()=='书名、作者、ISBN'){
				con.val('');
				con.css('color','#000');
			};
		});
		con.blur(function(){

			if(con.val()==''){
				con.val('书名、作者、ISBN');
				con.css('color','#A9A9A9');
			};
		});

		$('.search s').click(function(){

			if(con.val()=='书名、作者、ISBN'){

				alert('请输入您要搜索的内容')
			}
		});


		// 登录模态窗口
		$('.login').click(function(event) {
			$('.Login').stop().fadeIn()
		});
		$('.close').click(function(event) {
			$('.Login').stop().fadeOut()
		});
		$('.userName').focus(function(event) {
			if($('.userName').val()=='用户名或邮箱，如name@qq.com'){
			$('.userName').val('').css('color', '#000');
			}
		
		});
		$('.userName').blur(function(event) {
			if($('.userName').val()==''){
			$('.userName').val('用户名或邮箱，如name@qq.com').css('color', '#A9A9A9');
			}
		
		});



		$('.passWord').focus(function(event) {
			if($('.passWord').val()=='输错5次将锁定账号'){
			$('.passWord').val('');
			}
		
		});
		$('.passWord').blur(function(event) {
			if($('.passWord').val()==''){
			$('.passWord').val('输错5次将锁定账号');
			}
		
		});
		
});