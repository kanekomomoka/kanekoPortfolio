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
    mainImage: "../../img/portfolioPages/page27.png",
    projectTitle: "学校課題 :店舗サイトのデザインと実装【WEB】",
    projectDescription:
      "国内で差し出される郵便物数が減少しており、郵便料の値上げが検討されています。メールやSNSの普及やにより、手紙やハガキを書く人が減少していることが原因です。郵便物を利用する人を少しでも増やしたい。そう思い考えたのが、アプリは手紙やはがきを書いて、実際に郵送できるサービスです。",
    projectAppeal:
      "郵便料の値上げ問題に対し、どうしたら手紙やハガキなどの郵便物を増やせるのか考え、出来たのがこの作品です。リサーチからデザインまで、個人で制作したものです。",
    toolsLanguages: "使用ツール：AdobeXD,illustrato,Photoshop",
    productionPeriod: "2024年 4/1~4/30",
    galleryImages: [
      "../../img/portfolioPages/page27.png",
      "../../img/portfolioPages/page28.png",
      "../../img/portfolioPages/page29.png",
      "../../img/portfolioPages/page30.png",
      "../../img/portfolioPages/page31.png",
      "../../img/portfolioPages/page32.png",
      "../../img/portfolioPages/page33.png",
    ],
    samplePageLink:
      "https://xd.adobe.com/view/9d4c40a6-7881-4feb-99ac-8477d09721a9-c81f/",
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
