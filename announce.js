//Announcing CSS
document.head.insertAdjacentHTML("beforeend", "<style>.banner { background:black; color: white; text-align: center; height: "+screen.height+"px; width: " + screen.width + "px; opacity: 50%; top: 0; right: 0; }");
//Announce function
function createAnnounce(message = "Missing String", title = "Announcement"){
  var codeID = Math.random().toString().replace(".", "");
  document.body.insertAdjacentHTML("beforeend", "<div class=\"banner\" id=\"" + codeID + "\"><h1>" + title + " <button onclick=\""+codeID+".remove()\">X</button></h1><br>" + message + "</div>")
}
