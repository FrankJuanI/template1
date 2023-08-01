let tabList = document.querySelectorAll(".tabs-container");
let tabDesList = document.querySelectorAll(".description-tabs-container");

console.log(tabList.event);
console.log(tabDesList.event);

tabList.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    tabList.forEach((tabElement) => {
      tabElement.classList.remove("active");
    });
    tabDeslist.forEach((descriptionElement) => {
      descriptionElement.classList.remove("active");
      if (descriptionElement.id === `content-${event.target.id}`) {
        descriptionElement.classList.add("active");
      }
    });
    event.target.classList.add("active");
  });
});
