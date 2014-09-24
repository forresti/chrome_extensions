var current,
    interval;

var injector = function(){

    //var priceDiv = document.getElementsByClassName("price-summary-area");
    var priceDiv = document.getElementsByClassName("primary-price"); //actually an h4, not a div.
    priceDiv = priceDiv[0];
    console.log(priceDiv);    

    var h=document.createElement("h4");
    var t=document.createTextNode("hi from forrest");
    h.appendChild(t);
    //document.body.appendChild(h);
    //priceDiv.appendChild(h);
    //priceDiv.innerHTML = priceDiv.innerHTML + "hi from Forrest";

    //TODO: create a 'content.css' file that dresses up price-valuation.
    priceDiv.innerHTML = priceDiv.innerHTML + '<span class="price-valuation" source="edmunds">$29000</span>'
}

console.log("hi from forrest");


//interval = setInterval(injector,1000)
injector();

