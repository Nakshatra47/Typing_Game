
function vlsd(){
  var lvl=document.querySelector('select').selectedIndex;
  
  sessionStorage.setItem("lvl", lvl);
  window.location.href="idx.html";

}



