//ROOT
var root = document.documentElement;
document.querySelector('.headline-image').src = './media/headline-black.png';

//SWITCH MODE
function DarkMode() {
  var backgroundColor = getComputedStyle(root).getPropertyValue("--bg-color");
  var textColor = getComputedStyle(root).getPropertyValue("--txt-color");
  var borderColor = getComputedStyle(root).getPropertyValue("--border-color");
  if (backgroundColor == "white" && textColor == "black" && borderColor=="#d6d5d5") {
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--txt-color", "white");
    root.style.setProperty("--border-color", "#212121");//dd
    document.querySelector('.headline-image').src = './media/headline-white.png';
    localStorage.setItem("colorTheme", "dark");
  } else {
    root.style.setProperty("--bg-color", "white");
    root.style.setProperty("--txt-color", "black");
   root.style.setProperty("--border-color", "#d6d5d5");
    document.querySelector('.headline-image').src = './media/headline-black.png';
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
  document.querySelector('.headline-image').src = './media/headline-black.png';
} else {
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--txt-color", "white");
   root.style.setProperty("--border-color", "#212121");//d
    document.querySelector('.headline-image').src = './media/headline-white.png';
}
