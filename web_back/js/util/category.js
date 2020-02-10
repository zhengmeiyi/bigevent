// 与文章分类有关
var category = {
    get: () => $.get(APILIST.category_get),

    add: (name, slug) => $.post(APILIST.category_add, {
        name,
        slug
    }),
    del: id => $.post(APILIST.category_del, {
        id
    }),
    edit: (id, name, slug) => $.post(APILIST.category_edit, {
        id,
        name,
        slug
    })

}