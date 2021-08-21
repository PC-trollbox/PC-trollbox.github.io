//Announcing CSS
document.head.insertAdjacentHTML("beforeend", "<style>.banner { background:black; color: white; text-align: center; height: "+screen.height+"px; width: " + screen.width + "px; opacity: 50%; top: 0; right: 0; position: fixed; }");
//Announce function
function createAnnounce(message = "Missing String", title = "Announcement", hidex = false){
  var codeID = Math.random().toString().replace(".", "");
  if (!hidex) document.body.insertAdjacentHTML("beforeend", "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + title + " <button onclick=\"document.getElementById('"+codeID+"').remove()\">x</button></h1><br><label style=\"color:white\">" + message + "</label></div>");
  if (hidex) document.body.insertAdjacentHTML("beforeend", "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + title + " <button disabled title=\"Seems like a multichoice, you need to choose any setting to continue.\">x</button></h1><br><label style=\"color:white\">" + message + "</label></div>");
  return {
    closeNotif: function(){
      if (document.getElementById(codeID)){
        document.getElementById(codeID).remove();
        return "Dialog closed."
      }else{
        return "This dialog is already closed.";
      }
    },
    closeButtonConfig: function(hide = false){
      if (document.getElementById(codeID)){
        if (hide) document.getElementById(codeID).innerHTML = "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + title + " <button disabled title=\"Seems like a multichoice, you need to choose any setting to continue.\">x</button></h1><br><label style=\"color:white\">" + message + "</label></div>";
        if (!hide) document.getElementById(codeID).innerHTML = "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + title + " <button onclick=\"document.getElementById('"+codeID+"').remove()\">x</button></h1><br><label style=\"color:white\">" + message + "</label></div>";
        return "Dialog settings changed;";
      }else{
        return "This dialog is already closed.";
      }
    },
    changeDetails: function(message = "Missing String", title = "Announcement", hide = false){
      if (document.getElementById(codeID)){
        return "This dialog is already closed.";
      }else{
        if (hide) document.getElementById(codeID).innerHTML = "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + title + " <button disabled title=\"Seems like a multichoice, you need to choose any setting to continue.\">x</button></h1><br><label style=\"color:white\">" + message + "</label></div>";
        if (!hide) document.getElementById(codeID).innerHTML = "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + title + " <button onclick=\"document.getElementById('"+codeID+"').remove()\">x</button></h1><br><label style=\"color:white\">" + message + "</label></div>";
      }
    }
  }
}
