/*Selecting One/Multiple Elements
Create two unordered lists on the page.
    
Create a function that selects the second list and applies a class that sets some background color to it.
 */

function secoundBgr() {
  var secounUlNode = document.getElementsByTagName("ul")[1];
  secounUlNode.classList.add("secound-list-color");
}

secoundBgr();

/* Create a second function that, when triggered, selects all <li> elements on the page. 
The function also sets a class that sets some bg color to every <li> element.
*/

function everySingleLi() {
  var list = document.getElementsByTagName("li");
  for (var i = 0; i < list.length; i++) {
    list[i].classList.add("list-color");
    list[i].style.backgroundColor = "#0519db";
  }
}

everySingleLi();

/* Create one more unordered list and one more function
The function should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the text to uppercase.
*/

var thirthLi = document.createElement("ul");
var listItems = document.createElement("li");
thirthLi.appendChild(listItems);
bodyNode.appendChild(thirthLi);
thirthLi.appendChild(listItems);
var bodyNode = document.querySelector("body");
/*var bodyNode = document.querySelector("body");
for (var i = 0; i < 4; i++) {
  bodyNode.appendChild(thirthLi);
  thirthLi.appendChild(listItems);
}*/
bodyNode.appendChild(thirthLi);
var text = document.createTextNode("Caoo");
listItems.appendChild(text);

function createUl() {
  var ulList = document.createElement("ul");
  ulList.classList.add("new-list");
  document.getElementsByClassName("new-list").createElement("li");

  for (var i = 0; i < ulList.length; i++) {
    ulList[i].classList.add("list-color-2");
    ulList[i].style.backgroundColor = "#0519db";
  }
}

createUl();

// Create one more unordered list and one more function
// The function​ should select only &lt;li&gt; elements from that last list
// Each &lt;li&gt; element should get a class that sets some bg color and transforms the
// text to uppercase.
function thirdLiChange() {
  var listItemNode = document.getElementsByTagName("ul")[2];
  listItemNode.classList.add("third-li");
  if (listItemNode.className === "third-li") {
    listItemNode.style.backgroundColor = "#FA0780";
  }
}
thirdLiChange();
var fourListNode = document.createElement("ul");
var listItemNode = document.createElement("li");
fourListNode.appendChild(listItemNode);
var bodyNode = document.querySelector("body");
// for(i=0; i<3; i++){
//     listItemNode = document.createElement('li');
//     var text = document.createTextNode('m');
//     listItemNode.appendChild(text);
//     bodyNode.appendChild(fourListNode)
//     fourListNode.appendChild(listItemNode);
// }
bodyNode.appendChild(fourListNode);
var tekst = document.createTextNode("Cao");
listItemNode.appendChild(tekst);
function four() {
  listItemNode.classList.add("four");
  if (listItemNode.className === "four") {
    listItemNode.style.backgroundColor = "#F8D1D1";
    listItemNode.style.textTransform = "uppercase";
  }
}
four();
