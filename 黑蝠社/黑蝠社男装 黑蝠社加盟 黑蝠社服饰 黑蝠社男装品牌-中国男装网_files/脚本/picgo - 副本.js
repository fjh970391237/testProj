//键盘左右键翻页
document.onkeydown = function(e) {
  var currKey=0,e=e||event;
currKey=e.keyCode||e.which||e.charCode;
  if (currKey == 37)
      goPrevPic();
  if (currKey == 39)
      goNextPic();
}
UpNextFun();
function UpNextFun()
{
	var pic = $("#picture");
	var pSize = [pic.width(),pic.height()];
	var iHeight = $("#prev").height();
	pic.mousemove(function(e){
		setButtonPos();
		if( e.clientX - $(this).offset().left - pSize[0]/2 >0){
				$("#prev").fadeOut();
				$("#next").fadeIn(function(){$(this).css("opacity",0.5)});
		}else{
				$("#prev").fadeIn(function(){$(this).css("opacity",0.5)});
				$("#next").fadeOut();
		}
	}).hover(function(){},function(){
		$("#prev,#next").fadeOut();
	});
	function setButtonPos(){
		pSize = [pic.width(),pic.height()];
		$("#prev,#next").css("top",(pSize[1]-iHeight)/2+"px");
	}
}
	/*
	var img = new Image();
	img.onload = function(){
		pic.find("img").attr("src",this.src).removeClass("loading");
		var _h = this.height;
		setTimeout(function(){setButtonPos();
			if(pSize[1]-_h>0){
				pic.find("img").css("margin-top",parseInt(pSize[1]-_h)/2+"px");
			}else{
				pic.find("img").css("margin-top","0");	}},100);
	}
	img.src = pic.find("img").attr("osrc");
	setButtonPos();
	
	$("#rollimg li").live("mouseover",function(){
		if($(this).hasClass("hov")){
			$(this).attr("oClass","hov");
		}
		$(this).addClass("hov");
	}).live("mouseout",function(){
		if($(this).attr("oClass")!='hov'){
			$(this).removeClass("hov");
		}
	}
	*/
