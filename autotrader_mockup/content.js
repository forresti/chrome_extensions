var current,
    interval;

var checker = function(){

    //var menuWrapper = document.getElementById(" ")
    var priceHeader = document.getElementsByClassName("primary-price");
    console.log(priceHeader);    

    var h=document.createElement("h4");
    var t=document.createTextNode("hi from forrest");
    h.appendChild(t);
    document.body.appendChild(h);
}

console.log("hi from forrest");
//interval = setInterval(checker,1000)
checker();

