var xajaxRequestUri="/public/xajax/index.php";//用于网页上操作的xajax
var xajaxDebug=false;
var xajaxStatusMessages=false;
var xajaxWaitCursor=true;
var xajaxDefinedGet=0;
var xajaxDefinedPost=1;
var showVari=1;
var xajaxLoaded=false;
function xajax_YaoQing(){return xajax.call("YaoQing", arguments, 1);}
function xajax_SavePerson(){return xajax.call("SavePerson", arguments, 1);}
function xajax_SaveWuZhiqiaoMsg(){return xajax.call("SaveWuZhiqiaoMsg", arguments, 1);}
function xajax_SaveWuZhiqiaoWin(){return xajax.call("SaveWuZhiqiaoWin", arguments, 1);}

function xajax_BrandName(){return xajax.call("BrandName", arguments, 1);}
function xajax_IndexVipLog(){return xajax.call("IndexVipLog", arguments, 1);}
function xajax_MsgCook(){return xajax.call("MsgCook", arguments, 1);}
function xajax_TpCheck(){return xajax.call("TpCheck", arguments, 1);}
function xajax_BrandDns(){return xajax.call("BrandDns", arguments, 1);}
function xajax_IndexCount(){return xajax.call("IndexCount", arguments, 1);}
function xajax_PerIndexCount(){return xajax.call("PerIndexCount", arguments, 1);}
function xajax_ProPhoto(){return xajax.call("ProPhoto", arguments, 1);}
function xajax_NoRead(){return xajax.call("NoRead", arguments, 1);}
function xajax_OrderCok(){return xajax.call("OrderCok", arguments, 1);}//排序，用到的地方是brands的评论


function xajax_TouPiao(){return xajax.call("TouPiao", arguments, 1);} /*关注榜2012投票*/
function xajax_IsHaveCj(){return xajax.call("IsHaveCj", arguments, 1);} /*关注榜2012投票*/
function xajax_FindPp(){return xajax.call("FindPp", arguments, 1);} /*zs.ef43.com.cn 搜索品牌*/
function xajax_AddPiaoCXB(){return xajax.call("AddPiaoCXB", arguments, 1);} /*畅销榜加票*/
function xajax_JxsLyWj(){return xajax.call("JxsLyWj", arguments, 1);} /*经销商留言调查问卷*/
function xajax_AddReaded(){return xajax.call("AddReaded", arguments, 1);} /*经销商留言调查问卷--添加查看过投票结果的企业*/
function xajax_FindVideo(){return xajax.call("FindVideo", arguments, 1);} /*查找视频*/
function xajax_Append53KF(){return xajax.call("Append53KF", arguments, 1);} /*添加53KF*/
function xajax_FenPeiDist(){return xajax.call("FenPeiDist", arguments, 1);} /*分配经销商给小号*/

/*******品牌评论******/
function xajax_SendHf(){return xajax.call("SendHf", arguments, 1);} /*回复评论*/
function xajax_SetGzButton(){return xajax.call("SetGzButton", arguments, 1);} /*设置关注按钮状态*/
function xajax_setGZ(){return xajax.call("setGZ", arguments, 1);} /*加关注、取消关注*/
function xajax_CheckWinSign(){return xajax.call("CheckWinSign", arguments, 1);} /*检验登录框登录*/
function xajax_SetGzStatus(){return xajax.call("SetGzStatus", arguments, 1);} /*设置关注状态*/
function xajax_ProXiHuan(){return xajax.call("ProXiHuan", arguments, 1);} /*添加喜欢产品*/
function xajax_AddRenQi(){return xajax.call("AddRenQi", arguments, 1);} /*增加人气指数*/
function xajax_SetPpInfo(){return xajax.call("SetPpInfo", arguments, 1);} /*设置品牌基本信息*/
function xajax_Delhf(){return xajax.call("Delhf", arguments, 1);} /*删除回复*/
function xajax_Ding(){return xajax.call("Ding", arguments, 1);} /*顶*/
function xajax_IsMobDisplay(){return xajax.call("IsMobDisplay", arguments, 1);} //品牌专题是否显示联系方式

document.writeln("<script type=\"text/javascript\" src=\"/public/Inc/Xajax/xajax_js/xajax.js\"></script>")
window.setTimeout(function () { if (!xajaxLoaded) { alert('对不起,页面加载时间过长,请刷新一下'); } }, 50000);
function XajaxStart()
{
	MsgCook();
}

function MsgCook()
{
	xajax_MsgCook();
}


function cuxiaoOpen(vari)
{
	if (vari!==showVari)
	{
		if (showVari!==0)
		{
		getId('titleLi'+showVari).className='';
		getId('imgLi'+showVari).className='';	
		}
		showVari=vari;
		getId('titleLi'+vari).className='hover';
		getId('imgLi'+vari).className='display';
	}
}