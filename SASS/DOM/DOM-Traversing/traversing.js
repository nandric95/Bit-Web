function secounfListActive() {
  var activeBcg = document.querySelector(".active-second");
  activeBcg.classList.remove(".active-second");
  var firstUlNode = document.getElementsByTagName("ul")[0];
  firstUlNode.classList.add("active-second");
  //firstUlNode.style.bacgroundColor = "#F8D1D1";
}

secounfListActive();
