define([
  'jquery',
  'jqueryCookie',
  'template',
], function ($, undefined, template) {

  // 左上角的用户信息展示
  (function () {
    // 1:获取本地储存的用户信息
    var userInfoStr = $.cookie('userInfo');
    var userInfoObj;
    // 2:把用户信息解析为js对象方便使用
    try {
      userInfoObj = JSON.parse(userInfoStr);

    } catch (e) {
      userInfoObj = {};
    }
    // 3:拼接用户信息模板字符串
    var prifileTpl =
      '<div class="profile">' +
      '<div class="avatar img-circle">' +
      '<img src={{tc_avatar? tc_avatar:"/img/default.png"}}>' +
      '</div>' +
      '<h4>{{tc_name}}</h4>' +
      '</div>';

    // 4:调用模板引擎的complie方法编译这个模板字符串，得到一个渲染函数
    var userInfoRender = template.compile(prifileTpl);
    // 5:调用渲染函数。把要渲染数据传入进去，就会得到一个完整的HTML
    var userInfoHTML = userInfoRender(userInfoObj);
    // 6:最后把这个HTML替换到页面指定的位置
    $('.aside').prepend(userInfoHTML);
  })();

  // 导航栏下边列表
(function(){
  // 点击下拉列表中的a标签显示或回缩列表
  $('.navSlide').on('click',function(){
    $(this).next().slideToggle();
  });
})();

// 根据页面定义左侧导航栏焦点
(function(){
  /**
 		 * 根据页面规律进行焦点
 		 * 1：获取当前页面的路径
 		 * 2：移除所有a标签的active类名
 		 * 3：把路径当做属性选择器选择页面对应的a标签，给对应的a标签单独添加
 		 * */
  var pathHref={
  '/html/teacher/teacher_add.html':'/html/teacher/teacher_list.html'  //键值对
};
var pathname=location.pathname;
var aHref=pathHref[pathname]?pathHref[pathname]:pathname;
$('.navs a').removeClass('active').filter('[href="'+aHref+'"]').addClass('active');
})();
});

