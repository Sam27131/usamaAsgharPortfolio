// Creating a namespace to store code
const myPortfolio = {};

// Organizing init function to pass to document ready
myPortfolio.init = () => {
    myPortfolio.scrollToSection(".homeLink", "header");
    myPortfolio.scrollToSection(".aboutLink", ".about");
    myPortfolio.scrollToSection(".projectsLink", ".projects");
    myPortfolio.scrollToSection(".contactLink", ".contact");
    myPortfolio.scrollToSection(".start", ".about");
    myPortfolio.scrollToSection(".toTop", "nav");
    myPortfolio.headerEffects("h1");
    myPortfolio.headerEffects(".navContainer li a");
}

// A function to add smooth scrolling to particular sections based on what arguments are passed in (see above)
myPortfolio.scrollToSection = (clicker, target) => {
  $(clicker).on('click', function(event) {
      // Overriding default behavior
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 800);
  });
};

// A function to add sliding effects to elements
myPortfolio.headerEffects = (target) => {
  $(target).slideDown(800);
}

// Document ready function
$(function () {
  myPortfolio.init();
});