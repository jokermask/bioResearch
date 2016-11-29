webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	var _regCheck = __webpack_require__(2);

	$(function () {
	    initClick();
	}); /**
	     * Created by 天俊sama on 2016/11/19.
	     */


	function initClick() {
	    //身份选择
	    $("#id-select").change(function () {
	        if ($("#id-select").val() != 0) {
	            $(".id-panel").removeClass("hide");
	        } else {
	            $(".id-panel").addClass("hide");
	        }
	    });
	    //注册
	    $("#register-btn").click(function () {
	        var form = {
	            username: $("#username").val(),
	            password: $("#password").val(),
	            passconf: $("#passwordConfirm").val(),
	            realname: $("#realname").val(),
	            email: $("#email").val(),
	            idLvl: $("#id-select").val(),
	            idCode: $("#idCode").val()
	        };
	        var reg_check = new _regCheck.regCheck();
	        var res = reg_check.checkForm(form);
	        if (res.status) {
	            $.post("url", form, function () {});
	        } else {
	            $(".inputWarn").text(res.errMsg);
	            $(".inputWarn").removeClass("hide");
	        }
	    });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by 天俊sama on 2016/10/3.
	 */
	var regCheck = function () {
	    function regCheck() {
	        _classCallCheck(this, regCheck);
	    }

	    _createClass(regCheck, [{
	        key: 'checkForm',
	        value: function checkForm(form) {
	            var username = form.username;
	            var password = form.password;
	            var passconfirm = form.passconf;
	            var realname = form.realname;
	            var email = form.email;
	            var idLvl = form.idLvl;
	            var idCode = form.idCode;
	            var result = {
	                status: true,
	                errMsg: ""
	            };
	            var nameReg = /^[A-Za-z0-9|_]{6,16}$/; //6~16位字母数字下划线
	            var passwordReg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,16}$/; //6~16位可包含特殊字符
	            var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	            var idCodeReg = /[0-9]+/; //纯数字
	            if (!username || !nameReg.test(username)) {
	                result.status = false;
	                result.errMsg = '用户名为空或者格式不正确';
	                return result;
	            }
	            if (!password || !passwordReg.test(password)) {
	                result.status = false;
	                result.errMsg = '密码为空或格式不正确';
	                return result;
	            }
	            if (password != passconfirm) {
	                result.status = false;
	                result.errMsg = '两次密码不一致';
	                return result;
	            }
	            if (!realname) {
	                result.status = false;
	                result.errMsg = '姓名不能为空哦';
	                return result;
	            }
	            if (!email || !emailReg.test(email)) {
	                result.status = false;
	                result.errMsg = '邮箱为空或格式不正确';
	                return result;
	            }
	            if (idLvl != 0 && !idCodeReg.test(idCode)) {
	                result.status = false;
	                result.errMsg = '证件号码不正确';
	                return result;
	            }
	            return result;
	        }
	    }]);

	    return regCheck;
	}();

	exports.regCheck = regCheck;

/***/ }
]);