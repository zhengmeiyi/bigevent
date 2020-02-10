// 配置文件：基地址
var BASEURL = 'http://192.168.1.3:8000';
// var BASEURL = 'localhost:8000';


var APILIST = {

    // 1.文章类别搜索
    category_get: BASEURL + '/category',


    // 2文章获取
    artical_get: BASEURL + '/lastest',
    // 3焦点图
    artical_search: BASEURL + '/search',
    // 4.热门排行榜
    artical_rank: BASEURL + '/rank',
    // 5.文章详情
    artical_detail:BASEURL + '/article',
    // 6.添加评论
    comment_add:BASEURL + '/post_comment',

}