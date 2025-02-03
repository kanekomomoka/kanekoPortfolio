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
    mainImage: "../../img/portfolioPages/page16.png",
    projectTitle: "学校課題 :店舗サイトのデザインと実装【WEB】",
    projectDescription:
      "自身が撮影した写真を使い、ポートフォリオに載せる作品を作る",
    projectAppeal:
      "この作品は、カメラの授業で撮影した写真を使用しました。授業を通じて学んだ技術を駆使し、光と影のバランスを意識して撮影しました。ハンドクリームの良い香りを伝える為に商品の下に造花をひき表現しました。プロダクトカットではロゴがしっかり見える方に光と影のバランスを意識して撮影しました。",
    toolsLanguages: "使用ツール：illustrato,Photoshop",
    productionPeriod: "2024年9月2日～9月15日",
    galleryImages: [
      "../../img/portfolioPages/page16.png",
      "../../img/portfolioPages/page17.png",
      "../../img/portfolioPages/page18.png",
      "../../img/portfolioPages/page19.png",
      "../../img/portfolioPages/page20.png",
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
