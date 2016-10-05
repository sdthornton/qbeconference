window.QBE || (window.QBE = {});
QBE.Comment = class Comment {
  constructor() {
    this.$toggle = $('.js-comment-toggle');
    this.$toggle.on('click', e => {
      e.preventDefault();

      let $target = $(e.currentTarget);
      $target.next().toggleClass('u-hide');

      let $rightArrow = $target.find('.icon-arrow-right');
      if ($rightArrow.length) {
        $rightArrow.removeClass('icon-arrow-right').addClass('icon-arrow-down');
      } else {
        $target.find('.icon-arrow-down').removeClass('icon-arrow-down').addClass('icon-arrow-right');
      }
    });
  }
}
