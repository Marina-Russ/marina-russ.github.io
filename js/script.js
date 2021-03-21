// When the user scrolls the page, execute myFunction
window.onscroll = function () { stickyNav() };

// Get the header
var navbar = document.getElementById("section-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};