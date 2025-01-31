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
    mainImage: "../../img/portfolioPages/page21.png",
    projectTitle: "学校課題 :【グラフィック】個展告知リーフレット制作】",
    projectDescription:
      "クリエイターから「展示会開催をしたい」という案件を受注。『どのような「展示会」にしたら良いのか』『開催場所』『開催日時』『告知方法』『告知内容』『告知ツール』など展示会開催における全てのことを任せたい。クリエイターのことをもっと色んな人に広めて周知させ、仕事の内容を知ってもらい、ものづくりの楽しさを感じてもらいたい。さらに、集客も見込みたいので展示会開催前から話題になるような何かを考えて欲しい。上記の事を踏まえ、クリエイターのアイデンティティや作品・作風をベースに、それらを崩さずに展示会の内容・告知ツールを企画。",
    projectAppeal:
      "企画から完成まで、時間をかけて制作した作品です。作者の個性を崩さずより魅力的になるようなデザインになるよう心がけました。",
    toolsLanguages: "使用ツール：illustrato,Photoshop",
    productionPeriod: "2024年　4/15～6/21",
    galleryImages: [
      "../../img/portfolioPages/page21.png",
      "../../img/portfolioPages/page22.png",
      "../../img/portfolioPages/page23.png",
      "../../img/portfolioPages/page24.png",
      "../../img/portfolioPages/page25.png",

      "../../img/portfolioPages/ig01.png",
      "../../img/portfolioPages/ig02.png",
      "../../img/portfolioPages/ig03.png",
      "../../img/portfolioPages/ig04.png",
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
