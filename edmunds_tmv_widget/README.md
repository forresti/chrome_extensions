this is NOT a browser extension.

rather, this is a testbench for hacking the Edmunds TMV Widget.



files:
_index.html
  edmunds_user_customizable.css #my options
  edmunds.com/.../simple-light.css #hard-coded stuff (could make my own version)
  
  ui_edmunds.js 
    edmunds.com/.../tmvwidget.js 
      edmunds.com/.../sdk.js #EDMUNDSAPI()


problems (UI):
- need to wait for Makes to load before auto-selecting Make.
- when we auto-select a Make, it appears in drop-down, but it doesn't trigger the widget to load Models. (temporarily obviated the 'wait for Makes to load' problem by doing this on Chrome console.)

problems (parsing):
- need to find a better way to map between AutoTrader and Edmunds car taxonomies


