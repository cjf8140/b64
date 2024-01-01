function go() {
  const txt = document.getElementById("iput").value;
  const base = atob(txt);
  const createA = document.createElement("a");
  const createAText = document.createTextNode(base);
  createA.setAttribute("href", base);
  createA.appendChild(createAText);
  const br = document.createElement("br");
  createA.appendChild(br);
  document.getElementById("oput").appendChild(createA);
  window.open(base);
  document.getElementById("iput").value = "";
}