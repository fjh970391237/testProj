		function jdturl()//点击大图打开链接
		{
		window.open(imgLink[whichlink]);
		}
		
		function chagncssname(nnn){//小图当前图片的样式
		
		for (i=1;i<maxNum;i++){
		getId(gdxt+i).className='';
		}	
		
		getId(gdxt+nnn).className="hover";																										
		}													
		function playTran(){
		if (isIE){
		getId(imgInit).filters.BlendTrans.play();
		}
		}
		var key=0;
		
		//页面打开时的焦点图的程序开始
		
		function nextAd(){//页面打开时大图的切换
		
		if(adNum<(imgUrl.length-1)){
		adNum++;
		}else{
		adNum=1;
		}
		if(document.all){
		//imgInit.filters.BlendTrans.Transition=23;
		getId(imgInit).filters.BlendTrans.apply();
		
		playTran();
		}
		
		whichlink=adNum;
		chagncssname(adNum)
		getId(imgInit).src=imgUrl[adNum];
		//getId(jdttext).innerHTML=imgtext[adNum];
		theTimer=setTimeout("nextAd()", TimeOutaa);
		}
		
		
		function stopnextad(){//停在滚动层时滚动层停止滚动程序
		clearTimeout(theTimer);
		}
		
		function startnextad(){//移出滚动层时滚动层开始滚动程序
		chagncssname(adNum);
		theTimer=setTimeout("nextAd()", TimeOutaa);
		}
		
		function nextAdonclick(nn){//点击小图的切换
		
		adNum=nn;														
		if(document.all){
		//imgInit.filters.BlendTrans.Transition=23;
		getId(imgInit).filters.BlendTrans.apply();															
		playTran();
		}
		whichlink=adNum;
		chagncssname(adNum);
		getId(imgInit).src=imgUrl[adNum];
		//getId(jdttext).innerHTML=imgtext[adNum];
		}
		nextAd()
		//页面打开时的焦点图的程序结束
	
