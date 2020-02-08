// 获取文章分类
var category = {
    get: function () {
        return $.get(APILIST.category_get)
    },
}