app.factory('$global',function($http){
    var factory = {};

    // factory.get = function(url,successCallback,errorCallback){
    //     console.log('get:' + url);
    //     $http.get(url,{
    //         responseType : 'json'
    //     }).then(
    //         function(response){successCall(response,successCallback);},
    //         function(response){errorCall(response,errorCallback);}
    //     );
    //
    // };

    factory.get = function(url,successCallback,errorCallback){

        $http({
            url:url,
            method:'GET'

        }).then(
                function(response){successCall(response,successCallback);},
                function(response){errorCall(response,errorCallback);}
            );

    }

    factory.post = function(url,data,successCallback,errorCallback){
        // console.log('post:' + url);
        // console.log('data:' + JSON.stringify(data));
        // $http.post(url,data,{
        //     responseType : 'json'
        // }).then(
        //     function(response){successCall(response,errorCallback);},
        //     function(response){errorCall(response,errorCallback);}
        // );

        $http({
            url:url,
            method:'POST',
            data : data,
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];

                for(var p in obj){
                    console.log(obj[p] instanceof Array);
                    if(obj[p] instanceof Array){
                        var name=encodeURIComponent(p);
                        var list = obj[p];
                        for(var q in list){
                            str.push(name + "[]=" + encodeURIComponent(list[q]));
                        }

                    }else{
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }

                }
                return str.join("&");
            }

        }).then(
            function(response){successCall(response,successCallback);},
            function(response){errorCall(response,errorCallback);}
        );

    };
    factory.request = function(){

        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;

    }

    function successCall(response,successCallback){
        if(response.data.code == 300){
            global.alert(response.data.msg);
            return;
        }
        successCallback(response.data);
    }

    function errorCall(response,errorCallback){
        // console.log('response ' + JSON.stringify(response));
        switch (response.status){

            case 401:
                location.href=HTMLLogin + "?redirect=" + encodeURIComponent(location.href);
                break;

            case 500:
                alert('出错');
                break;
            default:
                break;
        }

        if(errorCallback != null){
            errorCallback(reponse);
        }
    };



    return factory;
});