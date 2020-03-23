// Set donut logo width dynamically
let donut = document.getElementsByTagName("img")[0];
donut.width = window.innerWidth / 3;
donut.style.borderRadius = "8px";

// Set body margin dynamically
let body = document.body;
body.style.marginTop = (4 / 100) * window.innerHeight + "px";
body.style.marginLeft = (4 / 100) * window.innerHeight + "px";
