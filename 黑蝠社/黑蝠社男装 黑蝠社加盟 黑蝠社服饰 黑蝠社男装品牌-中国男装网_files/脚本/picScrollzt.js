var speed=30;
getId('demo2').innerHTML=getId('demo1').innerHTML;

function Marquee(){ 
if(getId('demo2').offsetWidth-getId('demo').scrollLeft<=0) 
getId('demo').scrollLeft-=getId('demo1').offsetWidth 
else{ 
getId('demo').scrollLeft++ 
} 
} 

var MyMar=setInterval(Marquee,speed);
getId('demo').onmouseover=function() {clearInterval(MyMar)} 
getId('demo').onmouseout=function() {MyMar=setInterval(Marquee,speed)}




function StopMove()
{
clearInterval(MyMar)
}

function StartMove()
{
MyMar=setInterval(Marquee,speed)
}


