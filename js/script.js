var header = document.querySelector('.header');
var toggleNav = document.querySelector('.header__toggle-nav');

var rangeBefore = document.querySelector('.stats__range-button--before');
var rangeAfter = document.querySelector('.stats__range-button--after');
var imgItemBefore = document.querySelector('.stats__img-item--before');
var imgItemAfter = document.querySelector('.stats__img-item--after');
var imgBefore = document.querySelector('.stats__img--before');
var imgAfter = document.querySelector('.stats__img--after');

header.classList.remove('header--nojs');

toggleNav.addEventListener('click', function() {
  if (header.classList.contains('header--opened')) {
    header.classList.remove('header--opened');
  } else {
    header.classList.add('header--opened');
  }
});

rangeBefore.addEventListener('click', function() {
  imgItemBefore.classList.remove('visually-hidden');
  imgItemAfter.classList.add('visually-hidden');
  imgItemAfter.classList.remove('stats__img-item--js');
  imgItemBefore.classList.add('stats__img-item--js');
  imgAfter.classList.remove('stats__img--js');
  imgBefore.classList.add('stats__img--js');
});

rangeAfter.addEventListener('click', function() {
  imgItemAfter.classList.remove('stats__img--nojs');
  imgItemBefore.classList.add('visually-hidden');
  imgItemBefore.classList.remove('stats__img-item--js');
  imgItemAfter.classList.remove('visually-hidden');
  imgItemAfter.classList.add('stats__img-item--js');
  imgBefore.classList.remove('stats__img--js');
  imgAfter.classList.add('stats__img--js');
});
