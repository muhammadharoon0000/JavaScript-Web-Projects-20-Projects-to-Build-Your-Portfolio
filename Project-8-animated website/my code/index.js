$myfirst = $("#blackOverlay");
var scrollstate = "top";
$(window).scroll(function () {
  var scrollPos = $(window).scrollTop();
  if (scrollPos == 0 && scrollstate === "top") {
    $(".heading").hide().fadeIn(2000);
  } else {
    $(".heading").show();
  }
});
// $("#blackOverlay").on("mouseover", function () {
//   $(".heading").hide().fadeIn(2000);
// });
// $("#blackOverlay").on("mouseout", function () {
//   $(".heading").show();
// });
console.log($(window).scrollTop());
