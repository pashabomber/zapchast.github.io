$(function () {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});

$(function(){
    $('.catalog-page .left-col .name').click(function() {
        $('.catalog-page .left-col form').slideToggle();
    });
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('.navi .index-catalog-menu.inner .name').click(function() {
        $(this).toggleClass('active');
        $('.navi .index-catalog-menu.inner ul').slideToggle();
    });
    $('.index-catalog-menu .name').click(function() {
        $('.index-catalog-menu ul').toggleClass('opened');
    });
    $('.menubg').click(function() {
        $('.menubg').fadeOut();
        $('.top-menu').removeClass('opened');
    });
    $('.header .menu-button').click(function() {
        $('.menubg').fadeIn();
        $('.top-menu').addClass('opened');
    });
	$('.index-page-slider').slick({
		autoplay: true,
		arrows: false
	});
    $('.brands-block .list').slick({
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
    $('.item-page .more-items .list').slick({
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-for',
      focusOnSelect: true
    });
    $('.slider-for2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-nav2'
    });
    $('.slider-nav2').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider-for2',
      focusOnSelect: true
    });
});