// 与文章有关
var artical = {
    // 最新资讯文章获取
    get: function () {
        return $.get(APILIST.artical_get)
    },
    //焦点图
    search: function () {
        return $.get(APILIST.artical_search)
    },
    rank:function () {
        return $.get(APILIST.artical_rank)
    },
 }