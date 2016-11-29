webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	$(function () {
	    initClick();
	});

	function initClick() {
	    $('.group-member').click(function () {
	        $('.group-member').removeClass("active");
	        $(this).addClass("active");
	        var url = $(this).attr('href') + "?realname=" + $(this).data("name");
	        $.get(url, function (res) {
	            //$(".member-info").html(res) ;//这里返回个人介绍
	        });
	        return false;
	    });

	    $(".main-group").click(function () {
	        if ($(this).hasClass("my-close")) {
	            $(".member-list").css("height", "auto");
	            $(this).removeClass("my-close");
	            $(this).addClass("spread");
	        } else {
	            $(".member-list").css("height", "0");
	            $(this).removeClass("spread");
	            $(this).addClass("my-close");
	        }
	    });

	    $(".coop-group").click(function () {
	        if ($(this).hasClass("my-close")) {
	            $(".coop-member-list").css("height", "auto");
	            $(this).removeClass("my-close");
	            $(this).addClass("spread");
	        } else {
	            $(".coop-member-list").css("height", "0");
	            $(this).removeClass("spread");
	            $(this).addClass("my-close");
	        }
	    });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);