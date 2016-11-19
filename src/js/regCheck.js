/**
 * Created by 天俊sama on 2016/10/3.
 */
class regCheck{

    checkForm(form) {
        var username = form.username;
        var password = form.password;
        var passconfirm = form.passconf;
        var realname = form.realname;
        var email = form.email;
        var idLvl = form.idLvl ;
        var idCode = form.idCode ;
        var result = {
            status: true,
            errMsg: ""
        }
        var nameReg = /^[A-Za-z0-9|_]{6,16}$/;//6~16位字母数字下划线
        var passwordReg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,16}$/;//6~16位可包含特殊字符
        var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var idCodeReg = /[0-9]+/ ;//纯数字
        if (!username || !nameReg.test(username)) {
            result.status = false;
            result.errMsg = '用户名为空或者格式不正确';
            return result ;
        }
        if (!password || !passwordReg.test(password)) {
            result.status = false;
            result.errMsg = '密码为空或格式不正确';
            return result ;
        }
        if (password != passconfirm) {
            result.status = false;
            result.errMsg = '两次密码不一致';
            return result ;
        }
        if (!realname) {
            result.status = false;
            result.errMsg = '姓名不能为空哦';
            return result ;
        }
        if (!email || !emailReg.test(email)) {
            result.status = false;
            result.errMsg = '邮箱为空或格式不正确';
            return result ;
        }
        if(idLvl!=0&&!idCodeReg.test(idCode)){
            result.status = false;
            result.errMsg = '证件号码不正确';
            return result ;
        }
        return result ;
    }
}

export {regCheck}