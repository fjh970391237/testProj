function ddsss()
{
	alert('ss');
}

function CheckAgain()
	{
		closeMsg();
	}
	function closeMsg()
	{
		var LRENWINObj = document.getElementById("LRENWIN");	
		LRENWINObj.innerHTML='';
		document.getElementById("MsgBg").className="";
		document.getElementById("MsgBg").style.width=0;
		document.getElementById("MsgBg").style.height=0;
		document.getElementById("LRENWIN").style.height=0;
		document.getElementById("LRENWIN").style.overflow="hidden";
		document.getElementById("MsgBg").style.overflow="hidden";
	}
	
	function shwMsg(boxWdth,boxHeight,Msg,Title,Btn1Txt,Btn1onClickEvent,Btn2Txt,Btn2onClickEvent)
	{
		var srcwdth, srchtgt,BoxTop,BoxLeft;
		var DivStr="";
		var LRENWINObj = document.getElementById("LRENWIN");		
		var bdy=document.documentElement;
	  	var h=bdy.scrollHeight>bdy.clientHeight?bdy.scrollHeight:bdy.clientHeight;
		var myWidth = 0, myHeight = 0;
		
		if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			myWidth = document.documentElement.clientWidth;
			myHeight = document.body.clientHeight;
			} 
		else 
			{
			if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
			myWidth = document.body.clientWidth;
			myHeight = document.body.clientHeight;
			}
		}	
		showHeight=document.documentElement.clientHeight;//显示屏幕的高
		if (myHeight<showHeight)
		myHeight=showHeight;	
		jianquHeight= document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop; //卷去的高
		BoxLeft =(myWidth -boxWdth) / 2;
		BoxTop=jianquHeight+((showHeight -boxHeight) / 2 -30);
		titleH=31;//标题高度
		boxHeight2=boxHeight-titleH;
//		DivStr = "<div id=\"LRENWIN\" style=\"position:absolute;top:0px;left:0px;background:transparent;width:" + srcwdth + "px;height:" + srchtgt + "px;\">"

		DivStr = DivStr + "<div id=\"Cue_MsgBox\" style=\"width:" + boxWdth + "px;height:" + boxHeight + "px;top:" + BoxTop + "px;left:" + BoxLeft + "px;overflow:visible;\">";	
		DivStr = DivStr + "<div id=\"Cue_MsgBox_Title\" style=\"width:" + boxWdth + "px;height:" + titleH + "px;\">";
		DivStr = DivStr +"<div id=\"Cue_MsgBox_Title_left\" >"+Title+"</div>";
		DivStr = DivStr +"<div id=\"Cue_MsgBox_Title_right\" onclick=\"closeMsg()\" style=\"cursor:pointer;\"  ></div>";
		DivStr = DivStr +"</div>";
		boxWdth=boxWdth-32;
		boxHeight2=boxHeight2-31;
		DivStr = DivStr + "<div id=\"Cue_MsgBox_Detial\" style=\"width:" + boxWdth + "px;height:" + boxHeight2 + "px;\">";
		DivStr = DivStr + "<form  id=\"MSGFORM1\" enctype=\"multipart/form-data\"   onkeypress=\"if(window.event.keyCode==13) {return false;}\"  method=\"post\"   NAME=\"MSGFORM1\" >";
		DivStr = DivStr + "<div id=\"Cue_MsgBox_Msg\" align=\"left\">" + Msg + "</div>";
		DivStr = DivStr + "</form>"
		DivStr = DivStr +"</div>"		
		DivStr = DivStr + "</div>";

	LRENWINObj.innerHTML = DivStr;
	if (document.body.clientWidth>0)
	msgWidth=document.body.clientWidth;
	else
	msgWidth=screen.width-24;
	if (msgWidth>10)
	document.getElementById("MsgBg").style.width=msgWidth;
	else
	document.getElementById("MsgBg").style.width='100%';
	document.getElementById("MsgBg").style.height=myHeight+'px';	
	document.getElementById("MsgBg").className="MSG";	
	}
	