window.onload = function () {
  var currpage = window.location.pathname.split("/").pop();
  var link = document.querySelectorAll(".nav-menu ul li a");
  link.forEach(function (link) {
    var linkPath = link.getAttribute("href");
    if (
      function (link) {
        link.classList.add("active");
      }
    ) {
    }
  });
};
