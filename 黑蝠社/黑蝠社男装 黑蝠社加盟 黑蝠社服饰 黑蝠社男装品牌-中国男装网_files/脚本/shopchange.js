$(document).ready(function(){
		 			  
	$("#thumbnail li img").click(function(){										 
	picName=$(this).attr("id");		
	showi=parseInt(picName.replace('SmallPic',''));

	imgLiHover(showi);		
	$("#on_img").hide().attr({"src": $(this).attr("href")});
	$("#on_img").attr({"src": $(this).attr("rel")});		
	getId('foucsText').focus();
	pici=showi;
	$("#on_img").load(function(){$("#on_img:hidden").fadeIn("slow")});
	return false;
	});	
	
})

function imgLiHover(showi)
{
	pici=parseInt(getId('ShowImgNum').value);
	if (showi!==pici)
	{
		getId('smallLi'+pici).className='';
		getId('smallLi'+showi).className='hover';
		getId('ShowImgNum').value=showi;
	}	
}
	
function upPicFun()
{
		nowi=parseInt(getId('ShowImgNum').value);
		maxi=parseInt(getId('ShowImgNumAll').value);
		if (nowi<=1)
		{
			alert('己是第一张产品图片');
			return false;
		}
		if (nowi%4==1&&nowi>4)
		{
		upPage();
		return false;		
		}
		if (nowi<=1)
		nowi=maxi;	
		else
		nowi=parseInt(nowi)-1;	
		picName=$('#SmallPic'+nowi).attr("id");	
		showi=nowi;
		imgLiHover(showi);
		getId('ShowImgNum').value=nowi;
		$("#on_img").attr({"src": $('#SmallPic'+nowi).attr("rel")});
		//if (showi>5)
		//GoUp(96);
		pici=showi;
		getId('foucsText').focus();
		return false;
}

function nextPicFun()
{
		nowi=parseInt(getId('ShowImgNum').value);
		maxi=parseInt(getId('ShowImgNumAll').value);
		if (nowi>=maxi)
		{
			alert('己最后一张产品图片');
			return false;
		}
		if (nowi%4==0)
		{
		nextPage();
		return false;		
		}		
		if (nowi>=maxi)
		nowi=1;
		else
		nowi=parseInt(nowi)+1;
		
		picName=$('#SmallPic'+nowi).attr("id");	
		showi=nowi;
		imgLiHover(showi);		
		$("#on_img").hide().attr({"src": $('#SmallPic'+nowi).attr("href")});
		$("#on_img").attr({"src": $('#SmallPic'+nowi).attr("rel")});		
		$("#on_img").load(function(){$("#on_img:hidden").fadeIn("slow")});
		getId('foucsText').focus();
		return false;
}
function NowPicShowFun(nowi)
{
		imgLiHover(nowi);
		$("#on_img").hide().attr({"src": $('#SmallPic'+nowi).attr("href")});
		$("#on_img").attr({"src": $('#SmallPic'+nowi).attr("rel")});
		$("#on_img").load(function(){$("#on_img:hidden").fadeIn("slow")});
		getId('foucsText').focus();
		return false;
}



function nextPage()
{

	nowi=parseInt(getId('ShowImgNum').value);
	maxi=parseInt(getId('ShowImgNumAll').value);	
	if (nowi>=maxi)
	{
		return false;
	}
	modei=nowi%4;
	var pagei = nowi/4; //整除
 	pagei = Math.floor(pagei); 
	if (modei>0)
	pagei++;	
	goPagei=pagei*4;	
	nextPagei=(pagei+1)*4;
	if (nextPagei>=maxi)
	{
		getId('nextPageImg').style.display='none';		
	}		
	if (pagei>0)
	getId('upPageImg').style.display='block';	
	
	
	for(i=1;i<=goPagei;i++)
	{
		getId('smallLi'+i).style.display='none';
		
	}
	nowi=parseInt(goPagei)+1;
	NowPicShowFun(nowi);	
}

function upPage()
{
	
	nowi=parseInt(getId('ShowImgNum').value);
	maxi=parseInt(getId('ShowImgNumAll').value);	
	modei=nowi%4;
	var pagei = nowi/4; //整除
 	pagei = Math.floor(pagei); 
	if (modei>0)
	pagei++;	
	upPagei=(pagei-1)*4;
	getId('nextPageImg').style.display='block';		

	if (upPagei>4)
	getId('upPageImg').style.display='block';	
	else
	getId('upPageImg').style.display='none';	
	
	
	for(i=upPagei-3;i<=upPagei;i++)
	{
		getId('smallLi'+i).style.display='block';
		
	}
	NowPicShowFun(upPagei-3);
}
