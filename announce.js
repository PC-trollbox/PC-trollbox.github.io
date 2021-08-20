//Announcing CSS
document.head.insertAdjacentHTML("beforeend", "<style>.banner { background:black; color: white; text-align: center; height: "+screen.height+"px; width: " + screen.width + "px; opacity: 50%; top: 0; right: 0; position: fixed; }");
//Announce function
function createAnnounce(message = "Missing String", title = "Announcement"){
  var codeID = Math.random().toString().replace(".", "");
  document.body.insertAdjacentHTML("beforeend", "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + title + " <button onclick=\"document.getElementById('"+codeID+"').remove()\">X</button></h1><br><label style=\"color:white\">" + message + "</label></div>")
}
