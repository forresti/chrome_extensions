var current,
    interval;

//getting new_or_used and year is easy... but make and model is more involved:
var getMakeModel = function(ymm_str){

    ymm_str = ymm_str.split("<")[0]; //strip away <span ...>trim level</span>

    var brand = "unknown";
    var model = "unknown";

    //brandList comes from brandList.js
    for(i=0; i<brandList.length; i++){
        var n = ymm_str.search(brandList[i]);
        if (n != -1){
            brand = brandList[i];
            model = ymm_str.slice((n + brand.length + 1), ymm_str.length); //model = everything after the brand
            break;
        }
    }

    makeModel = {"make":brand, "model":model};
    return makeModel;
}

//get car info from autotrader page ... year, make, model (ymm)
var ymm_parse = function(){

    var ymm_header = document.getElementsByClassName("listing-title atcui-block");
    var ymm_str = ymm_header[0].innerHTML;
    var ymm_parts = ymm_str.split(" ");
    var new_or_used = ymm_parts[0];
    var year = ymm_parts[1];
    makeModel = getMakeModel(ymm_str);

    var ymmData = {"ymm_str":ymm_str};
    ymmData.new_or_used = new_or_used;
    ymmData.year = year;
    ymmData.make = makeModel.make;
    ymmData.model = makeModel.model;

    return ymmData; //e.g. new_or_used:new, year:2014, make:Subaru, model:BRZ
}

//get car price from our server (which queries Edmunds)
//var requestCarPrice = function(){...}

var injector = function(){

    //var priceDiv = document.getElementsByClassName("price-summary-area");
    var priceDiv = document.getElementsByClassName("primary-price"); //actually an h4, not a div.
    priceDiv = priceDiv[0];
    console.log(priceDiv);    

    //original priceDiv.innerHTML: <span title="Subaru BRZ Car Price $31,381 ">$31,381</span> 

    askingPriceStr = "asking price:<br>" + priceDiv.innerHTML;
    edmundsPriceStr = '<br>Edmunds TMV: <br> <span class="price-valuation" source="edmunds">$29000</span>';
    //TODO: create a 'content.css' file that dresses up price-valuation.

    priceDiv.innerHTML = askingPriceStr + edmundsPriceStr; //write changes to AutoTrader DOM
}

console.log("hi from forrest");
console.log("brandList: " + brandList); //included from brandList.js (see manifest.json for how this works)

ymm_json = ymm_parse();
console.log(JSON.stringify(ymm_json));

//interval = setInterval(injector,1000)
injector();

