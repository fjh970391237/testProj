/*
 *  author tiger
 */
(function(){
	

	function lazyLoad(id,tarid,type){
		if(!id || !tarid) return;
		var obj = document.getElementById(id),
			tar = document.getElementById(tarid),
			n = 0,
			inner = '',
			div = document.createElement('div');
		if(!obj || !tar) return;
		if(type){
			obj.appendChild(tar);
			return;
		}
		inner = tar.innerHTML.replace(/\<script[^\>]{1,}(src)[^\>]{1,}\>\<\/script\>/i,'');
		inner = inner.replace(/\<div\s{1,}adCount.*\<\/div\>/i,'');
		div.innerHTML = inner;
		obj.appendChild(div);
		//tar.innerHTML = ''; /** innerHTMl scriptstyle not run **/ 
		inner = null;
	}

})();



/***
 * @author {tiger}
 * ͼƬʱ 
 *
 *
 */
function lazyload(){
	
	function each(ar,fn){
		for(var i=0,l=ar.length;i<l;i++){
			fn.call(ar[i],i);
		}
	}
	
	var imgs = document.getElementsByTagName('img'),
		body = document.getElementsByTagName('body')[0],
		sHeight = document.documentElement.clientHeight || document.body.clientHeight,
		sWidth = document.documentElement.clientWidth || document.body.clientWidth,
		overflow = [ sWidth , sHeight ] ,
		range ={
			x:[0,overflow[0]],
			y:[0,overflow[1]]
		};
	
	function filter(){
		if(imgs.length ==0){
			Event.remove(window,'scroll',filter);
			return;
		}
		var _ar = [],
			site = {
				x:document.body.scrollLeft || document.documentElement.scrollLeft,
				y:document.body.scrollTop || document.documentElement.scrollTop
			},
			range = {
				x:[site.x-overflow[0]/2 , site.x+overflow[0]],
				y:[site.y-overflow[1]/2 , site.y+overflow[1]]
			},
			temp = null;
		each(imgs,function(){
			temp = getSite(this);
			//if(temp.x>=range.x[0] && temp.x <= range.x[1] && temp.y >= range.y[0] && temp.y <= range.y[1]){
			if(temp.y >= range.y[0] && temp.y <= range.y[1]){
				this.src = this.getAttribute('_src');
				//this.removeAttribute('_src');
			}else{
				_ar.push(this);
			}
		})
		imgs = [].concat(_ar);
		_ar = null;
		return imgs;
	}
	
	function getSite(obj){
		var s={x:0,y:0};
			while(obj){
				s.x+=obj.offsetLeft;
				s.y+=obj.offsetTop;
				obj=obj.offsetParent;
			}
		return s;
	}
	
	function init(){
		var ar = [];
		each(imgs,function(){
			if(this.getAttribute('_src')){
				ar.push(this)
			}
		})
		imgs = [].concat(ar);
		ar = null;
		filter();
	}
	
	init();
	
	Event.add(window,'scroll',filter);
	Event.add(window,'resize',function(){
		sHeight = document.documentElement.clientHeight || document.body.clientHeight;
		sWidth = document.documentElement.clientWidth || document.body.clientWidth;
		overflow = [ sWidth , sHeight ];
		filter();
	})

}
/*
 * Event
 */
var Event = {
	add : (function(){
		if(document.addEventListener){
			return function(obj,type,fn){ obj.addEventListener(type,fn,false)}
		}
		return function(obj,type,fn){ obj.attachEvent('on'+type,fn)}
	})(),
	remove : (function(){
		if(document.removeEventListener){
			return function(obj,type,fn){ obj.removeEventListener(type,fn,false)}
		}
		return  function(obj,type,fn){ obj.detachEvent('on'+type,fn)}
	})(),
	stop:function(e){
		if(e&&e.stopPropagation){
			e.stopPropagation();
			e.preventDefault();
		}else{
			window.event.cancelBubble = true;
			window.event.returnValue = false;
		}
	}
}


