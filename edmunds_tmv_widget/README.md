this is NOT a browser extension.

rather, this is a testbench for hacking the Edmunds TMV Widget.



files:
_index.html
  edmunds_user_customizable.css #my options
  edmunds.com/.../simple-light.css #hard-coded stuff (could make my own version)
  
  ui_edmunds.js 
    tmv.initWidget() #Forrest's auto-fill modifications are in here
    edmunds.com/.../tmvwidget.js #fixed a bug on triggering 'load:years' 
      edmunds.com/.../sdk.js #EDMUNDSAPI()


problems (UI):
- nothing gets triggered by widget.on('load:years', ...). huh?
 (When I manually poke around in 'years' from the Chrome console, things make sense.)
 --> solved: tmvwidget.js had a bug, where 'load:years' is never reached. I hacked in a bugfix and emailed Edmunds about it.

- need to wait for Makes to load before auto-selecting Make.
 --> solved: widget.on('load:makes', callback=selectMake);

- when we auto-select a Make, it appears in drop-down, but it doesn't trigger the widget to load Models. (temporarily obviated the 'wait for Makes to load' problem by doing this on Chrome console.)
 --> solved: manually call make_menu.onchange(); this triggers Edmunds to pull Models 

problems (parsing):
- need to find a better way to map between AutoTrader and Edmunds car taxonomies


