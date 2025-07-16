var btn = document.querySelector(".coolBeans");
var box = document.querySelector(".bigBox");

btn.addEventListener('click', function(){
  box.style.transform = "scale(1)";
});
box.addEventListener('click', function(){
  box.style.transform = "scale(0)";
});