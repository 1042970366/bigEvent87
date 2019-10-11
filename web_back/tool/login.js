$(function(){
    $('.input_sub').on('click',function(){
        var input_txt = $('.input_txt').val()
        var input_pass = $('.input_pass').val()
        if (!input_pass || !input_txt){
            alert('请将信息填写完整')
            return
        }

        $.ajax({
            type: 'post',
            url: USER_LOGIN ,
            data: {
                user_name: input_txt,
                password: input_pass
            },
            success: function(res){
                if (res.code === 200){
                    location.href = './index.html'
                    return
                }
                alert('用户名或者密码填写错误')
            }
        })
    })
})