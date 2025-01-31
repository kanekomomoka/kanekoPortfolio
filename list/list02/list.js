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
    mainImage: "../../img/portfolioPages/page12.png",
    projectTitle: "学校課題 :映画情報サイト",
    projectDescription:
      "文書構造化の重要性を理解し、 見出しや段落分けを適切に行う。写真や表も用いながら、第３者に 伝わりやすいよう工夫し制作する。初めて制作したwebサイトです。",
    projectAppeal:
      " 初めて制作したWEBサイトになります。映画は新海誠さんの『すずめの戸締り』。作品の綺麗な雰囲気を、余白を大きめにすることで表現しました。また交互に要素を入れたりと動きのあるデザインになるよう心がけました。",
    toolsLanguages:
      "使用ツール：AdobeXD,illustrato,Photoshop,VScode<br>使用言語：HTML,CSS",
    productionPeriod: "2024年7月1日～8月1日",
    galleryImages: [
      "../../img/portfolioPages/page12.png",
      "../../img/portfolioPages/page13.png",
      "../../img/portfolioPages/page14.png",
      "../../img/portfolioPages/page15.png",
    ],
    samplePageLink: "../../Gallery/site02/index.html",
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
