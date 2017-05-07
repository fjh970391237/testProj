

app.controller('controller', function($scope,$global) {

    $scope.user = {name:"",password:""};
    $scope.redirect = encodeURIComponent($global.request().redirect);
    $scope.clickLogin = clickLogin;

    function clickLogin(){

        if($scope.user.name == ''){
            global.alert('请输入手机号');
            return;
        }
        if($scope.user.password == ''){
            global.alert('请输入密码');
            return;
        }

        $global.post(URLLoginShow,$scope.user,function(data){
            var redirect = decodeURIComponent($scope.redirect);

            if(typeof (redirect) == "undefined"){
                redirect = '../share/shareindex.html';
            }else if(redirect == 'undefined'){
                redirect = '../share/shareindex.html';
            }

            location.href = redirect;
        });

    }
});
