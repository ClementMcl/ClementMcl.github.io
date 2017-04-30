var blockinfoRequest = new XMLHttpRequest();
blockinfoRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var parsedJson = JSON.parse(this.responseText);
        document.getElementById("binfo").innerHTML = "Nombre de blocks dans la chaîne " + parsedJson.chain + " : " + parsedJson.blocks + "<br/>Difficulté du minage : " + parsedJson.difficulty + "<br/>Proportion des transactions de la blockchain actuellement validées : " + 100 * parsedJson.verificationprogress + " %";
    }
};
blockinfoRequest.open("GET", "https://bitcoin.mubiz.com/blockchaininfo", true);
blockinfoRequest.send();
