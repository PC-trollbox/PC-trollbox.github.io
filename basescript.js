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
