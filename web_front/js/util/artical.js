// 与文章有关
var artical = {
    // 文章获取
    get: function (page, type, atatus) {
        return $.get(APILIST.artical_get, {

            'page': page,
            'type': type,
            'state': status
        })
    },
    //文章获取
    getById: function (id) {
        return $.get(APILIST.artical_get, {
            'id': id,
        })
    },
 }