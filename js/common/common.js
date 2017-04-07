define(['jquery', 'jqueryCookie'], function ($, undefined) {

	(function () {
		/**
		 * 判断用户有没有登陆过，
		 * 没有的话跳转到登陆页。
		 * */
		// var cookieArr = document.cookie.split('; ');
		// var isLogin = false;

		// // 必须是所有的cookie，都没有PHPSESSID，才算没有登陆过，那么打到登陆页面
		// for(var i = 0; i < cookieArr.length; i++) {

		// 	// 存在，那么证明登陆过，结束循环结构
		// 	if(cookieArr[i].indexOf('PHPSESSID=') === 0) {
		// 		isLogin = true;
		// 		break;
		// 	}
		// }

		// // 如果没有登陆过，打到登陆页面
		// !isLogin && (location.href = '/html/home/login.html');

		if (!$.cookie('PHPSESSID')) {
			location.href = '/html/home/login.html';
		}
	})();
	// ajax-loading
	(function(){
		$(document).on('ajaxStart',function(){
			$('.overlay').show();
		}).on('ajaxStop',function(){
			$('.overlay').hide();
		})
	})();
});