
// 配置文件：基地址
var BASEURL = 'http://192.168.1.3:8000';
// var BASEURL = 'localhost:8000';


var APILIST = {
    // 1.用户登录地址
    user_login: BASEURL + '/admin/login',
    // 2.用户退出地址
    user_logout: BASEURL + '/admin/logout',
    // 3.获取用户信息地址
    user_getInfo: BASEURL + '/admin/getuser',
    // 4.文章类别搜索
    category_get: BASEURL + '/admin/category_search',
    // 5.文章类别添加
    category_add: BASEURL + '/admin/category_add',
    // 6.文章类别删除
    category_del: BASEURL + '/admin/category_delete',
    // 7.文章类别编辑idet
    category_edit: BASEURL + '/admin/category_edit',



    
}