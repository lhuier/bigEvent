$(function () {
    $('.log a').on('click', function () {
        $('.log').hide().next().show()

    });
    $('.reg a').on('click', function () {
        $('.reg').hide().prev().show()
    });

    layui.form.verify({
        password: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repassword: function (value) {
            if ($('#shezhi').val() !== value) {
                return '密码不一致'
            }
        },
    });

    $('.layui-form').submit(function (e) {
        e.preventDefault()
        var username = $('#reg-username').val();
        var password = $('#shezhi').val();
        var formdata = {
            username: username,
            password: password,
        }
        $.post('http://ajax.frontend.itheima.net/api/reguser', formdata, function (res) {
            console.log(res);
            if (res.status === 0) {
                console.log(res.message)
                alert(res.message)
            } else {
                console.log(res.message)
                alert(res.message)
            }
        })
    })

})