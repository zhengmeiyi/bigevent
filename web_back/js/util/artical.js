// 与文章有关
var artical = {
    // 文章获取
    get: (page, type, state) => $.get(APILIST.artical_get, {

        page,
        type,
        state
    }),
    //文章获取
    getById: id => $.get(APILIST.artical_get, {
        id
    }),
    // 文章删除
    del: id => $.get(APILIST.artical_del, {
        id
    }),
    add: fd => $.ajax({
        url: APILIST.artical_add,
        type: 'post',
        data: fd,
        processData: false,
        contentType: false
    }),


    edit: (fd) => $.ajax({
        url: APILIST.artical_edit,
        type: 'post',
        data: fd,
        processData: false,
        contentType: false
    })

}