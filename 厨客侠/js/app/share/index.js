
app.controller('controller', function($scope,$global) {

    $scope.share_type = 2;
    $scope.sort_type = 1;
    $scope.shareType = setShareType;
    $scope.nextShare = nextShare;
    $scope.sortType = setSortType;

    $scope.shares = [];

    $scope.clickLike = clickLike;

    initController();




    function clickLike(index,id){

        $global.get(URLShareLike + "?id=" + id,function(data){
            var share = $scope.shares[index];
            if(share.has_like){
                share.like_count --;
            }else{
                share.like_count ++;
            }

            share.has_like = !share.has_like;
        },null);
    }

    function initController(){
        getSharesCall(URLShareIndex + "?share_type=" + $scope.share_type);
        // getBannersCall(URLBannerIndex);
    }

    function setShareType(type){
        if($scope.share_type != type){
            $scope.share_type = type;
            $scope.shares = [];
            $scope.hasNext = false;
            getSharesCall(URLShareIndex + "?share_type=" + $scope.share_type + "&sort_type=" + $scope.sort_type);
        }
    };

    function setSortType(type){
        console.log('setSortType');
        if($scope.sort_type != type){
            $scope.sort_type = type;
            $scope.shares = [];
            $scope.hasNext = false;
            getSharesCall(URLShareIndex + "?share_type=" + $scope.share_type + "&sort_type=" + $scope.sort_type);


            mui('#filterTerm').popover('toggle');
        }
    }


    //get datas
    function nextShare(sender){
        getSharesCall(sender);
    };

    function getSharesCall(url){


        $global.get(url,function(data){
            $scope.shares = $scope.shares.concat(data.result.shares.data);
            $scope.next_page_url = data.result.shares.next_page_url;
            $scope.hasNext = data.result.shares.next_page_url != null;
        },null);
    }

    function getBannersCall(url){
        $http.get(url).then(function(data){
            $scope.banners = data.result.banners;
        },null);
    }
});



