// 与文章有关
var comment = {
    // 最新资讯文章获取
    add: function (name,content,article_id) {
        return $.post(APILIST.comment_add,{
            'name':name,
            'content':content,
            'article_id':article_id
        })
    },
  
}