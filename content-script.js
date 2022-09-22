let element = document.querySelector('h1');
let tempText = element.innerHTML;
let span = document.createElement("span");
let br = document.createElement("br");

element.innerHTML = "Welcome";
 span.innerHTML = tempText;

 document.querySelector('h1').appendChild(br)
 document.querySelector('h1').appendChild(span)
