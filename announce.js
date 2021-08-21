//Announcing CSS
document.head.insertAdjacentHTML("beforeend", "<style>.banner { background:black; color: white; text-align: center; height: "+screen.height+"px; width: " + screen.width + "px; opacity: 50%; top: 0; right: 0; position: fixed; }");
//Announce function
function createAnnounce(message = "Missing String", title = "Announcement", hidex = false){
  var codeID = Math.random().toString().replace(".", "");
  var storeMessage = message;
  var storeTitle = title;
  var hideStore = hidex;
  if (!hidex) document.body.insertAdjacentHTML("beforeend", "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + storeTitle + " <button onclick=\"document.getElementById('"+codeID+"').remove()\">x</button></h1><br><label style=\"color:white\">" + storeMessage + "</label></div>");
  if (hidex) document.body.insertAdjacentHTML("beforeend", "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + storeTitle + " <button disabled title=\"Seems like a multichoice, you need to choose any setting to continue.\">x</button></h1><br><label style=\"color:white\">" + storeMessage + "</label></div>");
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
        hideStore = hide;
        this.refreshDialog();
        return "Dialog settings changed";
      }else{
        return "This dialog is already closed.";
      }
    },
    changeDetails: function(argmessage = "Missing String", argtitle = "Announcement", hide = false){
      if (document.getElementById(codeID)){
        hideStore = hide;
        storeTitle = argtitle;
        storeMessage = argmessage;
        this.refreshDialog();
        return "Dialog settings changed";
      }else{
        return "This dialog is already closed.";
      }
    },
    refreshDialog: function(){
      if (document.getElementById(codeID)){
        if (hideStore) document.getElementById(codeID).innerHTML = "<h1 style=\"color:white\">" + storeTitle + " <button disabled title=\"Seems like a multichoice, you need to choose any setting to continue.\">x</button></h1><br><label style=\"color:white\">" + storeMessage + "</label>";
        if (!hideStore) document.getElementById(codeID).innerHTML = "<h1 style=\"color:white\">" + storeTitle + " <button onclick=\"document.getElementById('"+codeID+"').remove()\">x</button></h1><br><label style=\"color:white\">" + storeMessage + "</label>";
        return "Dialog settings refreshed";
      }else{
        return "This dialog is already closed.";
      }
    },
    setTitle: function(argtitle = "Announcement"){
      if (document.getElementById(codeID)){
        storeTitle = argtitle;
        this.refreshDialog();
        return "Dialog settings changed";
      }else{
        return "This dialog is already closed.";
      }
    },
    setMessage: function(argmessage = "Missing String"){
      if (document.getElementById(codeID)){
        storeMessage = argmessage;
        this.refreshDialog();
        return "Dialog settings changed";
      }else{
        return "This dialog is already closed.";
      }
    }
  }
}
