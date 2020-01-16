var user = {
    // -----------------用户登录
    user_login: function (user_name, password) {
        return $.post(APILIST.user_login, {
            "user_name": user_name,
            "password": password
        })
    },
    // -----------------用户退出
    user_logout: function () {
        return $.post(APILIST.user_logout)
    },
    // -----------------用户信息获取
    user_getInfo: function () {
       return $.get(APILIST.user_getInfo)
    }

}