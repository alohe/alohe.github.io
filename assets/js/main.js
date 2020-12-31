$(function () {
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
});

// Cache selectors
var topMenu = $("#projectsheader"),
topMenuHeight = topMenu.outerHeight()+15,
// All list items
menuItems = topMenu.find("a"),

// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});




$(window).scroll(function(e) {

  if (window.innerWidth > 998) {
    var $el = $(".fixedElement");
    var isPositionFixed = $el.css("position") == "fixed";

   if ($(this).scrollTop() > 400 && !isPositionFixed) {
     $el.css({ position: "fixed", top: "0px" });
     var hed = document.querySelector("#projectsheader");
     //hed.classList.add("fixednav");
   }

   if ($(this).scrollTop() < 400 && isPositionFixed) {
     $el.css({ position: "static", top: "0px" });
     var hed = document.qquerySelector("#projectsheader");
     //hed.classList.remove("fixednav");
   }

  }

  // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   // Get the id of the current element
   cur = cur[cur.length-1];

   console.log(cur ? cur[0].id : '');

   var id = cur && cur.length ? cur[0].id : "";

   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");
});



/* fixed nav for mobile */

$(window).scroll(function(e) {

  if (window.innerWidth <= 700) {
    var $el = $(".fixedElement2");
    var isPositionFixed = $el.css("position") == "fixed";

   if ($(this).scrollTop() > 500 && !isPositionFixed) {
     $el.css({ position: "fixed", bottom: "0px", width: "100%" });
    
   }

   if ($(this).scrollTop() < 500 && isPositionFixed) {
     $el.css({ position: "static", bottom: "0px", width: "auto"});
   }

  }

});



/* smooth scroll */

$("#whoBtn").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#who").offset().top
    },
    500
  );
});


$("#upBtn").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#upto").offset().top
    },
    500
  );
});



$("#projectBtn").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#proj").offset().top
    },
    500
  );
});



$("#devbtn").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#dev").offset().top
    },
    500
  );
});



$("#sdev").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#dev").offset().top
    },
    500
  );
});



/* header animation */
var headerImgs = document.querySelectorAll(".masthead-img");


var imgs = [
  "https://transcenders.co/assets/img/mcn.gif",
  "https://ph-files.imgix.net/fb0a6f07-4a88-4c5e-99b5-0e475d1ea215.jpeg",
  "https://cdn.dribbble.com/users/2831668/screenshots/11543594/media/e7a2a872aa6f535f24e3d0425843cae0.png",
  //"https://cdn.dribbble.com/users/2831668/screenshots/11360846/media/b9bae33e1be618df8bf0fc4c263f58b1.gif",
  "https://cdn.dribbble.com/users/2831668/screenshots/11458323/media/f0f3675b8b660e66d0b2c95422d16472.gif",
];
var current = 0;

setInterval(() => {
  console.log("object", current);

  headerImgs[0].style.backgroundImage = 'Url("' + imgs[current] + '")';
  headerImgs[1].style.backgroundImage = 'Url("' + imgs[current] + '")';

  if(current < (imgs.length - 1)){
    current += 1;
  } else {
    current = 0;
  }
}, 3000);
