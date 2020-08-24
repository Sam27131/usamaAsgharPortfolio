// Creating a namespace to store code
const myPortfolio = {};

// Organizing init function to pass to document ready
myPortfolio.init = () => {
    myPortfolio.scrollToSection(".homeLink", "header");
    myPortfolio.scrollToSection(".aboutLink", ".about");
    myPortfolio.scrollToSection(".projectsLink", ".projects");
    myPortfolio.scrollToSection(".contactLink", ".contact");
    myPortfolio.scrollToSection(".start", ".about");
    myPortfolio.headerSlide();
}

// Add smooth scrolling to the next questions by creating a click event on all a tags
myPortfolio.scrollToSection = (clicker, target) => {
  $(clicker).on('click', function(event) {
      // Overriding default behavior
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 800);
  });
};

myPortfolio.headerSlide = () => {
  $('h1').slideDown(1000);
}

// Document ready function
$(function () {
  myPortfolio.init();
});