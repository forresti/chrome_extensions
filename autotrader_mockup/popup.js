
//thanks: http://stackoverflow.com/questions/11493995/display-current-url-in-a-chrome-extension
// parse page title:
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
  function(tabs){
    //alert(tabs[0].url); //this works -- shows extension in a traditional popup.

    var h=document.createElement("h4");
    //var t=document.createTextNode(tabs[0].url);
    var t=document.createTextNode(tabs[0].title);
    h.appendChild(t);
    document.body.appendChild(h);
  }
);


