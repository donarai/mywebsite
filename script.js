const yearTarget = document.querySelector("#year");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 90}ms`;
  observer.observe(item);
});
