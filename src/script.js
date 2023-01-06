// setting timer
import "./style.css";

let dayitem = document.getElementById("days");
let hoursitem = document.getElementById("hours");
let minitem = document.getElementById("min");
let secitem = document.getElementById("sec");

let countdown = () => {
  let futuredate = new Date("20 august 2023");
  let currentdate = new Date();
  let mydate = futuredate - currentdate;
  // console.log(mydate);
  let days = Math.floor(mydate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;
  let min = Math.floor(mydate / 1000 / 60) % 60;
  let sec = Math.floor(mydate / 1000) % 60;

  dayitem.innerHTML = days;
  hoursitem.innerHTML = hours;
  minitem.innerHTML = min;
  secitem.innerHTML = sec;

  if (min < 0) {
    dayitem.innerHTML = 0;
    hoursitem.innerHTML = 0;
    minitem.innerHTML = 0;
    secitem.innerHTML = 0;
  }
};

countdown();
setInterval(countdown, 1000);

//scroll-bar

function scrollTop() {
  let scrollbutton = document.getElementById("scrollup");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 250) scrollbutton.classList.add("scrollactive");
    else {
      scrollbutton.classList.remove("scrollactive");
    }
  };
}
scrollTop();

//nav hide

let navbar = document.getElementById("rohit");
console.log(navbar);

navbar.addEventListener("click", () => {
  let navlink = document.getElementById("navbarText");
  navlink.classList.remove("collapse");
});


