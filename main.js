const firstSection = document.querySelector(".first-section");
const membersWidget = document.querySelector(".members-widget");
const proposalWidget = document.querySelector(".proposal-widget");
const profileSection = document.querySelector(".profile-section");

window.addEventListener("scroll", function () {
  const elementOffset = firstSection.offsetTop;
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollTop > elementOffset - windowHeight + 200) {
    firstSection.classList.add("animate__fadeInDown");
  } else {
    firstSection.classList.remove("animate__fadeInDown");
  }
});

function applyScrollAnimation(element, className) {
  let prevScrollPos = window.scrollY;

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.scrollY;
    const elementOffset = element.offsetTop;
    const windowHeight = window.innerHeight;

    if (currentScrollPos > prevScrollPos) {
      // Scroll Down
      if (currentScrollPos > elementOffset - windowHeight) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    } else {
      // Scroll Up
      if (
        currentScrollPos < elementOffset - 200 ||
        currentScrollPos < elementOffset + windowHeight - 200
      ) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }

    prevScrollPos = currentScrollPos;
  });
}

applyScrollAnimation(membersWidget, "animate__fadeInRight");
applyScrollAnimation(proposalWidget, "animate__fadeInLeft");
applyScrollAnimation(profileSection, "animate__fadeInRight");
