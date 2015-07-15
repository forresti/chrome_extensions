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
            //tmv.loadjs('http://widgets.edmunds.com/js/tmv/tmvwidget.js', tmv.initWidget);
            tmv.loadjs('./js_off_the_shelf/tmvwidget.js', tmv.initWidget); //modified to fix 'load:years' trigger
        },
        initWidget: function() {
            var widget = new EDM.TMV(apikey, {root: 'tmvwidget', baseClass: 'tmvwidget'});
            widget.init({"includedMakes":"all","price":"tmv-invoice-msrp","showVehicles":"ALL","zip":"94720"});
            widget.render();

            //Forrest's callbacks to auto-fill widget (TODO: receive YMM from AutoTrader parser)
            //note: if we don't wait for these things to load, the lists of makes/models/years are Undefined.
            widget.on('load:makes', selectMake);
            //widget.on('change:makes', (function(){ alert('change:makes'); }) ); //doesn't show alert?
            widget.on('load:models', selectModel);
            widget.on('load:years', selectYear);  
            widget.on('load:styles', selectStyle);
            widget.loadPrice(); //equivalent to clicking the Get Price button 
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
        //console.log(s.options[i].value);
        if ( s.options[i].value == v ) {
            s.options[i].selected = true;
            s.onchange(); //trigger Edmunds widget to load next drop-down (e.g. models, years, ...)
            return;
        }
    }
}

//TODO: refactor
//function selectField(selectorClass='tmvwidget-make', value='bmw')

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
    var selector = document.getElementsByClassName("tmvwidget-year")[0];
    var value = '2011USED'; //TODO: take Year as input
    setSelectedIndex(selector, value);
};

function selectStyle(){
    var selector = document.getElementsByClassName("tmvwidget-style")[0];
    //var value = '101288741'; //contains "335d 4dr Sedan (3.0L 6cyl Turbodiesel 6A)"
    //setSelectedIndex(selector, value);

    //for now, let's just default to the first trim level in the list
    selector.options[1].selected=true;
    selector.onchange(); 
};

