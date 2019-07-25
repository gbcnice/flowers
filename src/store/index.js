function sort(zd,list){
    var compare = function (obj1, obj2) {
            var val1 = obj1[zd];
            var val2 = obj2[zd];
            if (val1 < val2) {
            return -1;
            } else if (val1 > val2) {
            return 1;
            } else {
            return 0;
            }  
        }  
        list.sort(compare)
}
export {
    sort
}