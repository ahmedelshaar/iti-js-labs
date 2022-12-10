let boxs = document.querySelectorAll('.box');
const duplicateBox = function(){
  let div = document.createElement("div");
  div.className = this.className;
  div.addEventListener("click", duplicateBox);
  this.removeEventListener("click", duplicateBox);
  this.parentElement.append(div)
}

boxs.forEach(function(box) {
  box.addEventListener("click", duplicateBox);
});