export function get_bible(bible, chapter) {
    const bible_file = require('./GAE_bible_final.json');
    const chpater_verses = bible_file[bible][chapter];
    var verses_str = [];
    for(var i = 0 ; i < chpater_verses.length ; i++){
        if(chpater_verses[i].title != undefined){
            verses_str += '\n\n' + chpater_verses[i].title + '\n\n';
        }
        verses_str += (i+1).toString() + '. ' + chpater_verses[i].verse + '\n';
    }
    return verses_str;   
  }

  export function get_date(month, date) {
    const read_list = require('./readList.json');
    const read_chapter = read_list[month + '/' +date];
    for(var i = 0 ; i < read_chapter.length ; i++){
        var tmp = read_chapter[i].split(' ');
        read_chapter[i] = tmp[0].toLowerCase() + ' ' + tmp[1];
    }
    console.log(read_chapter);
    return read_chapter;   
  }