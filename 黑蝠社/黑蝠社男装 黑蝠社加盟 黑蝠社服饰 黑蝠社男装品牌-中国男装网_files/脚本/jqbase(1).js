jsFile="jqbase";
function getId(id)
{
	return document.getElementById(id);
}
	
function IsNull(objName)//判断字符是否为空
{
	objName="#"+objName;	
	if (Trim($(objName).val())=='')
	return true;
	else
	return false;
}
//获取对像的值
function GetValue(objName)
{
	objName="#"+objName;	
	return $(objName).val();
}
//获取字符的长度，
function GetLen(str)//
{
	return str.replace(/[^\x00-\xff]/gi, "--").length;
}


//判断一个对象是否存在
function IsObjExt(objname)
{
	return (typeof ($('#'+objname).attr('id')) !== 'undefined')
}


//判断字符的长度
function StrLen(str,smallint,bigint)
{
str=Trim(str);
if (str=='')
return false;
if (smallint!==null)
if (GetLen(str)<smallint)
return false;
if (bigint!==null)
if (GetLen(str)>bigint)
return false;
return true;
}

//对空格
function Trim(str)
{
	return $.trim(str);
}

//联系电话
function IsZip(str)
{
	var patrn=/^([\/0-9]){6,6}([a-zA-Z0-9_-])*/;
	if (!patrn.exec(str)) return false;
	return true;
}

//jquery提示信息,isfoucs=0就是不要显示光标
function Alerts(objName,str,isfoucs)
{
	alert(str);
	if (isfoucs!=null)	
	$("#"+objName).focus();
	return false;	
}

function alertone(obj,str)
{   alert(str);
 	if (typeof(obj)!="undefined")
	getId(obj).focus();
	return false;
}

// 是否有中文
function IsHaveCn(str)
{
	var patrn=/[\u4e00-\u9fa5]/;
	if (!patrn.exec(str)) return false;
	return true;
}
//是否是电话号码
function IsTel(str)
{
	if (str=='123456'||str=='111111'||str=='2222222')
	return false;	
	var patrn=/^([\/0-9,()-－， ,——]){6,18}([a-zA-Z0-9_-])*/;
	if (!patrn.exec(str)) return false;
	return true;
}

function IsMob(val)
{
	val=Trim(val);
	var lens =Len(val);
	regExp = /^13[0-9]{9}|14[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/;
	if(lens==0){
	return false;
	}else if (lens > 11 || !regExp.test(val)) {
	return false;
	} else {
	return true;
	}
}

//获取多选框选中的个数
function GetObjLen(str)
{

return $("input[name='"+str+"']:checked").length;
}

	
function Len(str)
{
	return str.replace(/\s*/g, "").replace(/[^\x00-\xff]/g,"00").length; 
}

//检查Email地址的合法性
function IsEmail(str)
{
	var patrn=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
	if (!patrn.exec(str)) return false;
	return true;
	
}

function GetSelect(str)//弹出显示框时sele选项隐藏
{	
	if (typeof(seleDiv)!=="undefined") //
	{		
		var objs = getId('seleDiv').getElementsByTagName("select");
		for(var i=0; i<objs.length; i++) 
		{		  
			objs[i].style.display=str;		
		}
	}	
}
//定位
function getElementTop(element){
	
        var actualTop = element.offsetTop;
        var current = element.offsetParent;
        while (current !== null){
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
}

//判断是否是整数
function IsNumber(str)
{

	var patrn=/^([0-9])+/;
	if (!patrn.exec(str)) return false;
	return true;
	
}
function changeDiv(name,int,nowInt,cssDiv)
{
	
	if (getId(name+'_'+nowInt).style.display=='none')
	{
	hiddenDiv(name,int);
	if (cssDiv!=='0')
	{
		channelCss(cssDiv,int);
		
		getId(cssDiv+'_'+nowInt).className='hover';
	}

	getId(name+'_'+nowInt).style.display='block';
	
	}
}
function changeDivX(name,int,nowInt,cssDiv,hoverCss)
{
	
	if (getId(name+'_'+nowInt).style.display=='none')
	{
	hiddenDiv(name,int);
	if (cssDiv!=='0')
	{
		channelCss(cssDiv,int);
		
		getId(cssDiv+'_'+nowInt).className=hoverCss;
	}

	getId(name+'_'+nowInt).style.display='block';
	
	}
}
function  channelCss(name,int)
{
	for (i=1;i<int+1;i++)
	{
		getId(name+'_'+i).className='';
		
	}
	
}

function DetailInWeb(tradeDetail,titleStr)
{
	tradeDetail=tradeDetail.toLocaleLowerCase();
	tradeDetail=tradeDetail.replace(new RegExp('.ef43.com.cn', 'g'), '');
	var urlArr = new Array('.com','.net','.cc','.org','.hk','.com.cn','.org.cn','.net','.biz','.cn','.net.cn','.tw','.cm');
	for ( var i=0 ; i < urlArr.length ; ++i )
	{
		tempStr=urlArr[i];
		if (tradeDetail.indexOf(tempStr)>0)
		{
			alert(titleStr+"中出现\""+tempStr+"\"字符,为了网站的安全性,内容不能含网址,\n\n如要写网址请在联系我们中填写,谢谢配合!");
			return false;
		}
	}
	return true;
}


function  hiddenDiv(name,int)
{
	for (i=1;i<int+1;i++)
	{
		getId(name+'_'+i).style.display='none';
	}
	
}
function TopOpenQQ()//登录登录窗口
{
	window.open('/public/qqopen/?action='+document.URL);
}

function ShowWu() //显示处理的信息
{
	$('#sendDiv').block({ 
		message: "<img src='/public/Image/load.gif' style='padding-left:5px;'  align='absmiddle'/> <span id='showMsgStr'  style='font-weight:bold;font-size:14px;'>正在处理，请稍等...</span>", 
		css: { backgroundColor:'#fff',border: '3px solid #a00',cursor:''} , 
		overlayCSS:  {
		   backgroundColor: '#666',
		   opacity:         '0.4',
		   cursor:''
		 }
	});
}

function ShowWuNot(str){
	setTimeout($('#sendDiv').unblock(),300);
}

function GoUrl(str)
{
	window.location.href=str;
}

function SelectFun(MakeFrom,thisobj)
{		
 formName=MakeFrom.name;
var testform=document.getElementById(formName);
  for(var i=0; i<testform.elements.length; i++) 
	  {
			if(testform.elements[i].type.toLowerCase() == "checkbox" )
			{
				e=testform.elements[i];		
				e.checked=(thisobj.value=="全部选中")?1:(!e.checked);				
			}	
	}
	if (thisobj.value=='取消全选')
	thisobj.value='全部选中';
	else
	thisobj.value='取消全选';
	return false;
}

function BackSelectFun(MakeFrom) {
	
formName=MakeFrom.name;	
var testform=document.getElementById(formName);
  for(var i=0; i<testform.elements.length; i++) 
  {
    if(testform.elements[i].type.toLowerCase() == "checkbox" )
	{
		e=testform.elements[i];		
      e.checked =!e.checked;
	}
  }
  return false;
}
function SubmitForm(objForm,actionStr)
{			
		if (!confirm('你真的确定吗'))
			return false;	
		objForm.action=actionStr;
		objForm.submit();
}

  function SelectCheck(str,obj)
  {	
   for(i=0;i<getId(obj).length;i++)
  	{

  	if  (getId(obj).options[i].value==str)  	
  		getId(obj).selectedIndex=i;
  	 }
 
  }
  
//联系是否英文是正确
function IsContactManCn(str)
{	
	str=Trim(str);
	var patrn=/^([a-zA-Z0-9_-]){1,20}/;
	if (!patrn.exec(str)) 	
		return StrLen(str,2);
		else
	return false;
	
}

//联系是否英文是正确
function IsCompanyName(str)
{	
	str=Trim(str);
	var patrn=/^([0-9]){1,20}/;
	if (!patrn.exec(str)) 	
		return StrLen(str,2);
		else
	return false;
	
}

//校验密码：只能输入6-16个字母、数字、下划线
function IsPassword(s)
{
s=Trim(s);
var patrn=/^(\w){6,16}$/;
if (!patrn.exec(s)) return false;
return true;
}

//验证是否是编号
function CheckUserName(s)
{
	
	s=Trim(s);
var patrn=/^([\w－-]){4,40}$/;
if (!patrn.exec(s)) return false;
return true;
}


//检查是否是数字开头
function FirstNum(s)
{s=Trim(s);
var patrn=/^([0-9])+.?([0-9])*.*/;
if (!patrn.exec(s)) return false;
return true;
}

//获取字符的长度
function GetStr(str)
{
	return str.replace(/[^\x00-\xff]/gi, "--").length;
}

//是否是网址
function IsURL(url){
	var sTemp;
	var b=true;
	sTemp=url.substring(0,7);
	sTemp=sTemp.toUpperCase();
	if ((sTemp!="HTTP://")||(url.length<10)){
		b=false;
	}
	return b;
}

//转成Int类型
function ToInt(str){
	str=BaseTrim(str);
	if (str!=""){
		var sTemp=parseFloat(str);
		if (isNaN(sTemp)){
			str="";
		}else{
			str=sTemp;
		}
	}
	return str;
}

//验证是否是编号
function CheckSn(s)
{
	s=Trim(s);
	var patrn=/^([\w－-]){4,40}$/;
	if (!patrn.exec(s)) return false;
	return true;
}

// 是否有中文
function IsChinese(str)
{
	var patrn=/[\u4e00-\u9fa5]/;
	if (!patrn.exec(str)) return false;
	return true;
}

//联系是否英文是正确
function IsCompanyNameCn(str)
{	
	str=Trim(str);
	var patrn=/^([0-9]){1,20}/;
	if (!patrn.exec(str)) 	
	{
		if (IsChinese(str))
		return true;
	}
		else
	return false;
}

//联系是否是正确
function IsContactManEn(str)
{	
	str=Trim(str);
	var patrn=/^([\sa-zA-Z_-]){5,20}/;
	if (!patrn.exec(str)) 
	return false;
	return true;
}

//文本框只能输入数字
 function OnlyNum(value)
 { return value.replace(/\D/g,'');
}

//文本框只能输入可以有小数点
 function OnlyFloat(value)
 { return value.replace(/([^\d\./]+)*/g,'');
}

//检查是否是float
function IsFloat(str)
{
	var patrn=/^([0-9])$/;
	if (!patrn.exec(str)) 
	{
	var patrn=/^(-{0,1}|\+{0,1})[0-9]+(\.{0,1}[0-9]+)$/;
	if (!patrn.exec(str)) return false;
	return true;
	}
	else
	return true;
}

//检查Email地址的合法性
function IsMsn(str)
{
	var patrn=/^([a-zA-Z0-9_-])+@hotmail+(\.[a-zA-Z0-9_-])+/;
	if (!patrn.exec(str)) return false;
	return true;
	
}