let x = document.getElementsByTagName("section");
var i;
for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "<hr>" + x[i].innerHTML;
}