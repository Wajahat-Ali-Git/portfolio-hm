window.addEventListener("scroll", function () {
  const navbar = this.document.getElementById("navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  
});



// move-up buttom function

window.addEventListener("scroll", function(){
  const moveUpButton = this.document.getElementById("moveUp-handler")

  if(window.scrollY > 500 ){
    moveUpButton.classList.add('active');
  } else {
    moveUpButton.classList.remove('active');
  }
})
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
