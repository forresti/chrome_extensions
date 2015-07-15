//make sure you include jquery in your HTML that calls this.

/* TODO: figure how to export this in a modular way */

(function(d, tag, apikey){
    var tmv = {
        init: function() {
            tmv.loadjs('http://widgets.edmunds.com/js/edm/sdk.js', tmv.loadWidget);
        },
        loadjs: function(file, callback) {
            var fjs = d.getElementsByTagName(tag)[0],
                s = d.createElement(tag);
            s.onload = s.onreadystatechange = function() {
                var r = this.readyState;
                if (!r || r === 'loaded' || r === 'complete') {
                    callback.call();
                    s.onreadystatechange = null;
                }
            };
            s.src = file;
            fjs.parentNode.insertBefore(s, fjs);
        },
        loadWidget: function() {
            tmv.loadjs('http://widgets.edmunds.com/js/tmv/tmvwidget.js', tmv.initWidget);
        },
        initWidget: function() {
            var widget = new EDM.TMV(apikey, {root: 'tmvwidget', baseClass: 'tmvwidget'});
            widget.init({"includedMakes":"all","price":"tmv-invoice-msrp","showVehicles":"ALL","zip":"94720"});
            widget.render();

            //Forrest's callbacks to load makes (TODO: receive YMM from AutoTrader parser)
            widget.on('load:makes', selectMake);
            widget.on('load:models', selectModel);
            widget.on('load:years', selectYear); 
        }
    }
    tmv.init();

}(document, 'script', 'cascy99pcgsnf2xjw58jeg25'));

//thx: stackoverflow.com/questions/8140862/how-to-select-a-value-in-dropdown-javascript
//@param s='select' menu to modify
//@param v=value to input to 'select' menu
//find the matching make in the <select> drop-down, and choose it.
function setSelectedIndex(s, v) {
    for ( var i = 0; i < s.options.length; i++ ) {
        console.log(s.options[i].value)
        if ( s.options[i].value == v ) {
            s.options[i].selected = true;
            s.onchange(); //trigger Edmunds widget to pull Models
            return;
        }
    }
}

//TODO: refactor
//function selectField(selectorClass='tmvwidget-make', value='BMW')

function selectMake(){
    var selector = document.getElementsByClassName("tmvwidget-make")[0];
    var value = 'bmw'; //TODO: take Make (e.g. 'bmw') as input
    setSelectedIndex(selector, value);
};

function selectModel(){
    var selector = document.getElementsByClassName("tmvwidget-model")[0];
    var value = '3-series:diesel'; //TODO: take Model as input
    setSelectedIndex(selector, value);
};

function selectYear(){
    console.log("hello from selectYear");
    var selector = document.getElementsByClassName("tmvwidget-year")[0];
    var value = '2011USED'; //TODO: take Year as input
    setSelectedIndex(selector, value);
};

