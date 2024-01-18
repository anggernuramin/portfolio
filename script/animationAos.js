const contentScroll = document.querySelectorAll(".content-scroll");
contentScroll.forEach((el) => {
  el.dataset.aos = "fade-up";
  el.dataset.aosDuration = "1000";
});
AOS.init({
  once: true,
});
