window.QBE = window.QBE || {};
QBE.Voting = class Voting {
  constructor() {
    this.vote = $('.vote');
    this.vote.off('.vote').on('click.vote', e => this.onVote(e));
  }

  onVote(e) {
    e.preventDefault();
    let target = e.target;
    $.ajax({
      url: target.href,
      type: 'POST',
      dataType: 'json'
    }).done((data) => {
      let $voteCount = $(target).parent().find('.vote-count');
      $voteCount.text(data.value);
    });
  }
}
