(function(){
  'use strict';
  
  function windowWidthCheck(){
    if ($(window).width() < 770) {
    $('.lang-menu').removeClass('dropdown');
    $('.lang-menu').html('');
    let html = '';
    html += '<a class="nav-link active" href="#">LV</a>';
    html += '<a class="nav-link" href="#">EN</a>';
    html += '<a class="nav-link" href="#">RU</a>';
    $('.lang-menu').html(html);
    } 
  }
  
}());
