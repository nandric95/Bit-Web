var htmlNode = window.document.documentElement;

console.log(htmlNode.nodeName);
console.log(htmlNode.id);
console.log(htmlNode.className);
console.log(htmlNode.hasChildNodes());
var bodyNode = htmlNode.childNodes[2];
//kad ovo uradimo mozemo sve ovo iznad da stampamo ispod ali sa bodyNode umesto htmlNode!//
console.log(htmlNode.childNodes);

var divHeaderNode = bodyNode.childNodes[1];

//i za svaki node mozemo da vidimo iste ove propertije!//

bodyNode = divNode.parent;

//kada zelimo da pristupimo nekom node preko id, samo jedan element//

// var divHeaderNode = document.getElementById ("header"); //

// a moze i ovako //
//var mainHeaderNode = document.querySelector("main-header");//
//pronaci ce prvog na koji naidje//

var paragraphNode = document.getElementsByTagName("p");
var sixthNode = paragraphNode[5];
console.log(sixthNode);

setTimeout(function () {
  if (sixthNode.className === "strong-paragraf") {
    sixthNode.className = "";
    return;
  }
  sixthNode.className = "strong-paragraf";
}, 500);
