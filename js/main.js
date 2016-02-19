// ==================
//
// Tabs
//
// ==================
$(document).ready(function () {
  $tabs = $('.Tabs');
  $tabs.each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $tabs.on('click', 'li > a.Tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.Tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});
// ==================
//
// Overlay
//
// ==================
$(document).ready(function() {
  //if any .Overlays are :target, addClass 'overflow-hidden'
//  var OverlayActive = window.getComputedStyle(document.querySelector('.Overlay'), ':target').length;
  var overlays = document.getElementsByClassName('Overlay');
  //console.log(overlays.length);
  for (var thisOverlay in overlays) {
    //console.log(overlays[thisOverlay].id);
    if($('#' + overlays[thisOverlay].id + ":target")) {
      //console.log('target yes!');
    }
  }
 // console.log(OverlayActive);
  $('.Overlay-trigger, .Overlay-cancel, .Overlay-close').click(function(){
    //var thisOverlayID  = $(this).attr('href');
    //var $thisOverlay   = $(thisOverlayID);
    $('body').toggleClass('overflow-hidden');
  });
});
// ==================
//
// Expander
//
// ==================
$(document).ready(function() {
  $('.Expander-trigger').click(function(){
    $(this).toggleClass("Expander-hidden");
  });
});
// ==================
//
// NavBar
//
// ==================
$(document).ready(function() {
  var $menuToggleEl = $('.js-menu-toggle');
  var $menuEl       = $('.js-NavBar-mainMenu');

  var menuToggle = $menuToggleEl.unbind();
  $menuEl.removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $menuEl.slideToggle(function(){
      if($menuEl.is(':hidden')) {
        $menuEl.removeAttr('style');
      }
    });
  });
});
// ==================
//
// NavBarCentered
//
// ==================
$(document).ready(function() {
  var $menuToggleEl = $(".js-NavBarCentered-menu-toggle").unbind();
  var $menuEl = $(".js-NavBarCentered-mainMenu");
  $menuEl.removeClass("show");
  
  $menuToggleEl.on("click", function(e) {
    e.preventDefault();

    $menuEl.slideToggle(function(){
      if($menuEl.is(":hidden")) {
        $menuEl.removeAttr("style");
      }
    });
  });
});
// ==================
//
// Dropdown
//
// ==================
$(document).ready(function() {
  $(".Dropdown-button").click(function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".Dropdown-menu");
    $menu.toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      $button.html($(this).html());
    });
  });
});