var current,
    interval;

//get car info from autotrader page
//var getCarInfo = function(){...}

//get car price from our server (which queries Edmunds)
//var requestCarPrice = function(){...}

var injector = function(){

    //var priceDiv = document.getElementsByClassName("price-summary-area");
    var priceDiv = document.getElementsByClassName("primary-price"); //actually an h4, not a div.
    priceDiv = priceDiv[0];
    console.log(priceDiv);    

    //original priceDiv.innerHTML: <span title="Subaru BRZ Car Price $31,381 ">$31,381</span> 
    //console.log("priceDiv.innerHTML:" + priceDiv.innerHTML);
    //priceDiv.innerHTML = priceDiv.innerHTML + '<br><span class="price-valuation" source="edmunds">$29000</span>';

    askingPriceStr = "asking price:<br>" + priceDiv.innerHTML;
    edmundsPriceStr = '<br>Edmunds TMV: <br> <span class="price-valuation" source="edmunds">$29000</span>';
    //TODO: create a 'content.css' file that dresses up price-valuation.

    priceDiv.innerHTML = askingPriceStr + edmundsPriceStr; //write changes to AutoTrader DOM
}

console.log("hi from forrest");


//interval = setInterval(injector,1000)
injector();

