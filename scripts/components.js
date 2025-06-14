function loadComponent(url, selector) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    });
}