define(['aside', 'header', 'loading', 'nprogress', 'jquery', 'template'], function (undefined, undefined, undefined, nprogress, $, template) {
  //  渲染讲师列表
  (function () {
    $.get('/v6/teacher', function (data) {
      if (data.code === 200) {
        $('.table-teacher-list').append(template('teacher-list-tpl', data))
      }
    })
  })();
  nprogress.done();
});