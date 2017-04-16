function randomArray(arrLen) {
    var rArr= new Array(arrLen);
    for (var i = 0; i<arrLen; i++) 
	{
        rArr[i] = Math.random();
    }
    return rArr;
}


function randomIndex(arrLen) {
    var iArr= new Array(arrLen);
    var rArr = randomArray(arrLen);  
    for (var i = 0; i<arrLen; i++) 
		{  //遍历数组,寻找最小的数字
        iArr[i] = i;  
        var t = rArr[i];  
        for (var j = 0; j<arrLen; j++) {  
            if (rArr[j]<t) {  
			
                iArr[i] = j;
                t =rArr[j];
            }
        }
        delete t;
        rArr[iArr[i]] = 1;  
    }
    return iArr;
}

function randomSort(arr) 
{
    arrLen = arr.length;
    var tArr = new Array(arrLen);  
    var iArr = randomIndex(arrLen);  
    for (var i = 0; i<arrLen; i++) 
	{
        tArr[i] = arr[iArr[i]]; 
    }
    return tArr;
}