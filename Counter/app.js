
// set inital value to zero
let count = 0;
//select #id value and buttons that has class:btn
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {//select all buttons
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;// getting the classes that item that clicking on  so one is going to have a button /decrease or rest or increase
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});