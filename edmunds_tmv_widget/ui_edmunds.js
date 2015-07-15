
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
        }
    }
    tmv.init();
}(document, 'script', 'cascy99pcgsnf2xjw58jeg25'));

//BAD HACK timer... hangs cpu (FIXME)
function sleep(milliSeconds){
    var startTime = new Date().getTime(); // get the current time
    while (new Date().getTime() < startTime + milliSeconds); // hog cpu
}

function selectMake(){
   /* verify that this document INCLUDES stuff rendered in widget above. (yes.) */
    var all = document.getElementsByTagName("*");
    //alert(all);
    //console.log(all);

    sleep(1000);
    /* auto-select a specific Make... */ 
    //FIXME: make_menu is an array with stuff in it, but make_menu[0] is undefined. huh?
    var make_menu = document.getElementsByClassName("tmvwidget-make"); //[0];

/*
    //ugh, this hangs:
    while(make_menu[0] == undefined){
        setTimeout(function(){
            console.log(make_menu);
        }, 2000);
    }
*/
    console.log(make_menu);

    //TODO: make a function out of this as in http://stackoverflow.com/questions/8140862/how-to-select-a-value-in-dropdown-javascript
    var s = make_menu;
    var v = 'bmw';
    // FIXME: it doesn't like 's.options.length', perhaps because there one of the options is empty (thx: stackoverflow.com/questions/17583366)
    for ( var i = 0; i < s.options.length; i++ ) {
        if ( s.options[i].value == v ) {
            s.options[i].selected = true;
            return;
        }
    }
};
$(document).ready(selectMake()); //putting $(document).ready here doesn't help. (still not waiting for options to load)

