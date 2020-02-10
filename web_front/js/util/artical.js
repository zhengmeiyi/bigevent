// 与文章有关
var artical = {
    // 最新资讯文章获取
    get: () => $.get(APILIST.artical_get),
    //焦点图
    search: () => $.get(APILIST.artical_search),
    // 热门排行榜
    rank: () => $.get(APILIST.artical_rank),
    // 类别热门排行榜
    rankList: type => $.get(APILIST.artical_rank, {
        type
    }),
    // 类别文章获取
    getID: (type, page) => $.get(APILIST.artical_search, {
        type,
        page
    }),
    getdetail: id => $.get(APILIST.artical_detail, {
        id
    })

}