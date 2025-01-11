let cl = document.querySelector(".cl");
let more = document.querySelector(".more");

cl.addEventListener("click", () => {
  more.style.display = "block ";
  setTimeout(function () {
    more.style.display = "none";
    more.style.marginBottom = "10px";
  }, 3000);
});
