var localLayer;
var localScope;

app.controller('controller', function($scope,$global) {

    localScope = $scope;

    $scope.share = {publicType:8,content:'',shareType:2};

    var shareType = $global.request().shareType;
    if(typeof shareType != 'undefined'){
        $scope.share.shareType = shareType;
    }

    $scope.share.images = [];

    $scope.clickPublicType = clickPublicType;
    $scope.clickPosition = clickPosition;
    $scope.clickAddImage = clickAddImage;
    $scope.deleteImage = deleteImage;
    $scope.clickPublish = clickPublish;

    function clickPublicType(publicType){
        localLayer = layer.open({
            type: 2,
            shade: false,
            title: false,
            closeBtn: 0,
            area:['100%','100%'],
            content: 'visibility.html?publicType=' + publicType
        });

    }

    $scope.publish = function(){
        var share = $scope.share;

        if(share.content == ''){
            global.alert('请输入总结');
            return;
        }
        if(share.images.length == 0){
            global.alert('请添加图片');
            return;
        }

        $global.post(URLShareCreate,share,function(){
            location.href='shareIndex.html';
        });

    }

    function clickPublish(){

        global.confirm('确认发布？',$scope.publish);



    }

    function clickAddImage(sender){

        $("#uploadImg").click();
    }

    function deleteImage(index){

        $scope.share.images.splice(index,1);
    }

    function clickPosition(){
        // localLayer = layer.open({
        //     type: 2,
        //     shade: false,
        //     title: false,
        //     closeBtn: 0,
        //     area:['100%','100%'],
        //     content: 'position.html'
        // });

    }

});
function changeImage(sender){
    console.log(sender);
    if(!global.isCanvasSupported()){
        global.msg('不支持的浏览器');
        return;
    }


    var file = sender.files[0];
    global.orientation(file, onOrientation);
}

function selectPublicType(publicType){

    localScope.share.publicType = publicType;
    localScope.$apply();

    layer.close(localLayer);

}
function onOrientation(file, orientation){
    global.compress(file, orientation, onCompress);

}
function onCompress(data){
    insertImage(data);
}

function insertImage(data){

    localScope.share.images.push(data);

    console.log(localScope.share.images);
    localScope.$apply();


}