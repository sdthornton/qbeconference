//= require jquery3
//= require jquery_ujs
//= require turbolinks
//= require polyfills
//= require_tree .
//= require zxcvbn

window.QBE || (window.QBE = {});
QBE.isReady = true;

document.addEventListener('turbolinks:before-render', function (e) {
  if (e.data.newBody.classList.contains('js-page-loaded')) {
    var fancyImages = e.data.newBody.querySelectorAll('.o-fancy-image');
    for (var i = 0, len = fancyImages.length; i < len; i++) {
      fancyImages[i].style.visibility = 'hidden';
    }
  }
});
