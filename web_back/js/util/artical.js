// 与文章有关
var artical = {
    get: function (page) {
        return $.get(APILIST.artical_get,{'page':page})
    },
    // add: function (name, slug) {
    //     return $.post(APILIST.category_add, {
    //         'name': name,
    //         'slug': slug
    //     })
    // },
    // del: function (id) {
    //     return $.post(APILIST.category_del, {
    //         'id': id
    //     })
    // },
    // edit: function (id,name,slug){
    //     return $.post(APILIST.category_edit, {
    //         'id': id,
    //         'name':name,
    //         'slug':slug
    //     })
    // }
}