
function ShowWuEFIndex(showStr) //显示处理的信息
{
if (typeof(showStr)=='undefined') 
showStr="正在提交信息，请稍等...";
$('#sendDiv').block({ 
message: "<img src='/public/Image/ajax-loader.gif' style='padding-left:5px;'  align='absmiddle'/> <span id='showMsgStr'  style='font-weight:bold;font-size:12px;'>"+showStr+"</span>", 
css: { backgroundColor:'#fff',border: '3px solid #a00',cursor:''} , 
overlayCSS:  {
   backgroundColor: '#666',
   opacity:         '0.4',
   cursor:''
   }
});
}

$(function(){
		  $("#relDes li").mouseover(function(){	
		$(this).addClass('hover');										 
		}).mouseout(function(){$(this).removeClass('hover');})
												  
})
function ShowWuEFIndexNot(showStr)
{
if (typeof(showStr)!=='undefined') 
getId('showMsgStr').innerHTML=showStr;
setTimeout($('#sendDiv').unblock(),100);
}

function Message()
{
	if (IsNull("VipId"))
	{
		$("#VipId").val(0);
	}		
	if (!StrLen(GetValue("Title"),4,60))
	{
		return Alerts("Title","请您填写咨询主题没有填写,不能超过30个汉字",0)
	}
	if (!StrLen(GetValue("Detail"),12,1000))
	{
		return Alerts("Detail","请您填写咨询主题没有填写,不能超过500个汉字")		
	}
	if (IsNull("LinkMan"))
	{
		return Alerts("LinkMan","请填写您联系人名称")
	}
	if (!IsHaveCn(GetValue("LinkMan")))
	{
		return Alerts("LinkMan","联系人名称请用中文")
	}	
	if (!StrLen(GetValue("LinkMan"),2,20))
	{		
		return Alerts("LinkMan","填写的联系人不能超过10个汉字")		
	}
	if (Len(GetValue("Tel"))==0)
	{
		return Alerts("Tel","手机号不能为空,请填写13/14/15/17/18开头的11位数字手机号码")
	}
	if (!IsMob(GetValue("Tel")))
	return Alerts("Tel","手机号有误,请填写13/14/15/17/18开头的11位数字手机号码")
	
	if (!IsNull("Email"))
	if (!IsEmail(GetValue("Email")))
	return Alerts("Email",'您的电子邮件格式不正确，可以为空');			
	
	if (!StrLen(GetValue("Address"),4,80))
	{
		return Alerts("Address","请填写您的详细地址，至少2个汉字,不能超过40个汉字")		
	}
	getId('tempSubmit').style.display='none';
	getId('tempSubmit2').style.display='block';
	ShowWuEFIndex();
	xajax_SaveWuZhiqiaoMsg(xajax.getFormValues('userggForm'))
	return false;			
}

//开店经验
function KdjyFun(key)
{
	oldKey=getId('JinYan').value;
	if (key==oldKey)
	return false;
	getId('JinYan').value=key;
	getId('JyErrOne').style.display="none";
	getId('jinyan'+key).checked=true
	if (key==1)
	{
		
		getId('JinyanNoDiv').className='noSeleok';
		getId('JinyanYesDiv').className='yesSele';
		//清除有经验时的选中记录
		getId('KdYearDiv').style.display='none';
	}
	if (key==2)
	{
		getId('JinyanNoDiv').className='noSele';
		getId('JinyanYesDiv').className='yesSeleok';
		getId('KdYearDiv').style.display='block';
	}
		
}

//是否有店铺
function ShopFun(key)
{
	oldKey=getId('Shop').value;
	if (key==oldKey)
	return false;
	getId('Shop').value=key;
	getId('ShopErrOne').style.display="none";
	getId('shop'+key).checked=true
	if (key==1)
	{
		getId('ShopNoDiv').className='noSeleok';
		getId('ShopYearDiv').className='yesSele';
		//清除有经验时的选中记录
		getId('ShopAreaDiv').style.display='none';
	}
	if (key==2)
	{
		getId('ShopNoDiv').className='noSele';
		getId('ShopYearDiv').className='yesSeleok';
		getId('ShopAreaDiv').style.display='block';
	}
		
}

//是否有经验cook设置
function JinYanSetCook(key)
{
	 if (document.getElementById("JinYan"))
	 {
		 KdjyFun(key);
	 }
}

//是否有店铺cook设置
function ShopSetCook(key)
{
	 if (document.getElementById("Shop"))
	 {
		 ShopFun(key);
	 }
}

function KdYearSetCook(key)
{
	if (document.getElementById("KdYear1"))
	{
	  getId('KdYear'+key).checked=true
	}	
}

function ShopAreaSetCook(key)
{
	if (document.getElementById("ShopArea1"))
	{
	  getId('ShopArea'+key).checked=true
	}	
}


function PersonMessage()
{
	  if (IsNull("VipId"))
	{
		$("#VipId").val(0);
	}		
	if (!StrLen(GetValue("Title"),4,60))
	{
		return Alerts("Title","请您填写咨询主题没有填写,不能超过30个汉字",0)
	}
	if (!StrLen(GetValue("Detail"),12,1000))
	{
		return Alerts("Detail","请您填写咨询主题没有填写,不能超过500个汉字")		
	}
	if (IsNull("LinkMan"))
	{
		return Alerts("LinkMan","请填写您联系人名称")
	}
	if (!IsHaveCn(GetValue("LinkMan")))
	{
		return Alerts("LinkMan","联系人名称请用中文")
	}	
	if (!StrLen(GetValue("LinkMan"),2,20))
	{		
		return Alerts("LinkMan","填写的联系人不能超过10个汉字")		
	}
	
	if (!IsTel(GetValue("Tel")))
	return Alerts("Tel","请填写您的正确联系电话")
	
	if (!IsNull("Email"))
	if (!IsEmail(GetValue("Email")))
	return Alerts("Email",'您的电子邮件格式不正确，可以为空');			
	
	if (!StrLen(GetValue("Address"),4,80))
	{
		return Alerts("Address","请填写您的详细地址，至少2个汉字,不能超过40个汉字")		
	}
	getId('tempSubmit').style.display='none';
	getId('tempSubmit2').style.display='block';
	ShowWuEFIndex();
	xajax_SavePerson(xajax.getFormValues('personForm'))
	return false;
			
}


function goTempJs()
{
	if (window.event.keyCode==13) Message();
}

function step1FormGo()
{
	getId('userggForm').action='/public/userCode/MessageggDo.php';
	getId('userggForm').submit();
}

//快速填写留言内容
function DetailAdd(num)
{
	var strArr=new Array(); 
	strArr[0]="我对贵品牌很感兴趣，请尽快回复我！";
	strArr[1]='请问我所在地区有加盟商吗？';
	strArr[2]='我有从事过服装行业经验';
	strArr[3]='我想了解加盟费用和细则';
	strArr[4]='我考察过贵品牌的实体店面';
	strArr[5]='哪里有你们的店面形象可以看';
	
	if (IsNull("Detail"))
	textStr=strArr[num];
	else
	{	
		textStr=$("#Detail").val();
		textStr=textStr.replace('\n'+strArr[num],'');
		textStr=textStr+'\r\n'+strArr[num];
		
	}
	$("#Detail").val(textStr);
}

function FeedBackSetValue(title)
{
	getId('Title').value=title;
}
//设置留言vipid
function UserId(idvalue)
{
$("#VipId").val(idvalue);
}

function SetVipType(vipType)
{
getId('VipType').value=vipType;
}

function MsgVipSign()
{
	VipSign();
}

//定位
function onadcon(){
	
	var feedback = document.getElementById("ly");
    var num = getElementTop(feedback)-10;
	window.scrollTo(0, num)
}

