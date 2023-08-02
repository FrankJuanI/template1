let tabList = document.querySelectorAll(".tab");
let tabDesList = document.querySelectorAll(".description-tab");

tabList.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    tabList.forEach((tabElement) => {
      tabElement.classList.remove("active");
    });
    tabDesList.forEach((descriptionElement) => {
      descriptionElement.classList.remove("active");
      if (descriptionElement.id === `des-${event.target.id}`) {
        descriptionElement.classList.add("active");
      }
    });
    event.target.classList.add("active");
  });
});
