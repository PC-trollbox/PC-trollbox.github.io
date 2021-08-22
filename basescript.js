//Original announce script
var announceInstances = {};
document.head.insertAdjacentHTML("beforeend", "<style>.banner { background:black; color: white; text-align: center; height: " + screen.height + "px; width: " + screen.width + "px; opacity: 50%; top: 0; right: 0; position: fixed; }");
function createAnnounce(message = "Missing String", title = "Announcement", hidex = false) {
    var codeID = Math.random().toString().replace(".", "");
    var storeMessage = message;
    var storeTitle = title;
    var hideStore = hidex;
    if (!hidex) document.body.insertAdjacentHTML("beforeend", "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + storeTitle + " <button onclick=\"document.getElementById('" + codeID + "').remove()\">x</button></h1><br><label style=\"color:white\">" + storeMessage + "</label></div>");
    if (hidex) document.body.insertAdjacentHTML("beforeend", "<div class=\"banner\" id=\"" + codeID + "\"><h1 style=\"color:white\">" + storeTitle + " <button disabled title=\"Seems like a multichoice, you need to choose any setting to continue.\">x</button></h1><br><label style=\"color:white\">" + storeMessage + "</label></div>");
    var allSettings = {
        closeNotif: function() {
            if (document.getElementById(codeID)) {
                document.getElementById(codeID).remove();
                return "Dialog closed."
            } else {
                return "This dialog is already closed.";
            }
        },
        closeButtonConfig: function(hide = false) {
            if (document.getElementById(codeID)) {
                hideStore = hide;
                this.refreshDialog();
                return "Dialog settings changed";
            } else {
                return "This dialog is already closed.";
            }
        },
        changeDetails: function(argmessage = "Missing String", argtitle = "Announcement", hide = false) {
            if (document.getElementById(codeID)) {
                hideStore = hide;
                storeTitle = argtitle;
                storeMessage = argmessage;
                this.refreshDialog();
                return "Dialog settings changed";
            } else {
                return "This dialog is already closed.";
            }
        },
        refreshDialog: function() {
            if (document.getElementById(codeID)) {
                if (hideStore) document.getElementById(codeID).innerHTML = "<h1 style=\"color:white\">" + storeTitle + " <button disabled title=\"Seems like a multichoice, you need to choose any setting to continue.\">x</button></h1><br><label style=\"color:white\">" + storeMessage + "</label>";
                if (!hideStore) document.getElementById(codeID).innerHTML = "<h1 style=\"color:white\">" + storeTitle + " <button onclick=\"document.getElementById('" + codeID + "').remove()\">x</button></h1><br><label style=\"color:white\">" + storeMessage + "</label>";
                return "Dialog settings refreshed";
            } else {
                return "This dialog is already closed.";
            }
        },
        setTitle: function(argtitle = "Announcement") {
            if (document.getElementById(codeID)) {
                storeTitle = argtitle;
                this.refreshDialog();
                return "Dialog settings changed";
            } else {
                return "This dialog is already closed.";
            }
        },
        setMessage: function(argmessage = "Missing String") {
            if (document.getElementById(codeID)) {
                storeMessage = argmessage;
                this.refreshDialog();
                return "Dialog settings changed";
            } else {
                return "This dialog is already closed.";
            }
        },
        id: codeID,
        get closed(){
            if (document.getElementById(codeID)) {
                return false;
            }else{
                return true;
            }
        }
    };
    announceInstances[codeID] = allSettings;
    return allSettings;
}
//Original Basescript
onload = function() {
    onload = null;
    if (!localStorage.getItem("accepted")) {
        createAnnounce("This site uses cookies. We don't steal any data from you and will not do this.<br><button onclick=\"this.parentElement.parentElement.remove();localStorage.setItem('accepted','1');location.reload();\">Accept</button><button onclick=\"document.body.innerHTML='User didn\\'t accept the cookie policy. Restart page if you changed your mind.'\">Not accept</button>", "Cookies! Nom nom.", true);
    } else {
        createAnnounce("Created cookie notice for newcomers.");
    }
}

function callAnnouncement() {
    createAnnounce("Created cookie notice for newcomers.", "Latest announcement");
}

function explorePage(embedPath) {
    displayPage.innerHTML = "Please wait, page is loading."
    history.pushState(null, "PC's Site", location.protocol + "//" + location.host + "/" + embedPath + ".html", null)
    fetch(location.protocol + "//" + location.host + "/embeds/" + embedPath + ".html").then(function(whatDid) {
        whatDid.text().then(function(stringHTML) {
            displayPage.innerHTML = stringHTML;
        })
    })
}
