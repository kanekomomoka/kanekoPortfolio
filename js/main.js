window.addEventListener("load", function () {
  // プラグインを定義
  gsap.registerPlugin(ScrollTrigger);

  const area = document.querySelector(".js-area");
  const items = document.querySelectorAll(".js-item");
  const num = items.length;

  // 位置とscaleを指定
  items.forEach((item, i) => {
    gsap.set(item, {
      zIndex: num - i,
    });
  });
  gsap.set(".js-item09", {
    scale: 1,
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  });
  gsap.set(".js-item01", {
    scale: 0,
    width: "50%",
    height: "75%",
    left: "0.5%",
    top: "20%",
  });
  gsap.set(".js-item02", {
    scale: 0,
    width: "75%",
    height: "50%",
    left: "12.5%",
    top: "25%",
  });
  gsap.set(".js-item03", {
    scale: 0,
    width: "50%",
    height: "75%",
    left: 0,
    top: 0,
  });
  gsap.set(".js-item04", {
    scale: 0,
    width: "150%",
    height: "60%",
    left: 0,
    top: 0,
  });
  gsap.set(".js-item05", {
    scale: 0,
    width: "50%",
    height: "75%",
    left: "0.5%",
    top: "20%",
  });
  gsap.set(".js-item06", {
    scale: 0,
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  });
  gsap.set(".js-item07", {
    scale: 0,
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  });

  // タイムライン
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: area, // トリガー
      start: "top top", // 開始位置
      end: "+=4000", // 終了位置
      scrub: true, // スクロール量に応じて動かす
      pin: true, // ピン留め
    },
  });
  // 要素を順に拡大する

  tl.to(".js-item09", { scale: 1, duration: 1 })
    .to(".js-item09", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item01", { scale: 1, duration: 1 })
    .to(".js-item01", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(
      ".js-item02",
      { scale: 1, left: "62.5%", top: "55%", duration: 1 },
      "-=0.3"
    ) // 早める
    .to(".js-item02", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item03", { scale: 1, duration: 1 }, "-=0.6") // 早める
    .to(".js-item03", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item04", { scale: 1, duration: 1 }, "-=0.4") // 早める
    .to(".js-item04", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item05", { scale: 1, duration: 1 }, "-=0.4") // 早める
    .to(".js-item05", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item06", { scale: 1, duration: 1 }, "-=0.2") // 早める
    .to(".js-item06", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item07", { scale: 1, duration: 1 }, "-=0.4"); // 早める
});

// Book

$(window).ready(function () {
  $("#magazine").turn({
    display: "double",
    acceleration: true,
    gradients: !$.isTouch,
    elevation: 50,
    when: {
      turned: function (e, page) {
        /*console.log('Current view: ', $(this).turn('view'));*/
      },
    },
  });
});

$(window).bind("keydown", function (e) {
  if (e.keyCode == 37) $("#magazine").turn("previous");
  else if (e.keyCode == 39) $("#magazine").turn("next");
});

// 画像一覧
$(function () {
  var $demo1 = $(".js-demo01"); //コンテナとなる要素を指定

  $demo1.imagesLoaded(function () {
    //imagesLoadedを使用し、画像が読み込みまれた段階でMasonryの関数を実行させる
    //Masonryの関数↓
    $demo1.masonry({
      //オプション指定箇所
      itemSelector: ".js-imglist", //コンテンツを指定
      columnWidth: 205, //カラム幅を設定
      fitWidth: true, //コンテンツ数に合わせ親の幅を自動調整
    });
  });
});
