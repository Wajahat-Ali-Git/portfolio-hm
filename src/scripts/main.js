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
    number();
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
  }, 8000);

  setTimeout(() => {
    text.textContent = "a Backend";
  }, 16000);
};

textLoad();

setInterval(textLoad, 24000);

// auto number increment section start from here

var count = document.getElementsByClassName("count");
var inc = new Array(count.length).fill(0);

// Convert string to number
function getMax(i) {
  return parseInt(count[i].getAttribute("max-data"));
}
function number() {
  var interval = setInterval(function intervalFunc() {
    let allDone = true;

    for (let i = 0; i < count.length; i++) {
      let max = getMax(i);

      if (inc[i] < max) {
        inc[i]++;
        count[i].innerHTML = inc[i];
        allDone = false;
      }
    }

    if (allDone) {
      clearInterval(interval); // Stop the interval when all counters are done
    }
  }, 50); // Adjust speed as needed
}
