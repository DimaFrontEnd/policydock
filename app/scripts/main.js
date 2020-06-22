var app = {

  init: function () {
    app.windowResize();
    app.menu();
    app.sliders();
    app.selectric();
    app.tabs();
    app.accordeon();
  },

  windowResize: function () {
    $(window).on('resize', function () {
      
    });
  },

  windowLoad: function () {
    $(window).on('load', function () {
      
    });
  },

  
  menu: function () {
    $('.b_header').sticky({
      topSpacing: 0,
      zIndex: 5
    });

    var $btnMenu = $('.jsMenu');
    $btnMenu.click(function () {
      $(this).toggleClass('menu-is-active');
      $('.menu').toggleClass('open');
      $('body').toggleClass('menuopen');
    });

    if($('.has-sub-menu').length){
      $('.has-sub-menu > a').each(function(){
        var $this = $(this);
        $this.on('click', function(e){
          e.preventDefault();
          $this.next('.sub-menu').slideToggle(300)
        });
      });
    }
  },


  sliders: function () {
    $('.jsManagementWrapper').slick({
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      touchThreshold: 15,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            autoplaySpeed: 2000,
          }
        },
        {
          breakpoint: 510,
          settings: {
            slidesToShow: 1,
            autoplaySpeed: 2000,
          }
        }
      ]
    });
  },

  selectric: function () {
    $('.jsSelectricView').selectric({
      maxHeight: 150,
      disableOnMobile: false,
      nativeOnMobile: false
    });
  },

  tabs: function () {
    var tabs = $('.jsTabs');
    tabs.each(function () {
      var tabs = $(this),
        tab = tabs.find('.jsTabsTab'),
        content = tabs.find('.jsTabsItem');
      tab.each(function (index, element) {
        $(this).attr('data-tab', index);
      });
      function showContent(i) {
        tab.removeClass('-active');
        content.removeClass('-active').removeClass('-fade');
        tab.eq(i).addClass('-active');
        content.eq(i).addClass('-active');
        setTimeout(function () {
          content.eq(i).addClass('-fade');
        }, 1);
      }
      tab.on('click', function (e) {
        e.preventDefault();
        showContent(parseInt($(this).attr('data-tab')));
      });
    });
  },


  accordeon: function () {
    $('.jsAccord').each(function () {
      var accord = $(this),
        accord_btn = accord.find('.jsAccordBtn'),
        accord_content = accord.find('.jsAccordContent'),
        accord_item = accord.find('.jsAccordItem');

      accord_btn.on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
          $this_item = $this.closest('.jsAccordItem'),
          $this_content = $this.closest('.jsAccordItem').find('.jsAccordContent');
        if ($this.hasClass('-active')) {
          $this.removeClass('-active');
          $this_content.slideUp();
          $this_item.removeClass('item_active');
        } else {
          accord_item.removeClass('item_active');
          accord_btn.removeClass('-active');
          accord_content.slideUp();
          $this.addClass('-active');
          $this_content.slideDown();
          $this_item.addClass('item_active');
        }
      });
    });
  }

};

$(document).ready(app.init());

app.windowLoad();
