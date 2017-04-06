define(['jquery', 'jqueryCookie', 'nprogress'], function ($, undefined, nprogress) {

  (function () {
    if ($.cookie('PHPSESSID')) {
      location.href = '/';
    }
  })();

  // 表单事件
  (function () {
    // 监听表单提交事件，并阻止，转成ajax请求
    $('#login-form').on('submit', function () {
      // console.log(this);
      // 这里的this是form原生对象，对form进行包装，才可以调用IQ的方法

      $.ajax({ //发送请求，页面不需要刷新
        url: '/v6/login',
        type: 'POST',
        data: $(this).serialize(),
        // 发送成功跳转到页面
        success: function (data) {
          if (data.code == 200) {
            location.href = '/';
          }
        },
        // 请求失败的时候给出错误信息
        error: function () {
          alert(arguments[2]);
        }
      })
      // 阻止页面默认跳转行为    
      return false;
    })
  })();
nprogress.done();
});