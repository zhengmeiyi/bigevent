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
        // 文章删除
        del: function (id) {
            return $.get(APILIST.artical_del, {
                'id': id
            })
        },
        add: function (fd) {
            return $.ajax({
                url: APILIST.artical_add,
                type: 'post',
                data: fd,
                processData: false,
                contentType: false
            })
    },

    // edit: function (id,name,slug){
    //     return $.post(APILIST.category_edit, {
    //         'id': id,
    //         'name':name,
    //         'slug':slug
    //     })
    // }
}