from bs4 import BeautifulSoup
import urllib2
from IPython import embed
import selenium.webdriver as webdriver

#get list of autotrader brands

url="http://www.autotrader.com"
driver = webdriver.Firefox()
driver.get(url)
soup = BeautifulSoup(driver.page_source)
divs = soup.('div')
carHtml = None
for div in divs:
    try:
        #print div['id']
        if 'homepageMake' in div['id']:
            carHtml = div
            break
    except:
        pass

#brandHtml = <option value="ACURA">Acura</option>, <option value="ALFA">Alfa Romeo</option>, ...
brandHtml = carHtml.find_all('option')
brands = [b.contents[0].encode('utf-8') for b in brandHtml] #<option value="MINI">MINI</option> -> MINI
driver.quit()

#just paste 'brands' array into a javascript file

