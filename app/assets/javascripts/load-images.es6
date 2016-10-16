window.QBE || (window.QBE = {});
QBE.LoadImages = class LoadImages {
  constructor() {
    let fancyImages = document.querySelectorAll('.o-fancy-image');

    for (var i = 0, len = fancyImages.length; i < len; i++) {
      this.loadImg(fancyImages[i]);
      if (i == len-1) {
        document.body.className += " js-page-loaded";
      }
    }
  }

  loadImg(fancyImage) {
    let useBackground = fancyImage.classList.contains('o-fancy-image--use-background');
    let fullDiv;

    let fullImage = new Image();
    if (useBackground) {
      fullDiv = document.createElement('div');
      fullDiv.className = "o-fancy-image__image";
    } else {
      fullImage.className = "o-fancy-image__image";
    }

    fullImage.onload = function () {
      if (useBackground) {
        fullDiv.style.backgroundImage = `url('${fullImage.src}')`;
      }
      useBackground ? fullDiv.classList.add('js-loaded') : fullImage.classList.add('js-loaded');
    };

    fullImage.onerror = function () {
      fullImage.src = fancyImage.dataset.src;
    };

    fullImage.src = fancyImage.dataset.webpSrc;

    useBackground ? fancyImage.appendChild(fullDiv) : fancyImage.appendChild(fullImage);
  }
}
