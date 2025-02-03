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
    pageTitle:
      "Kaneko Momoka PortfolioSite【【グラフィック】個展告知リーフレット制作】",
    mainImage: "../../img/portfolioPages/page37.png",
    projectTitle: "【その他】モデリング】",
    projectDescription: "",
    projectAppeal:
      "モデリングの授業で制作したものと、趣味で制作した作品です。化粧品のモデリングは学内コンテストで構成賞、三校合同コンテストで造形力賞をいただきました。高校の時に彫刻を学んでおり、その経験をいかしました。モデリングの授業が無くなった今でも3Dに興味を持っており、three.jsなども使えるようになりたいと考えています。",
    toolsLanguages: "",
    productionPeriod: "",
    galleryImages: [
      "../../img/portfolioPages/page37.png",
      "../../img/modeling/model01.jpg",
      "../../img/modeling/model02.png",
      "../../img/modeling/model03.png",
      "../../img/modeling/model04.png",
      "../../img/modeling/model05.jpg",
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
