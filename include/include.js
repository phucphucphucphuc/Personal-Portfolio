document.addEventListener("DOMContentLoaded", () => {
    
  fetch("include/head.html")
    .then(response => {
      if (!response.ok) throw new Error("Cannot load head-content");
      return response.text();
    })
    .then(html => {
      document.head.insertAdjacentHTML("afterbegin", html);
    })
    .catch(err => console.error("Cannot load shared head", err));

  fetch("include/nav.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("nav-placeholder").innerHTML = html;
    })
    .catch(err => console.error("Cannot load nav", err));

  fetch("include/footer.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
    })
    .catch(err => console.error("Cannot load footer", err));
});