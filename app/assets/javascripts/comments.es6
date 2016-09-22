window.QBE = window.QBE || {};
QBE.Comment = class Comment {
  constructor() {
    this.$toggle = $('.js-comment-toggle');
    this.$toggle.on('click', e => {
      e.preventDefault();

      let $target = $(e.currentTarget);
      $target.next().toggleClass('u-hide');
      $target.find('.icon-arrow-right').removeClass('icon-arrow-right').addClass('icon-arrow-down');
      $target.find('.icon-arrow-down').removeClass('icon-arrow-down').addClass('icon-arrow-right');
    });
  }
}
