	var hz6d_guest_id = $53.getCookie('53gid2');
	var hz6d_get_guest_id_over = 0;
	var hz6d_get_guest_id_num = 5;
	var hz6d_get_guest_id_timer = 0;
	var hz6d_cus_web_msg_gids = "";
	var hz6d_block_trace_guest = false;
	var hz6d_block_trace_over = false;

	var hz6d_flash_html='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="1" height="1" align="middle" id="mainserverim" style="position:absolute;bottom:0;left:0"><param name="allowScriptAccess" value="always" /><param name="movie" value="http://tb.53kf.com/flash/hz6d_53kf_kf_gid.swf"/><param name="quality" value="high" /><param name="wmode" value="transparent"><param name="bgcolor" value="#ffffff" /><embed name="mainserverim" src="http://tb.53kf.com/flash/hz6d_53kf_kf_gid.swf" quality="high" wmode="transparent" bgcolor="#ffffff" width="1" height="1" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" swLiveConnect="true" style="position:absolute;bottom:0;left:0" /></object>';
	if (hz6d_guest_id == '') {
		$53.creElm({
			'style':"position:absolute;bottom:0;left:0",
			'id':'hz6d_flash_html',
			'innerHTML': hz6d_flash_html
		},'div');
	}

	function returnGid(args){
		hz6d_guest_id = args[0];
		hz6d_get_guest_id_over = 1;
	}

	function hz6d_get_guest_id(){
		if(hz6d_get_guest_id_over==0 && hz6d_get_guest_id_num>0){
			hz6d_get_guest_id_num--;
			setTimeout("hz6d_get_guest_id()", 500);
		}else{
			// 已经获得guest_id或者重复获取次数已满 
			clearTimeout(hz6d_get_guest_id_timer);

			// guest_id guest_ip 是否在block_trace中，即是否阻止轨迹 
			hz6d_block_trace_guest = (function(){
				var ip = "61.164.211.103",
					id = hz6d_guest_id,
					block_trace_guest_id = [],
					block_trace_guest_ip = Array;
					
				for (var i = 0; i < block_trace_guest_id.length; i++)
				{
					if (id == block_trace_guest_id[i] && id != '') return true;
				}
				
				if (0) return true;
				
				return false;
			})();
			// 取消轨迹采集锁定 
			hz6d_block_trace_over = true;

			if(hz6d_guest_id!="" && hz6d_guest_id>0){
				if(hz6d_cus_web_msg_gids.indexOf(hz6d_guest_id)>=0){
					var url = "http://www15.53kf.com/lword_reply.php?company_id=72116099&guest_id="+hz6d_guest_id;
					//$53.createScript("hz6d_lword_reply", url);
				}
			}
		}
	}

	function hz6d_cus_web_msg_open(){
		var openurl = "http://www15.53kf.com/webCompany.php?arg=10116099&style=1&kflist=off&kf=&zdkf_type=1&language=cn&charset=gbk&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=http%3A%2F%2Fman.ef43.com.cn%2Fzhuanti%2F4065%2F&keyword=http%3A%2F%2Fwww.sogou.com%2Flink%3Furl%3D58p16RfDRLs_DenBu-qtD_HeL61jO9Wmi4K1tk6sYmOaIQlPFMgYlDh3ZfoXRJBg%26query%3D%25E9%25BB%2591%25E8%259D%25A0%25E7%25A4%25BE&brief=&logo=&question=";
		try{
			window.open(openurl,"_blank","height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
		}catch(e){}
	}

	hz6d_get_guest_id_timer = setTimeout("hz6d_get_guest_id()", 500);
	
	var create_flp_jquery_timer = window.setInterval(function(){
		if (!document.getElementById('hz6d_flp_jquery')) {
			$53.creElm({
				id: 'hz6d_flp_jquery',
				src: 'http://www15.53kf.com/minkh/js/jquery-1.4.2.flp.js?20121127002',
				charset: "utf-8",
				type: 'text/javascript'
			},'script', document.body, 1);
			clearInterval(create_flp_jquery_timer);
		}
	},500);	var new_fk_count=0; //访客消息条数
		
	var HZ6D_CONFIGSNEW = {
	'com_id': "72116099",
	'flashingInterval' : {},
	'newMsgInterval' : 0
	
};
	var HZ6D_TMP_VARSNEW = {};
	setInterval(function(){
		recvDataFromIframeProxy();
	},100); 
	function recvDataFromIframeProxy() {
    	try {
    		var wlh = window.location.href,
    		hz6d_index = wlh.indexOf('hz6d{'),
    		d6zh_index = wlh.indexOf('}d6zh');
    		if (hz6d_index == -1 || d6zh_index == -1) return;
    		window.location = wlh.replace(/#hz6d\{.*?\}d6zh/gi,'#6d');
    		hz6d_index += 4;
    		d6zh_index += 1;
    		var my_data = wlh.substring(hz6d_index, d6zh_index).replace(/%27/g,'"').replace(/%22/g,'"');
    				my_data = decodeURI(my_data);
    		if ((HZ6D_TMP_VARSNEW.iframeData != my_data)){
    			var _data = (new Function('','return ' + my_data))();
    			switch(_data.cmd) {
    				case 'new_msg':
    					hz6d_flashing(_data.comid);
    					break;
    				default:
    					break;
    			}
    			HZ6D_TMP_VARSNEW.iframeData = my_data;
    			cid=_data.comid;
    		}
    	} catch(e) {}
}
	
	function hz6d_flashing(cid) {
		if(flp("#div_company_mini").css("height") == "36px") {//对话框缩小时
			if(0 == 1) {//强制展开是否开启
                max_min_company_mini(document.getElementById("hz6d_cname_mini_div").nextSibling);
			}else{
    			if(!HZ6D_CONFIGSNEW.newMsgInterval) {
    	            flp('#hz6d_cname_mini_div').html("您有新消息");
    		      	HZ6D_CONFIGSNEW.newMsgInterval = setInterval("flp('#hz6d_cname_mini_div').fadeOut(150).fadeIn(150)",400);
    			} 
			}	            		    			
		}
	}
    
	function hz6d_re_flashing(cid) {	
        clearInterval(HZ6D_CONFIGSNEW.newMsgInterval);
    	HZ6D_CONFIGSNEW.newMsgInterval = 0;
	    flp('#hz6d_cname_mini_div').html(hz6d_cname);
	}