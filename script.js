function popupku() {
    var body = document.querySelector("body");      
    var pWm = document.createElement("a");
    pWm.setAttribute("href", "https://www.youtube.com/@AIKKOfficial");
    pWm.setAttribute("style", "text-decoration: none; color: white; opacity: .5; position: fixed; bottom : 10px; left: 10px");
    pWm.innerHTML = "Youtube : AIKK Official";
    body.appendChild(pWm);
  }