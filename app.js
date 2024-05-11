let Submitbtn = document.getElementById("basebtn");
let message = document.querySelector(".second-box");
let Figures = document.querySelectorAll(".btn");
let ratednomber = document.getElementById("number");
Figures.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    ratednomber.innerHTML = value;
    console.log(value);
  });
});

Submitbtn.addEventListener("click", function () {
  message.style.display = "block";
});
