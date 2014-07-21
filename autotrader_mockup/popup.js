
//thanks: http://stackoverflow.com/questions/11493995/display-current-url-in-a-chrome-extension
// parse page title:
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
  function(tabs){
    //alert(tabs[0].url); //this works -- shows extension in a traditional popup.

    var h=document.createElement("h4");
    //var t=document.createTextNode(tabs[0].url);
    var t=document.createTextNode(tabs[0].title);
    h.appendChild(t);
    //document.body.appendChild(h);
  }
);


//DOM experiments -- not working at all right now.

var urlRegex = /^https?:\/\/(?:[^\.]+\.)?stackoverflow\.com/;

//thanks: http://stackoverflow.com/questions/19758028/chrome-extension-get-dom-content
/* A function creator for callbacks */
function doStuffWithDOM(domContent) {
    console.log("I received the following DOM content:\n" + domContent);
    var h=document.createElement("h4");
    //var t=document.createTextNode(domContent);
    var t=document.createTextNode("hello from doStuffWithDOM()");
    h.appendChild(t);
    document.body.appendChild(h);
}

/* When the browser-action button is clicked... */
//chrome.browserAction.onClicked.addListener(function(tab) {
document.addEventListener('DOMContentLoaded', function (tab) {
    /*...check the URL of the active tab against our pattern and... */
    //if (urlRegex.test(tab.url)) {
        var h = document.createElement("h4");
        h.appendChild(document.createTextNode("hello from addListener() callback");
        document.body.appendChild(h);

        /* ...if it matches, send a message specifying a callback too */
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                doStuffWithDOM);
    //}
});




