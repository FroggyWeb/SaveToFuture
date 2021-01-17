const header = $(".header-page"),
  mobnav = $(".mob-nav"),
  mainnav = $(".menu--header"),
  burger = $(".burger");

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 1) {
    header.addClass("sticky");
  } else {
    header.removeClass("sticky");
  }
});

mainnav.clone().appendTo(mobnav);
$(".lang-swith").clone().appendTo(mobnav);

burger.on("click", function (e) {
  e.stopPropagation();
  $(this).toggleClass("open");
  $("body").toggleClass("mob-nav-open");
});

$("body").on("click", function (e) {
  // if (!burger.is(e.target) && burger.has(e.target).length === 0) {
  burger.removeClass("open");
  $("body").removeClass("mob-nav-open");
});
