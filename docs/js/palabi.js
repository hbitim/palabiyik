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

      animeType += " animated";
      el = $(curr_pic);
      setTimeout(function() {
         el = $(curr_pic).addClass(animeType);
      }, 600);

      setTimeout(function() {
          el.removeClass(animeType);
      }, 500);

  }

var kimgeldi = $(location).attr('href').split('?')[1];

/*
"attention_seekers": {
  "bounce": true,
  "flash": false,
  "pulse": false,
  "shake": true,
  "headShake": true,
  "swing": true,
  "tada": true,
  "wobble": true,
  "jello":true
}
*/
var animeTypes = {
    "tolga" : "rotateIn",
    "ayse" : "tada",
    "pinar" : "jello",
    "sureyya" : "jackInTheBox",
};

$(document).ready(function() {

    console.info('animation 1 is index ' + $(location).attr('pathname').indexOf("index"));
    if ($(location).attr('pathname') == "/" || $(location).attr('pathname').indexOf("index")>=0) {
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
