//按条件查找
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
//模糊查询
function mohusearch(list,liststyle,one,two,content,newlist){
    list.filter((item)=>{
        item[liststyle].forEach((text)=>{
            if(text[one].includes(content)){
                newlist.push(text)
            }else if(text[two].includes(content)){
                newlist.push(text)
            }
        })
    })
}
export {
    sort,
    mohusearch
}