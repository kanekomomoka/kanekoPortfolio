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
    mainImage: "../../img/portfolioPages/page35.png",
    projectTitle: "【その他】デッサン】",
    projectDescription: "",
    projectAppeal:
      "芸術科の高校に通っていた時に一番力を入れていたのがデッサンです。デッサンをすることによって、忍耐力や努力することの楽しさをしることが出来ました。",
    toolsLanguages: "",
    productionPeriod: "",
    galleryImages: [
      "../../img/drow/drow01.JPG",
      "../../img/drow/drow02.JPG",
      "../../img/drow/drow03.JPG",
      "../../img/drow/drow04.JPG",
      "../../img/drow/drow05.JPG",
      "../../img/drow/drow06.JPG",
      "../../img/drow/drow07.JPG",
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
