import json
import openpyxl
filename = "bibleList.xlsx"
csv = openpyxl.load_workbook(filename)

sheet = csv.worksheets[0]

data = []
for row in sheet.rows:
    data.append([row[0].value,row[1].value,row[2].value])

with open('bible_sae.json', 'r',  encoding='utf-8') as json_file:
    json_data = json.load(json_file)

f =  open('titles.txt', 'r',  encoding='utf-8')
titles = f.read()
titles = titles.split('\t')

TITLE = []
aa = []
bible = 'gen'
chap = '3'
chkTitle = False
tmpTitle = ''
books = {}
checkNew = False
tmpNew = ''
for row in sheet.rows:
    chapters = {}
    for nChap in range(row[2].value):
        scripts = {} #스크립트들 모음
        script = json_data[row[1].value][str(nChap+1)]
        script = script.split('\n')
        del script[0:3]
        for i,s in enumerate(script):
            verse = {}
            if len(s) < 1:
                continue
            s = s.split('   ')
            # print(s)
            if len(s) == 2:
                if chkTitle and checkNew:
                    verse['title'] = tmpTitle + '\n(' + tmpNew + ')'
                    chkTitle = False
                    tmpTitle = ''
                    checkNew = False
                    tmpNew = ''
                if chkTitle:
                    #print('tmpTitle    ' + tmpTitle)
                    verse['title'] = tmpTitle
                    chkTitle = False
                    tmpTitle = ''
                if checkNew :
                    #print('tmpNew    ' + tmpNew)
                    s[1] = tmpNew + s[1]
                    checkNew = False
                    tmpNew = ''
                if len(s[1]) < 1:
                    print(s[1] + '1231231')
                verse['verse'] = s[1]
                scripts[s[0]] = verse
            else:
                if s[0] in titles:
                    chkTitle = True
                    tmpTitle = script[i]
                    if i == len(script)-1:
                        print(tmpTitle)
                    TITLE.append(tmpTitle)
                else:
                    checkNew = True
                    tmpNew = script[i]


        chapters[str(nChap+1)] = scripts
    books[row[1].value] = chapters

f = open('titles1.txt', mode='wt', encoding='utf-8')
st = ','.join(TITLE)
f.write(st)



with open('bible_ver_gae.json', 'w', encoding='utf-8') as make_file:
    json.dump(books, make_file, indent=4, ensure_ascii=False)