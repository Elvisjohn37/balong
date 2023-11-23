let LoginUser =
    JSON.parse(localStorage.getItem('users')).find((user) => user.isLogin) || {}

const init = (() => {
    !LoginUser.isLogin && (location.href = './login.html')
})()

const setInfo = (() => {
    document.getElementById(
        'nameValue'
    ).innerHTML = `${LoginUser.firstname} ${LoginUser.lastname}`
    document.getElementById('emailValue').innerHTML = LoginUser.email
    document.getElementById('usernameValue').innerHTML = LoginUser.username
    document.getElementById('logout').addEventListener('click', () => {
        const users = JSON.parse(localStorage.getItem('users')) || []
        localStorage.setItem(
            'users',
            JSON.stringify(
                users.map((user) =>
                    user.username === LoginUser.username
                        ? { ...user, isLogin: false }
                        : user
                )
            )
        )
        location.href = './login.html'
    })
})()
