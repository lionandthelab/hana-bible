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