//ROOT
var root = document.documentElement;
//document.querySelector('.headline-image').src = './media/headline-black.png';

//SWITCH MODE
function DarkMode() {
  var backgroundColor = getComputedStyle(root).getPropertyValue("--bg-color");
  var textColor = getComputedStyle(root).getPropertyValue("--txt-color");
  var borderColor = getComputedStyle(root).getPropertyValue("--border-color");
  var selectedItem = getComputedStyle(root).getPropertyValue("--selected-item");
  if (backgroundColor == "white" && textColor == "black" && borderColor=="#d6d5d5" && selectedItem == "#cacaca") {
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--txt-color", "white");
    root.style.setProperty("--border-color", "#212121");
    root.style.setProperty("--selected-item","#6e6e6e");
    document.querySelector('.header-index').style.borderColor = "#212121";
    document.querySelector('.headline-image').src = './media/headline-white.png';
    localStorage.setItem("colorTheme", "dark");
  } else {
    root.style.setProperty("--bg-color", "white");
    root.style.setProperty("--txt-color", "black");
   root.style.setProperty("--border-color", "#d6d5d5");
    document.querySelector('.headline-image').src = './media/headline-black.png';
    root.style.setProperty("--selected-item","#cacaca");
    document.querySelector('.header-index').style.borderColor = "#d6d5d5";
    localStorage.setItem("colorTheme", "white");
  }
}

//LOCAL STORAGE
var theme = localStorage.getItem("colorTheme");

//SET THEME
if (theme == null || theme == "white") {
  root.style.setProperty("--bg-color", "white");
  root.style.setProperty("--txt-color", "black");
  root.style.setProperty("--border-color", "#d6d5d5");
  document.querySelector('.header-index').style.borderColor = "#d6d5d5";
  root.style.setProperty("--selected-item","#cacaca");
  document.querySelector('.headline-image').src = './media/headline-black.png';
} else {
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--txt-color", "white");
   root.style.setProperty("--border-color", "#212121");//d
   root.style.setProperty("--selected-item","#6e6e6e");
   document.querySelector('.header-index').style.borderColor = "#212121";
    document.querySelector('.headline-image').src = './media/headline-white.png';
}
