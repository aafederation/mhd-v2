function toggleFilter(el) {
  el = el.target;
  el.classList.toggle("active");
  let panel = el.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    // panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.maxHeight = "400px";
  }
}

export { toggleFilter };
