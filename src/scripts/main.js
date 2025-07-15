window.addEventListener("scroll", function () {
  const navbar = this.document.getElementById("navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const text = document.querySelector(".text-change");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "a Full Stack ";
  }, 0);

  setTimeout(() => {
    text.textContent = "a Frontend";
  }, 5000);

  setTimeout(() => {
    text.textContent = "a Backend";
  }, 10000);
};

textLoad();

setInterval(textLoad, 15300);
