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
    pageTitle: "Kaneko Momoka PortfolioSite",
    mainImage: "../../img/portfolioPages/page38.jpg",
    projectTitle: "学校課題 :リニューアルサイト",
    projectDescription:
      "モチーフサイトの分析モチーフとする企業サイトを閲覧し展開されているコンテンツに対し、理想的な階層構造やこれに沿ったＴＯＰページのあり方などを検討する。分析・検討したサイト趣旨に対し、「何をどの様に」「どう導線を設けることで」などを検討し、画面の設計とビジュアライズを行う",
    projectAppeal: " ",
    toolsLanguages: "使用ツール：AdobeXD,VScode<br>使用言語：HTML,CSS",
    productionPeriod: "2024年1月10日～2月5日",
    galleryImages: [
      "../../img/portfolioPages/page38.jpg",
      "../../img/portfolioPages/page39.jpg",
      "../../img/portfolioPages/page40.jpg",
      "../../img/portfolioPages/page41.jpg",
      "../../img/portfolioPages/page42.jpg",
      "../../img/portfolioPages/page43.jpg",
      "../../img/portfolioPages/page44.jpg",
      "../../img/portfolioPages/page45.jpg",
      "../../img/portfolioPages/page46.jpg",
    ],
    samplePageLink: "../../Gallery/site03/index.html",
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
