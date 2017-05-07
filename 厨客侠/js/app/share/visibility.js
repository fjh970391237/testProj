app.controller('controller', function($scope,$global) {

    $scope.publicType = $global.request().publicType;

    $scope.clickOkay = clickOkay;

    function clickOkay(){

        parent.selectPublicType($scope.publicType);

    }

});