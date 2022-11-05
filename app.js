/*
var profile_ctn = document.getElementById("profile-ctn");
var social = document.getElementById("social");
var share = document.getElementById("share");
var profile = document.getElementById("profile");
var mediaQuery = window.matchMedia("(min-width: 920px)");

function desktopView() {
  if (social.style.display == "flex") {
    social.style.display = "none";
    profile.style.display = "flex";
  } else {
    social.style.display = "flex";
    profile.style.display = "flex";
  }
}
function mobileView() {
  if (social.style.display == "flex") {
    social.style.display = "none";
    profile.style.display = "flex";
    profile_ctn.style.backgroundColor = "white";
  } else {
    social.style.display = "flex";
    profile.style.display = "none";
    profile_ctn.style.backgroundColor = "#6d7f97";
  }
}
function myFunction(event) {
  if (event.matches) {
    share.addEventListener("click", desktopView);
    share.removeEventListener("click", mobileView);
  } else {
    share.addEventListener("click", mobileView);
    share.removeEventListener("click", desktopView);
  }
}
myFunction(mediaQuery);
mediaQuery.addEventListener("change", myFunction);
*/
const shareBtn = document.querySelectorAll(".button");
const socialIcons = document.querySelector(".profile__social");
shareBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    socialIcons.classList.toggle("active");
  });
});
