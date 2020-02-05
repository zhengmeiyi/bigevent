// 与文章分类有关
var category={
    get:function(){
       return $.get(APILIST.category_get)
    },
    add:function(name,slug){
        return $.post(APILIST.category_add,{'name':name,'slug':slug})
    },
    del:function(id){
        return $.post(APILIST.category_del,{'id':id})
    }
}