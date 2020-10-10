from selenium import webdriver
import json
import openpyxl
import requests
from bs4 import BeautifulSoup

#CONFIG
#version = 'SAENEW'
version = 'GAE'
url_format = "https://www.bskorea.or.kr/bible/korbibReadpage.php?version={0}&book={1}&chap={2}&sec=1&cVersion=&fontSize=15px&fontWeight=normal"

filename = "bibleList.xlsx"
book_name = openpyxl.load_workbook(filename)

sheet = book_name.worksheets[0]

data = []
for row in sheet.rows:
    data.append([row[0].value,row[1].value,row[2].value])



driver = webdriver.Chrome('chromedriver.exe')

Bible_total = {}
Bible = {}
num_of_book = 66
for j in range(num_of_book):
    Chapter = {}
    num_of_chapter = data[j][2]
    for i in range(num_of_chapter):
        book_name = data[j][1]
        chapter_string = str(i + 1)
        url = url_format.format(version, book_name, chapter_string)
        driver.get(url)
        driver.implicitly_wait(3)
        script = driver.find_element_by_class_name('bible_read')
        Chapter[chapter_string] = script.text
    Bible[book_name] = Chapter
    print(book_name)

driver.close()
with open('bible_{0}.json'.format(version), 'w', encoding='utf-8') as make_file:
    json.dump(Bible, make_file, indent=4, ensure_ascii=False)


