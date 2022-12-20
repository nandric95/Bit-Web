/*InnerHTML
Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the select element.
Add the whole dropdown list to DOM .

Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page.
*/

var myParent = document.body;

//Create array of options to be added
var array = ["Option 1", "Option 2", "Option 3", "Option 4"];

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";
myParent.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
  var option = document.createElement("option");
  option.value = array[i];
  option.text = array[i];
  selectList.appendChild(option);
}

var myParent = document.body;

//Create array of options to be added
var array = ["Option 1", "Option 2", "Option 3", "Option 4"];
document.querySelector("div").innerHTML = "";
//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";
myParent.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
  var option = document.createElement("option");
  option.value = array[i];
  option.text = array[i];
  selectList.appendChild(option);
}

function createDropdown() {
  document.querySelector("div").innerHTML =
    "<select name='drop' id='drop1'><option value='1st option'>1st option</option><option value='2nd option'>2nd option</option><option value='3rd option'>3rd option</option></select>";
}
createDropdown(["Optione 1", "Option 2", "Option 3"]);
function createDropdownSecond(array) {
  var divTwo = document.getElementsByTagName("div")[1];
  var dropdown = document.createElement("select");
  // u div 1 dodajem dropdown
  divTwo.appendChild(dropdown);
  //dodavanje opcija u dropdown
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    dropdown.appendChild(option);
  }
}
createDropdownSecond(["Optione 4", "Option 5", "Option 6"]);
