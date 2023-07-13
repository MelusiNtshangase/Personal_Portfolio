const tablinks = document.querySelector(".tab-titles");
const tabcontents = document.querySelector(".tab-contents");

const opentab = function (tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-link");
  }
};

console.log(tablinks);
console.log(tabcontents);
