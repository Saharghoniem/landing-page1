// creating sections dynamically


sections = document.querySelectorAll("section");

makeNav = function (){
  myBar.innerHTML = [];
  for (let i = 0; i < sections.length; i++){
    listItem = `<li><a 
    href="#${sections[i].id}"
    data-nav="${sections[i].id}" 
     class="menu__link">${sections[i].dataset.nav}
     </a></li>`;
    //  https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    myBar.insertAdjacentHTML("beforeend", listItem);
  }
};
myBar = document.getElementById("navbar__list");
makeNav();

// Use addEventListener('click',....) to listen to the click event.
function linkClicked() {
  let navLink = document.querySelectorAll("#navbar__list li");

  for (let i = 0; i < sections.length; i++) {
    navLink[i].addEventListener("click", (event) => {
      event.preventDefault();
      sections[i].scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}

linkClicked();
//  using .getBoundingClientRect() built-in function.

function highLigting(){
  for (let i = 0; i < sections.length; i++){
    let sectionTop = sections[i].getBoundingClientRect().top;
    if (sectionTop > -300 && sectionTop <= 150) {
      sections[i].classList.add("your-active-class");
      sections[i].style.cssText = "background-color:gray";
    } else {
      sections[i].classList.remove("your-active-class");
      sections[i].style.cssText = "background-color:pink";
    }
  }
}
window.addEventListener("scroll", highLigting);

// button up(show  = add and remove)
let span = document.querySelector(".up");
window.onscroll = function () {
  // if it was more than 300 appear
  window.scrollY >= 300
    ? span.classList.add("show")
    : span.classList.remove("show");
  //if it was less than 300 (up)hidden
};
// when i click in up the page go up
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
