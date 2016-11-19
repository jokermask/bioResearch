/**
 * Created by 天俊sama on 2016/11/19.
 */
import {regCheck} from './regCheck'

$(function () {
    initClick() ;
});

function initClick(){
    //身份选择
    $("#id-select").change(function(){
        if($("#id-select").val()!=0){
            $(".id-panel").removeClass("hide") ;
        }else{
            $(".id-panel").addClass("hide") ;
        }
    });
    //注册
    $("#register-btn").click(function(){
        var form = {
            username:$("#username").val() ,
            password:$("#password").val() ,
            passconf:$("#passwordConfirm").val() ,
            realname:$("#realname").val() ,
            email:$("#email").val() ,
            idLvl:$("#id-select").val() ,
            idCode:$("#idCode").val()
        }
        var reg_check = new regCheck();
        var res = reg_check.checkForm(form);
        if(res.status){
            $.post("url",form,function(){

            });
        }else{
            $(".inputWarn").text(res.errMsg) ;
            $(".inputWarn").removeClass("hide") ;
        }
    });
}