function onSiteNavToggleClick(evt) {
  const el = evt.target.closest("[data-sitenav-toggler]");

  if (!el) return;

  el.classList.toggle("show");
  el.nextElementSibling.classList.toggle("show");
  document.body.classList.toggle("hidden");
}

document.addEventListener("click", onSiteNavToggleClick);
