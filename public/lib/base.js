/**
 * Created by 天俊sama on 2016/9/25.
 */

$(function () {
    initClick() ;
});

function initClick(){
    //login
    var loginInt = $(".login-int") ;

    loginInt.click(function(){
        $(".login-panel").show() ;
    });

    $("#close-btn").click(function(){
        $(".login-panel").hide() ;
    });

    $("#login-btn").click(function(){
        var data = {} ;
        data.username = $("#username").val() ;
        data.password = $("#password").val() ;
        $.post("url",data,function(res){
            if(res.code===0){
                swal({title:"登录成功",type:"success"}) ;
                loginIcon.hide() ;
                $(".home-int").show() ;
            }else{
                $(".login-err").text(res.errMsg) ;
            }
        });
    });
}
