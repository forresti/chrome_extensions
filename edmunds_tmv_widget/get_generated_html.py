from bs4 import BeautifulSoup
import selenium.webdriver as webdriver
import selenium.webdriver.support.ui as ui
from pyvirtualdisplay import Display
import os
from IPython import embed
import datetime
import urllib2

DEBUG=True

#thanks: stackoverflow.com/questions/18130499/how-to-scrape-instagram-with-beautifulsoup
def saveCurrHtml_ifDebug(driver, outFname):
    if(DEBUG):
        currHtml = BeautifulSoup(driver.page_source).prettify().encode('utf-8').strip()
        outF = open(outFname, 'w')
        outF.write(currHtml)
        outF.close()

display = Display(visible=0, size=(800, 600)) #for headless mode
display.start()
driver = webdriver.Chrome()
pageUrl = 'http://127.0.0.1/edmunds_tmv_widget/_index.html'

driver.get(pageUrl) #reload after logging in
saveCurrHtml_ifDebug(driver, 'html/widget_generated.html')

