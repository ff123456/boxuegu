define(['bootstrap', 'aside', 'header', 'loading', 'nprogress', 'jquery', 'template'], function (undefined, undefined, undefined, undefined, nprogress, $, template) {
  //  渲染讲师列表
  (function () {
    $.get('/v6/teacher', function (data) {
      if (data.code === 200) {
        $('.table-teacher-list').append(template('teacher-list-tpl', data))
      }
    })
  })();

  //  渲染讲师列表详情
  (function () {
    $(document).on('click', '.teacher-view', function () {
      $.get('/v6/teacher/view', {
        tc_id: $(this).data('teacher-id')
      }, function (data) {
        if (data.code === 200) {
          $('#teacher-modal').html(template('teacher-view-tpl', data.result))
        }
      })
    });
  })();

  // 注销启动讲师
  (function () {
    // 给document绑定事件委托触发teacher-handle
    $(document).on('click', '.teacher-handle', function () {
      var self = this;
      $.post('/v6/teacher/handle', {
          tc_id: $(this).data('teacher-id'),
          tc_status: $(this).data('teacher-status')
        },function (data) {

          if (data.code == 200) {

            if (data.result.tc_status == 0) {
              $(self).data('teacher-status', 0);
              $(self).html('注销');
            } else {
              $(self).data('teacher-status', 1);
              $(self).html('启用');
            }
          }
        })
    })
  })();
  nprogress.done();
});