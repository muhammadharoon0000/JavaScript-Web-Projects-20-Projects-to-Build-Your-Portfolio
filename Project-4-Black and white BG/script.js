let a = $('input[type="checkbox"]');
const nav = $("#nav");
const $toggleicon = $("#toggle-icon");
const image1 = $("#image1");
const image2 = $("#image2");
const image3 = $("#image3");
const textbox = $("#text-box");
function darkmode() {
  nav.css("background", "rgb(0 0 0 /50%");
  textbox.css("background", "rgb(255 255 255 /50%");
  $toggleicon.find("span").text("Dark mode");
  $toggleicon.find("i").removeClass("fa-sun");
  $toggleicon.find("i").addClass("fa-moon");
  image1.attr("src", "img/undraw_proud_coder_dark.svg");
  image2.attr("src", "img/undraw_feeling_proud_dark.svg");
  image3.attr("src", "img/undraw_conceptual_idea_dark.svg");
}
function lightmode() {
  nav.css("background", "rgb(255 255 255 /50%");
  textbox.css("background", "rgb(0 0 0 /50%");
  $toggleicon.find("span").text("Light mode");
  $toggleicon.find("i").removeClass("fa-moon");
  $toggleicon.find("i").addClass("fa-sun");
  image1.attr("src", "img/undraw_proud_coder_light.svg");
  image2.attr("src", "img/undraw_feeling_proud_light.svg");
  image3.attr("src", "img/undraw_conceptual_idea_light.svg");
}
function switchtheme(event) {
  if (event.target.checked == true) {
    $(document.documentElement).attr("data-theme", "dark");
    darkmode();
  } else {
    $(document.documentElement).attr("data-theme", "light");
    lightmode();
  }
}
a.on("change", switchtheme);
