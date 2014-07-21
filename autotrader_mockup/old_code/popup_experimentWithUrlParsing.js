// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */

/*
var tablink;
chrome.tabs.getSelected(null,function(tab) {
    tablink = tab.url;
});
*/

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {

  /*
  //http://stackoverflow.com/questions/2797853/get-url-and-save-it-chrome-extension
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    alert(tab.url);
  });
  var h=document.createElement("h4");
  var t=document.createTextNode(typeof(url));
  //var t=document.createTextNode (document.location.href); //produces chrome-extension://lbddnddcmfekbihogobdifjockdenbbl/popup.html (instead of the current page URL) 
  //var t=document.createTextNode("Hello World"); //THIS WORKS. 
  //var t=document.createTextNode(tab.url); //not working... nothing shows up
  h.appendChild(t);
  document.body.appendChild(h);
  */
  //alert(tab.url);
});

//thanks: http://stackoverflow.com/questions/11493995/display-current-url-in-a-chrome-extension
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
  function(tabs){
    //alert(tabs[0].url); //this works -- shows extension in a traditional popup.

    var h=document.createElement("h4");
    var t=document.createTextNode(tabs[0].url);
    h.appendChild(t);
    document.body.appendChild(h);
  }
);

/*
//thanks: http://stackoverflow.com/questions/2797853/get-url-and-save-it-chrome-extension
chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('currentLink').innerHTML = tab.url;
});
*/
