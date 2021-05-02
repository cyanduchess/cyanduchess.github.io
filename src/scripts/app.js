luxy.init();

/*------------------------------*/

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

let cursor__bg = document.querySelectorAll(".cursor__bg");

console.log(cursor__bg);

for (let i = 0; i < cursor__bg.length; i++) {
  cursor__bg[i].addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(5)";
  });
  cursor__bg[i].addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursor.style.transform = "translate(-50%,-50%)";
  });
}

/*------------------------------*/

let nav = document.getElementById("navbar");
document.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    nav.classList.add("dark__nav");
  } else {
    nav.classList.remove("dark__nav");
  }
});

/*------------------------------*/

let open__btn = document.getElementById("open__btn");
let close__btn = document.getElementById("close__btn");
let mobile__nav = document.getElementById("mobile__nav");

open__btn.addEventListener("click", () => {
  mobile__nav.style.width = "250px";
});
close__btn.addEventListener("click", () => {
  mobile__nav.style.width = "0";
});

let closeNav = () => {
  mobile__nav.style.width = "0";
};

/*------------------------------*/
