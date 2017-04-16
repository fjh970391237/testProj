//jquery
$(document).ready(function(){
    $(".dropdown").hover(
    function(){
        $(this).children("ul").show();
        $(this).addClass("hover");
    },
    function(){
        $(this).children("ul").hide();
        $(this).removeClass("hover");
    });

    // FancyBox
    $(".fancybox").fancybox({
        'centerOnScroll' : 'yes',
        'transitionIn'   : 'elastic',
        'transitionOut'  : 'elastic',
        'type'           : 'ajax'
    });

    // Fancy
    $(".fancy").fancybox({
        'openEffect'    : 'none',
        'closeEffect'   : 'none'
    });

    //按钮被点击后，滑动到顶部。
    $('.go2top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
});

//reply
function reply(e){
    box = document.getElementById('comment');
    oc = box.value;
    prefix = '@' + e + ' ';
    nc = oc + prefix;
    box.focus();
    box.value = nc;
}

//upload 图片
var ajaxFileUpload = function(block,elementImg,contentElement,btnElement){
    var messtxt;
    $.fancybox.showLoading();
    $("#"+btnElement).removeClass("btn-success").addClass("btn-disable").attr("disabled","disabled");
    $.ajaxFileUpload({
        url: '/SvrApi/UploadImg.php?block='+block, //用于文件上传的服务器端请求地址
        secureuri: false, //是否需要安全协议，一般设置为false
        fileElementId: elementImg, //文件上传域的ID
        dataType: 'json', //返回值类型 一般设置为json
        success: function (data, status){
            if(data.code == -1){
                messtxt = "发生错误！";
            }else if(data.code == -2){
                messtxt = "文件超过规定大小！";
            }else if(data.code == -3 ){
                messtxt = "文件类型不符!";
            }else if(data.code == 0 && data.url != ""){
                messtxt = "上传成功!";
                var commentVal = $("#"+contentElement).val();
                $("#"+contentElement).val(commentVal+" "+data.url+" \t\n");
            }else if(data.code == -4){
                alert(data.msg);
                messtxt = "上传失败!请稍后再试或粘贴图片链接！";
            }
            $("#"+elementImg).val('');
            $("#uploadImg_txt").html(messtxt);
            $.fancybox.hideLoading();
            $("#"+btnElement).removeClass("btn-disable").addClass("btn-success").removeAttr("disabled");
        },
        error: function (data, status, e){
            $("#uploadImg_txt").html(e);
            $.fancybox.hideLoading();
            $("#"+btnElement).removeClass("btn-disable").addClass("btn-success").removeAttr("disabled");
        }
    });
};

//生成并下载  
function createAndDownload(cvdataURL,isbn){  
   var doc = new jsPDF();  
  
   doc.setFontSize(40);  
   doc.text(35, 25, "");  
     
   doc.addImage(cvdataURL, 'JPEG', 70, 50, 80, 50);  
   doc.save('iShuchao_'+isbn+'.pdf');  
}    
