'use strict';

`lowerCase - получает на вход строку, преобразует к нижнему регистру,
 первую букву делает заглавной.
 
 stringCorrector - Получает на вход строку, выводит строку с 
 исправленными отступами по всей строке.
 
 wordCounter - Принимает строку и считает количество слов.
 
 uniqueWords - Принимает строку, считает количество слов в строке и 
 их повторений.`

function lowerCase(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}


function stringCorrector(str) {
    let cutSpaceArray = str.split(' ')
        ,cutSpaceString = '';

    for(let wordCutSpace of cutSpaceArray) {
        if(!wordCutSpace == ' ') {
            cutSpaceString += wordCutSpace.trim() + ' ';
        }
    }

    let cutDotArray = cutSpaceString.split('.')
        ,cutDotString = ''
        ,i = 0;

    for(let wordDot of cutDotArray) {
        i++
        if(i == cutDotArray.length) {
            cutDotString += wordDot.trim();
            i = 0;
            break;
        }

        cutDotString += wordDot.trim() + '. ';
    }


    let cutCommaArray = cutDotString.split(',')
        ,cutCommaString = '';

    for(let wordComma of cutCommaArray) {
        i++
        if(i == cutCommaArray.length) {
            cutCommaString += wordComma.trim();
            break;
        }
        cutCommaString += wordComma.trim() + ', ';
    }

    return cutCommaString;
}


function wordCounter(str) {
    let array = str.split(' ');

    return array.length;
}


function uniqueWords(str) {

    let countUniqueWoeds = new Map()
       ,result = ''
       ,raz = ''
       ,cutArray = str
                    .split(',')
                    .join('')
                    .split('.')
                    .join('')
                    .split(' ');

    loop: for ( let i of cutArray ) {
        let index = 0;

        for(let j of cutArray) {
            if(i.toLowerCase() == j.toLowerCase()) {
                index++;
            }
        }

        for (let repeat of countUniqueWoeds.keys()) {
            if (i.toLowerCase() == repeat.toLowerCase()) continue loop;
        }

        let key
        ,value;

        countUniqueWoeds.set(i, index);

        for (let test of countUniqueWoeds) {
            [key, value] = test;
        }
        
        if (value % 2 == 0) {
            raz = 'Раза';
        } else raz = 'раз';
        result += `Слово '${key}' встречается '${value}' ${raz}; \n`;
    }


    return result;
}

    

let spaceMessage = `Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.`
   ,countWords = "Текст, в котором слово текст несколько раз встречается и слово тоже."
   ,fixMessage = stringCorrector(spaceMessage);


console.log( lowerCase('пРИвет, Как дЕЛА') );
console.log( stringCorrector(spaceMessage) );
console.log( wordCounter(fixMessage) );
console.log(uniqueWords(countWords));