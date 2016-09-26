// Test for WebP Support
//
// try {
//   var webp = new Image();
//   webp.onerror = function () { document.documentElement.className += " no-webp"; };
//   webp.onload = function () { document.documentElement.className += " webp"; };
//   webp.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=='
// } catch (err) {
//   document.documentElement.className += " no-webp";
// }

try{var webp=new Image;webp.onerror=function(){document.documentElement.className+=" no-webp"};webp.onload=function(){document.documentElement.className+=" webp"};webp.src="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="}catch(a){document.documentElement.className+=" no-webp"};
