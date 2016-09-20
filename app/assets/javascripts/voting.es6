window.QBE = window.QBE || {};
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
      let $voteCount = $(target).parent().find('.js-vote-count');
      $voteCount.text(data.value);
    });
  }
}
