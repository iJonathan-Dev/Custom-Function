//Make a div floating in between 2 other div.
function changeMargin() { 
  //get element height 
  var divHeight = document.getElementById("ID").clientHeight; 
  
  // margin Top 
  document.getElementById("ID").style.marginTop = 
    "" + -0.5 * divHeight + "px"; 
  
  // margin Bottom 
  document.getElementById("ID").style.marginBottom = 
    "" + -0.5 * divHeight + "px"; 
}

// change margin on document load 
document.addEventListener("DOMContentLoaded", function () { 
  changeMargin(); 
}); 

// change margin on document resize 
window.addEventListener("resize", function (event) { 
  changeMargin(); 
});
