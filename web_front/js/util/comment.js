// 与评论有关
var comment = {
    // 增加评论
    add: (name,content,article_id)=>$.post(APILIST.comment_add,{name,content,article_id}),
    //获取评论并显示
    get:article_id=>  $.get(APILIST.comment_get,{article_id }),
  
}