$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

function animateIt (animeType) {
  var curr_pic = ".pala_animation";


      animeType += " animated"
      var el = $(curr_pic).addClass(animeType);
      setTimeout(function() {
          el.removeClass(animeType);
      }, 500);


  }

var kimgeldi = $(location).attr('href').split('?')[1];

var animeTypes = {

    "tolga" : "flipInY",
    "ayse" : "tada",
    "pinar" : "jello",
    "sureyya" : "jackInTheBox",
};

$(document).ready(function() {

    console.info('animation 1 is index ' + $(location).attr('pathname').indexOf("index"));
    if ($(location).attr('pathname') == "/") {
      $('.main_animation').animateCss('animated rubberBand');
    } else {
      var elm = "#section_"+ kimgeldi;

      $(elm).toggleClass('d-none d-block');

      $(elm).animateCss('fadeInDownBig', function() {

        animateIt (animeTypes[kimgeldi]);
        $(".pala_animation, .animator").click(function() {
          animateIt (animeTypes[kimgeldi]);
        });
      });
    }

});
