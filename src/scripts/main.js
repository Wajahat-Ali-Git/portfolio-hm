window.addEventListener("scroll", function () {
  const navbar = this.document.getElementById("navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// move-up buttom function

window.addEventListener("scroll", function () {
  const moveUpButton = this.document.getElementById("moveUp-handler");

  if (window.scrollY > 500) {
    moveUpButton.classList.add("active");
  } else {
    moveUpButton.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 1100) {
    setInterval(intervalFunc, 10);
  }
});

// move-up buttom function ends here

const text = document.querySelector(".text-change");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "a Full Stack ";
  }, 0);

  setTimeout(() => {
    text.textContent = "a Frontend";
  }, 4000);

  setTimeout(() => {
    text.textContent = "a Backend";
  }, 8000);
};

textLoad();

setInterval(textLoad, 12000);

// auto number increment section start from here

var count = document.getElementsByClassName("count");
var inc = [];
function intervalFunc() {
  for (let i = 0; i < count.length; i++) {
    // console.log(count.length);
    // console.log(i);
    inc.push(1);
    if (inc[i] != count[i].getAttribute("max-data")) {
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}
