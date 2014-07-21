/* Regex-pattern to check URLs against. 
   It matches URLs like: http[s]://[...]stackoverflow.com[...] */
//var urlRegex = /^https?:\/\/(?:[^\.]+\.)?stackoverflow\.com/;

/* A function creator for callbacks */
function doStuffWithDOM(domContent) {
    //console.log("I received the following DOM content:\n" + domContent);
    alert("I received the following DOM content:\n" + domContent);
}

// strange. I removed all the "stackoverflow-specific" references, but this still only works correctly
// for stackoverflow pages (popup showing HTML). on other pages, I get 
// "I received the following DOM content: undefined"

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
    /*...check the URL of the active tab against our pattern and... */
    //if (urlRegex.test(tab.url)) {
        /* ...if it matches, send a message specifying a callback too */
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                doStuffWithDOM);
    //}
});

