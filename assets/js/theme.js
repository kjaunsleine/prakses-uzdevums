(function(){

  'use strict';

  function windowWidthCheck(){
    if ($(window).width() < 992) {
      $('.lang-menu').removeClass('dropdown');
      $('.lang-menu').html('');
      let html = '';
      html += '<a class="nav-link active" href="#">LV</a>';
      html += '<a class="nav-link" href="#">EN</a>';
      html += '<a class="nav-link" href="#">RU</a>';
      $('.lang-menu').html(html);
    } 
    else {
      $('.lang-menu').addClass('dropdown');
      $('.lang-menu').html('');
      let html = '';
      html += '<a class="nav-link navbar-toggler-right" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LV</a>';
      html += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
      html += '<a class="dropdown-item" href="#">EN</a>';
      html += '<a class="dropdown-item" href="#">RU</a></div>';
      $('.lang-menu').html(html);
    }
    } 

    $(window).resize(windowWidthCheck);
}());

/* (function(){
  'use strict';
  
  function windowWidthCheck(){
    if ($(window).width() < 992) {
    $('.lang-menu').removeClass('dropdown');
    $('.lang-menu').html('');
    let html = '';
    html += '<a class="nav-link active" href="#">LV</a>';
    html += '<a class="nav-link" href="#">EN</a>';
    html += '<a class="nav-link" href="#">RU</a>';
    $('.lang-menu').html(html);
    } 
  }

  windowWidthCheck();
  
}()); */
