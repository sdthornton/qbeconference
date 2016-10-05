window.QBE || (window.QBE = {});
QBE.Voting = class Voting {
  constructor() {
    this.vote = $('.js-vote');
    this.vote.off('.js-vote').on('click.vote', e => this.onVote(e));
  }

  onVote(e) {
    e.preventDefault();
    let target = e.target;

    $.ajax({
      url: target.href,
      type: 'POST',
      dataType: 'json'
    }).done((data) => {
      let $target = $(target);
      let $parent = $target.parents('.c-discussion-item__voting');
      let $voteCount = $parent.find('.js-vote-count');

      $parent.find('.c-vote--chosen').removeClass('c-vote--chosen');
      $target.addClass('c-vote--chosen');
      $voteCount.text(data.value);
    });
  }
}
