
/* A function creator for callbacks */
function doStuffWithDOM(domContent) {
    //console.log("I received the following DOM content:\n" + domContent);
    alert("I received the following DOM content:\n" + domContent);
}

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) { //works
//chrome.tabs.onUpdated.addListener(function (tab) { //breaks doStuffWithDOM
    chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDOM);
});

