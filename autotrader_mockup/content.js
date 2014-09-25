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
    ymmData.miles = document.getElementsByClassName("mileage")[0].innerHTML.split(" ")[1]; //"Mileage: 400" -> "400"
    ymmData.miles = ymmData.miles.replace(',', ''); //remove commas

    return ymmData; //e.g. new_or_used:new, year:2014, make:Subaru, model:BRZ
}

//thx: http://stackoverflow.com/questions/247483/http-get-request-in-javascript 
function httpGet(theUrl){
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//get car price from our server (which queries Edmunds)
//@return ymmData, with an 'edmundsPrice_privateParty' and 'edmundsPrice_retail' fields.
var requestCarPrice = function(ymmData){
    //step 1: get style ID
    url = 'http://api.edmunds.com/v1/api/vehicle/modelyearrepository/foryearmakemodel?make=' + ymmData.make + 
                                                                                   '&model=' + ymmData.model + 
                                                                                    '&year=' + ymmData.year +
                                                                 '&api_key=cascy99pcgsnf2xjw58jeg25&fmt=json';
    console.log('get style list: ' + url);
    responseText=httpGet(url); //TODO: catch if this styleHolder is empty. (e.g. with 1989 porsche 911)
    responseText = JSON.parse(responseText);

    style = responseText.modelYearHolder[0].usedDefaultStyle.link; //e.g. /api/vehicle/style/200487466 for range rover
    style_parts = style.split('/'); 
    style = style_parts[ (style_parts.length - 1) ]; //200487466
    console.log("style ID: " + style);
    ymmData.styleID = style;

    //step 2: get price
    url = 'http://api.edmunds.com/v1/api/tmv/tmvservice/calculateusedtmv?api_key=cascy99pcgsnf2xjw58jeg25&styleid=' + style + 
                                                                '&zip=94709&mileage=' + ymmData.miles + '&fmt=json&condition=Clean';

    console.log('get price: ' + url);
    responseText=httpGet(url);
    responseText = JSON.parse(responseText);
    ymmData.edmundsPrice_retail = responseText.tmv.nationalBasePrice.usedTmvRetail; //TODO: handle new vs used? 

    ymmData.edmundsPrice_retail_link = 'http://www.edmunds.com/' + ymmData.make.toLowerCase() + '/' + ymmData.model.toLowerCase() + '/' + 
                                                    ymmData.year + '/tmv-appraise.html?style=' + ymmData.styleID;

    return ymmData;
}

var injector = function(ymmData){

    //var priceDiv = document.getElementsByClassName("price-summary-area");
    var priceDiv = document.getElementsByClassName("primary-price"); //actually an h4, not a div.
    priceDiv = priceDiv[0]; //priceDiv.innerHTML: <span title="Subaru BRZ Car Price $31,381 ">$31,381</span> 
    console.log(priceDiv); 

    askingPriceStr = "asking price:<br>" + priceDiv.innerHTML;
    edmundsPriceStr = '<br>Edmunds TMV: <br> <span class="price-valuation" source="edmunds">$' + ymmData.edmundsPrice_retail + '</span>' + 
                      '<a href=' + ymmData.edmundsPrice_retail_link + '> (more)</a>';
    //TODO: create a 'content.css' file that dresses up price-valuation.

    priceDiv.innerHTML = askingPriceStr + edmundsPriceStr; //write changes to AutoTrader DOM
}

console.log("hi from forrest");
//console.log("brandList: " + brandList); //included from brandList.js (see manifest.json for how this works)

ymm_json = ymm_parse();
console.log(JSON.stringify(ymm_json));

requestCarPrice(ymm_json);
console.log(JSON.stringify(ymm_json));

//interval = setInterval(injector,1000)
injector(ymm_json);

