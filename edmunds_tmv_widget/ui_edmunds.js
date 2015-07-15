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

    /* verify that this document INCLUDES stuff rendered in widget above. (yes.) */
    var all = document.getElementsByTagName("*");
    //alert(all);
    //console.log(all);

    /* auto-select a specific Make... */ 
    //FIXME: make_menu is an array with stuff in it, but make_menu[0] is undefined. huh?
    //var make_menu = document.getElementsByClassName("tmvwidget-make");//[0];
    //make_menu.remove(0); //zeroth element is empty and breaks the 'options.length' below
    //make_menu = document.getElementById("edm1436923668485_make"); //null
    console.log(make_menu);
    //<option value="acura">
    //alert(make_menu.option.value[0]);

    //TODO: make a function out of this as in http://stackoverflow.com/questions/8140862/how-to-select-a-value-in-dropdown-javascript
    var s = make_menu;
    var v = 'BMW';
    // FIXME: it doesn't like 's.options.length', perhaps because there one of the options is empty (thx: stackoverflow.com/questions/17583366)
    for ( var i = 0; i < s.options.length; i++ ) {
        if ( s.options[i].value == v ) {
            s.options[i].selected = true;
            return;
        }
    }
 
}(document, 'script', 'cascy99pcgsnf2xjw58jeg25'));



