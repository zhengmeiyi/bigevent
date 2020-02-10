var user = {
    // -----------------用户登录
    user_login: (user_name, password) => $.post(APILIST.user_login, {
        user_name,
        password
    }),
    // -----------------用户退出
    user_logout: () => $.post(APILIST.user_logout),
    // -----------------用户信息获取
    user_getInfo: () => $.get(APILIST.user_getInfo)


}