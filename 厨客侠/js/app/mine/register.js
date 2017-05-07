app.controller('controller', function($scope,$global) {

    $scope.user = {name:"",password:""};
    $scope.redirect = encodeURIComponent($global.request().redirect);
    $scope.clickRegister = clickRegister;

    function clickRegister(){

        if($scope.user.name == ''){
            global.alert('请输入手机号');
            return;
        }
        if($scope.user.password == ''){
            global.alert('请输入密码');
            return;
        }

        $global.post(URLLoginCreate,$scope.user,function(data){
            var redirect = $scope.redirect;
            location.href = redirect;
        });

    }
});