

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var blockTween = new TweenMax.from(".amina1", 1.5, {
    opacity: 0,
    position: "relative",
    top: 200,
    delay: 0.3,
    ease: Power4.easeOut
  });

  var ourscene = new ScrollMagic.Scene({
    triggerElement: "#upto"
  })
    .setTween(blockTween) //insted of tween it could have been a class toggle classToggle('#bla', 'class name')
    .addTo(controller);
});



$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var blockTween = new TweenMax.from(".who", 1.5, {
    opacity: 0,
    position: "relative",
    top: 200,
    delay: 0.3,
    ease: Power4.easeOut
  });

  var ourscene = new ScrollMagic.Scene({
    triggerElement: "#who"
  })
    .setTween(blockTween) //insted of tween it could have been a class toggle classToggle('#bla', 'class name')
    .addTo(controller);
});
