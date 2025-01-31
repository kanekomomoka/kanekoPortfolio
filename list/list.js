function showPopup(element) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  popupImage.src = element.src;
  popup.classList.add("active");
}

function hidePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("active");
}

// 店舗サイト
document.addEventListener("DOMContentLoaded", function () {
  const data = {
    pageTitle: "Kaneko Momoka PortfolioSite【店舗サイトのデザインと実装】",
    mainImage: "../img/portfolioPages/page05.png",
    projectTitle: "学校課題 :店舗サイトのデザインと実装【WEB】",
    projectDescription:
      "オリジナルの店舗サイトを制作。分析・検討し、趣旨に対し「何をどのように」「どんな導線を設ける」などを考え、画面設計とビジュアライズを行う。",
    projectAppeal:
      "店舗サイトのデザインということで、給食を販売している店舗サイトを考えました。ターゲットは30代～40代。「なつかしさ」を感じてもらえるように、暖かい雰囲気の中に、少し古びた感じを表現しました。クラス内で1番良い評価をもらえた、自信作です。ぜひご覧ください。",
    toolsLanguages:
      "使用ツール：AdobeXD,illustrato,Photoshop,VScode<br>使用言語：HTML,CSS,JavaScript,html",
    productionPeriod: "2024年7月1日～8月1日",
    galleryImages: [
      "../img/portfolioPages/page06.png",
      "../img/portfolioPages/page07.png",
      "../img/portfolioPages/page08.png",
      "../img/portfolioPages/page09.png",
      "../img/portfolioPages/page10.png",
      "../img/portfolioPages/page11.png",
    ],
    samplePageLink: "../Gallery/site01/index.html",
  };

  document.getElementById("page-title").textContent = data.pageTitle;
  document.getElementById("main-image").src = data.mainImage;
  document.getElementById("project-title").textContent = data.projectTitle;
  document.getElementById("project-description").innerHTML =
    data.projectDescription;
  document.getElementById("project-appeal").innerHTML = data.projectAppeal;
  document.getElementById("tools-languages").innerHTML = data.toolsLanguages;
  document.getElementById("production-period").textContent =
    data.productionPeriod;
  document.getElementById("sample-page-link").href = data.samplePageLink;

  const galleryList = document.getElementById("gallery-list");
  data.galleryImages.forEach((imageSrc) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Gallery Image";
    img.onclick = function () {
      showPopup(img);
    };
    li.appendChild(img);
    galleryList.appendChild(li);
  });
});

function showPopup(img) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  popupImage.src = img.src;
  popup.style.display = "block";
}

function hidePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
