// header
const header = document.getElementById("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // 下にスクロール -> ヘッダーを隠す
    header.classList.add("hidden");
    header.classList.remove("visible");
  } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
    // 上にスクロールまたは上部にいる -> ヘッダーを表示
    header.classList.add("visible");
    header.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});

// card slider
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true,
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

$(window).on("load", function () {
  //テキストごとにspanタグを生成する
  var element = $(".typing");
  var thisChild = "";
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split("").forEach(function (target) {
      if (target !== " ") {
        textbox += "<span>" + target + "</span>";
      } else {
        textbox += target;
      }
    });
    $(this).html(textbox);
  });

  // タイピングアニメーション
  $(element).each(function () {
    thisChild = $(this).children(); //生成したspanタグを取得
    thisChild.each(function (i) {
      var time = 100;
      $(this)
        .delay(time * i)
        .fadeIn(time);
    });
  });
});

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector("header ul").classList.toggle("show");
});
